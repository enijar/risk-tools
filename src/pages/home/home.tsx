import React from "react";

export default function Home() {
  React.useEffect(() => {
    const capitals = document.querySelectorAll<HTMLDivElement>(".capital");
    for (const capital of capitals) {
      const color = capital.querySelector("select");
      if (color === null) continue;
      color.addEventListener("change", (event) => {
        capital.dataset.color = (event.currentTarget as HTMLSelectElement).value;
      });
      let selected = false;
      const rect = capital.getBoundingClientRect();
      const startX = rect.left;
      const startY = rect.top;
      capital.addEventListener("pointerdown", () => {
        selected = true;
      });
      window.addEventListener("pointerup", () => {
        selected = false;
      });
      window.addEventListener("pointermove", (event) => {
        if (!selected) return;
        capital.style.setProperty("--x", `${event.pageX - startX}px`);
        capital.style.setProperty("--y", `${event.pageY - startY}px`);
        capital.style.transform = "translate(-50%, -50%) scale(0.5)";
      });
    }
  }, []);
  return (
    <>
      <div id="capitals">
        <div>
          <div className="capital" data-color="white">
            <svg viewBox="0 0 278 247.8" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2.5 9.5v235.8h273v-242.8h-54v43h-52v-43h-58.9v41h-56.1v-41h-52z"
                fill="var(--fill, #ff0000)"
                stroke="var(--stroke, #000000)"
                strokeMiterlimit="10"
                strokeWidth="var(--stroke-width, 5)"
              />
            </svg>
            <select>
              <option value="white" selected>
                white
              </option>
              <option value="black">black</option>
              <option value="red">red</option>
              <option value="pink">pink</option>
              <option value="purple">purple</option>
              <option value="blue">blue</option>
              <option value="green">green</option>
              <option value="yellow">yellow</option>
              <option value="orange">orange</option>
            </select>
          </div>
          <div className="capital" data-color="black">
            <svg viewBox="0 0 278 247.8" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2.5 9.5v235.8h273v-242.8h-54v43h-52v-43h-58.9v41h-56.1v-41h-52z"
                fill="var(--fill, #ff0000)"
                stroke="var(--stroke, #000000)"
                strokeMiterlimit="10"
                strokeWidth="var(--stroke-width, 5)"
              />
            </svg>
            <select>
              <option value="white">white</option>
              <option value="black" selected>
                black
              </option>
              <option value="red">red</option>
              <option value="pink">pink</option>
              <option value="purple">purple</option>
              <option value="blue">blue</option>
              <option value="green">green</option>
              <option value="yellow">yellow</option>
              <option value="orange">orange</option>
            </select>
          </div>
          <div className="capital" data-color="red">
            <svg viewBox="0 0 278 247.8" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2.5 9.5v235.8h273v-242.8h-54v43h-52v-43h-58.9v41h-56.1v-41h-52z"
                fill="var(--fill, #ff0000)"
                stroke="var(--stroke, #000000)"
                strokeMiterlimit="10"
                strokeWidth="var(--stroke-width, 5)"
              />
            </svg>
            <select>
              <option value="white">white</option>
              <option value="black">black</option>
              <option value="red" selected>
                red
              </option>
              <option value="pink">pink</option>
              <option value="purple">purple</option>
              <option value="blue">blue</option>
              <option value="green">green</option>
              <option value="yellow">yellow</option>
              <option value="orange">orange</option>
            </select>
          </div>
          <div className="capital" data-color="pink">
            <svg viewBox="0 0 278 247.8" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2.5 9.5v235.8h273v-242.8h-54v43h-52v-43h-58.9v41h-56.1v-41h-52z"
                fill="var(--fill, #ff0000)"
                stroke="var(--stroke, #000000)"
                strokeMiterlimit="10"
                strokeWidth="var(--stroke-width, 5)"
              />
            </svg>
            <select>
              <option value="white">white</option>
              <option value="black">black</option>
              <option value="red">red</option>
              <option value="pink" selected>
                pink
              </option>
              <option value="purple">purple</option>
              <option value="blue">blue</option>
              <option value="green">green</option>
              <option value="yellow">yellow</option>
              <option value="orange">orange</option>
            </select>
          </div>
          <div className="capital" data-color="purple">
            <svg viewBox="0 0 278 247.8" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2.5 9.5v235.8h273v-242.8h-54v43h-52v-43h-58.9v41h-56.1v-41h-52z"
                fill="var(--fill, #ff0000)"
                stroke="var(--stroke, #000000)"
                strokeMiterlimit="10"
                strokeWidth="var(--stroke-width, 5)"
              />
            </svg>
            <select>
              <option value="white">white</option>
              <option value="black">black</option>
              <option value="red">red</option>
              <option value="pink">pink</option>
              <option value="purple" selected>
                purple
              </option>
              <option value="blue">blue</option>
              <option value="green">green</option>
              <option value="yellow">yellow</option>
              <option value="orange">orange</option>
            </select>
          </div>
          <div className="capital" data-color="blue">
            <svg viewBox="0 0 278 247.8" xmlns="http://www.w3.org/2000/svg">
              <path
                d="m2.5 9.5v235.8h273v-242.8h-54v43h-52v-43h-58.9v41h-56.1v-41h-52z"
                fill="var(--fill, #ff0000)"
                stroke="var(--stroke, #000000)"
                strokeMiterlimit="10"
                strokeWidth="var(--stroke-width, 5)"
              />
            </svg>
            <select>
              <option value="white">white</option>
              <option value="black">black</option>
              <option value="red">red</option>
              <option value="pink">pink</option>
              <option value="purple">purple</option>
              <option value="blue" selected>
                blue
              </option>
              <option value="green">green</option>
              <option value="yellow">yellow</option>
              <option value="orange">orange</option>
            </select>
          </div>
        </div>
      </div>
      <div id="map"></div>
    </>
  );
}
