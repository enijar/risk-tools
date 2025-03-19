import { create } from "zustand/react";

type AppState = {
  selectedCapitalId: number;
  setSelectedCapitalId(selectedCapitalId: number): void;
  capitals: Array<{
    id: number;
    x: number;
    y: number;
    startX: number;
    startY: number;
  }>;
  moveCapital(id: number, x: number, y: number): void;
  addCapital(id: number, startX: number, startY: number): void;
  removeCapital(id: number): void;
  resetKey: number;
  reset(): void;
};

export const appState = create<AppState>((setState, getState) => {
  return {
    selectedCapitalId: -1,
    setSelectedCapitalId(selectedCapitalId) {
      setState({ selectedCapitalId });
    },
    capitals: [],
    moveCapital(id, x, y) {
      const state = getState();
      const capitals = state.capitals.map((capital) => {
        if (capital.id === id) {
          return { ...capital, x, y };
        }
        return capital;
      });
      setState({ capitals });
    },
    addCapital(id, startX, startY) {
      const state = getState();
      const capitals = [...state.capitals, { id, x: 0, y: 0, startX, startY }];
      setState({ capitals });
    },
    removeCapital(id) {
      const state = getState();
      const capitals = state.capitals.filter((capital) => capital.id !== id);
      setState({ capitals });
    },
    resetKey: 0,
    reset() {
      const state = getState();
      setState({ resetKey: (state.resetKey + 1) % 1000 });
    },
  };
});

window.addEventListener("pointerup", () => {
  appState.getState().setSelectedCapitalId(-1);
});

window.addEventListener("pointermove", (event) => {
  const state = appState.getState();
  if (state.selectedCapitalId === -1) return;
  const capital = state.capitals.find((capital) => capital.id === state.selectedCapitalId);
  if (capital === undefined) return;
  state.moveCapital(capital.id, event.pageX - capital.startX, event.pageY - capital.startY);
});
