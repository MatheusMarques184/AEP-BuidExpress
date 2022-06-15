import React from "react";
import { MdOutlineHome, MdFavoriteBorder, MdOutlineShoppingCart, MdPersonOutline } from "react-icons/md"
import * as S from "./styles"

export default function Menu() {
  return(
    <S.Menu>
        <S.MenuOption>
          <MdOutlineHome fontSize={27}/>
          <p>Inicio</p>
        </S.MenuOption>
        <S.MenuOption>
          <MdFavoriteBorder fontSize={27}/>
          <p>Favoritos</p>
        </S.MenuOption>
        <S.MenuOption>
          <MdOutlineShoppingCart fontSize={27}/>
          <p>Carrinho</p>
        </S.MenuOption>
        <S.MenuOption>
          <MdPersonOutline fontSize={27}/>
          <p>Perfil</p>
        </S.MenuOption>
    </S.Menu>
  )
}
