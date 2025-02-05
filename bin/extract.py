import UnityPy
import os

input_file = "bundles/mapthumbnails_assets_all_a571e7cfb17c7bedf12354bb20f0e935.bundle"
output_folder = "extracted"

os.makedirs(output_folder, exist_ok=True)

env = UnityPy.load(input_file)

for obj in env.objects:
    if obj.type.name in ["Texture2D", "Sprite"]:
        data = obj.read()
        img = data.image
        if img:
            # Use .m_Name if available, otherwise generate a fallback name
            texture_name = data.m_Name if hasattr(data, "m_Name") and data.m_Name else f"texture_{obj.path_id}"
            output_path = os.path.join(output_folder, f"{texture_name}.png")

            # Save image
            img.save(output_path)
            print(f"Extracted: {output_path}")

print("Extraction completed!")
