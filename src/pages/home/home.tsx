import React from "react";
import * as Style from "~/pages/home/home.style";
import Capital from "~/components/capital/capital";

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
      <Style.Capitals id="capitals">
        <Capital color="white" />
        <Capital color="black" />
        <Capital color="red" />
        <Capital color="pink" />
        <Capital color="purple" />
        <Capital color="blue" />
      </Style.Capitals>
      <div id="map"></div>
    </>
  );
}
