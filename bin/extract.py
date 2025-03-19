import UnityPy
import os

input_folder = "bundles"
output_folder = "extracted"

os.makedirs(output_folder, exist_ok=True)

for filename in os.listdir(input_folder):
    if filename.endswith(".bundle"):
        bundle_path = os.path.join(input_folder, filename)
        env = UnityPy.load(bundle_path)

        for obj in env.objects:
            if obj.type.name in ["Texture2D", "Sprite"]:
                data = obj.read()
                img = data.image
                if img:
                    texture_name = data.m_Name if hasattr(data, "m_Name") and data.m_Name else f"texture_{obj.path_id}"
                    if texture_name.startswith("textureThumbnail_"):
                        output_path = os.path.join(output_folder, f"{texture_name}.png")
                        img.save(output_path)
                        print(f"Extracted: {output_path}")

print("Extraction completed!")
