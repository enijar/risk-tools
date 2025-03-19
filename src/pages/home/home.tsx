import React from "react";
import { useLoaderData } from "react-router-dom";
import * as Style from "~/pages/home/home.style";
import { appState } from "~/state/app-state";
import Capital from "~/components/capital/capital";

type Map = {
  name: string;
  image: string;
};

const DEFAULT_MAP = "Europe Advanced";

export default function Home() {
  const maps = useLoaderData<Map[]>();
  const [map, setMap] = React.useState<Map>(maps.find((map) => map.name === DEFAULT_MAP)!);
  React.useEffect(() => {
    appState.getState().reset();
  }, [map]);
  const resetKey = appState((state) => state.resetKey);

  return (
    <Style.Wrapper>
      <Style.MapSelection>
        <select
          defaultValue={DEFAULT_MAP}
          onChange={(event) => {
            setMap(maps.find((map) => map.name === event.currentTarget.value)!);
          }}
        >
          {maps.map((map) => {
            return (
              <option key={map.name} value={map.name}>
                {map.name}
              </option>
            );
          })}
        </select>
      </Style.MapSelection>
      <Style.Capitals key={resetKey}>
        <Capital id={1} color="white" />
        <Capital id={2} color="black" />
        <Capital id={3} color="red" />
        <Capital id={4} color="pink" />
        <Capital id={5} color="purple" />
        <Capital id={6} color="blue" />
      </Style.Capitals>
      <Style.Map style={{ backgroundImage: `url(./maps/${map.image})` }} />
    </Style.Wrapper>
  );
}
