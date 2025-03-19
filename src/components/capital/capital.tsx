import React from "react";
import * as Style from "~/components/capital/capital.style";
import config from "~/config";
import { appState } from "~/state/app-state";

type Props = {
  id: number;
  color: (typeof config.colors)[number];
};

export default function Capital(props: Props) {
  const wrapperRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    const wrapper = wrapperRef.current;
    if (wrapper === null) return;
    const rect = wrapper.getBoundingClientRect();
    appState.getState().addCapital(props.id, rect.left, rect.top);
  }, [props.id]);

  const selectedCapitalId = appState((state) => state.selectedCapitalId);
  const capital = appState((state) => state.capitals.find((capital) => capital.id === props.id));
  React.useEffect(() => {
    if (selectedCapitalId !== props.id) return;
    const wrapper = wrapperRef.current;
    if (wrapper === null) return;
    if (capital === undefined) return;
    wrapper.style.setProperty("--x", `${capital.x}px`);
    wrapper.style.setProperty("--y", `${capital.y}px`);
    wrapper.style.transform = "translate(-50%, -50%) scale(0.5)";
  }, [selectedCapitalId, props.id, capital]);

  return (
    <Style.Wrapper
      ref={wrapperRef}
      data-color={props.color}
      onPointerDown={(event) => {
        const wrapper = event.currentTarget;
        const state = appState.getState();
        const capital = state.capitals.find((capital) => capital.id === props.id);
        if (capital === undefined) return;
        const x = event.pageX - capital.startX;
        const y = event.pageY - capital.startY;
        state.setSelectedCapitalId(props.id);
        state.moveCapital(props.id, x, y);
        wrapper.style.setProperty("--x", `${x}px`);
        wrapper.style.setProperty("--y", `${y}px`);
        wrapper.style.transform = "translate(-50%, -50%) scale(0.5)";
      }}
    >
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
    </Style.Wrapper>
  );
}
