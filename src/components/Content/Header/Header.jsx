import React from "react";
import { MdQrCodeScanner } from "react-icons/md";
import { TbTruckDelivery} from "react-icons/tb"
import * as S from "./styles";

export default function Header(){

  return(
    <S.Header>
      <S.MainContent>
        <S.HeaderTop>
          <S.HeaderTopLeft>
            <TbTruckDelivery fontSize={35} color="black"/>
            <S.Location>Av. Guedner, 1610</S.Location>
          </S.HeaderTopLeft>
          <S.HeaderTopRight>
            <MdQrCodeScanner fontSize={35}/>
          </S.HeaderTopRight>
        </S.HeaderTop>
        <S.HeaderBottom>
          <S.Categories>
            <S.Category>Lançamentos</S.Category>
            <S.Category>Fornecedores</S.Category>
            <S.Category>Revestimentos</S.Category>
            <S.Category>Depósitos</S.Category>
          </S.Categories>
        </S.HeaderBottom>
      </S.MainContent>
    </S.Header>
  )
}
