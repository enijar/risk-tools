import React from "react";
import * as Style from "~/pages/home/home.style";
import Capital from "~/components/capital/capital";

export default function Home() {
  return (
    <Style.Wrapper>
      <Style.Capitals id="capitals">
        <Capital id={1} color="white" />
        <Capital id={2} color="black" />
        <Capital id={3} color="red" />
        <Capital id={4} color="pink" />
        <Capital id={5} color="purple" />
        <Capital id={6} color="blue" />
      </Style.Capitals>
      <Style.Map />
    </Style.Wrapper>
  );
}
