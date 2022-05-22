import React from "react";
import styled from "styled-components";

export default function Header() {
  return <Head> CINEFLEX </Head>;
}

//Styles

const Head = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 67px;
  background-color: #c3cfd9;
  color: #e8833a;

  font-size: 34px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;
