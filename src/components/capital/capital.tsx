import React from "react";
import config from "~/config";

type Props = {
  color: (typeof config.colors)[number];
};

export default function Capital(props: Props) {
  return (
    <div className="capital" data-color={props.color}>
      <svg viewBox="0 0 278 247.8" xmlns="http://www.w3.org/2000/svg">
        <path
          d="m2.5 9.5v235.8h273v-242.8h-54v43h-52v-43h-58.9v41h-56.1v-41h-52z"
          fill="var(--fill, #ff0000)"
          stroke="var(--stroke, #000000)"
          strokeMiterlimit="10"
          strokeWidth="var(--stroke-width, 5)"
        />
      </svg>
      <select defaultValue={props.color}>
        {config.colors.map((color) => {
          return (
            <option key={color} value={color}>
              {color}
            </option>
          );
        })}
      </select>
    </div>
  );
}
