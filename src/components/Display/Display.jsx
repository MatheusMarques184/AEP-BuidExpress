import React from "react";
import * as S from "./styles"
import Menu from '../Menu/Menu';
import Content from "../Content/Content";

export default function Display(){
  return (
    <S.Display>
      <Content />
      <Menu/>
    </S.Display>
  )
}
