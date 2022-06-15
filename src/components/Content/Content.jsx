/* eslint-disable no-unused-vars */
import React from "react";
import MultipleItems from "./Carousel/MultipleItems";
import MultipleItemsBestSellers from "./CarouselBestSellers/MultipleItemsBestSellers";
import MultipleItemsOffers from "./CarouselOffers/MultipleItemsOffers";
import Header from "./Header/Header";
import MenuSpacing from "./MenuSpacing/MenuSpacing";
import * as S from "./styles";

export default function Content(){

  return(
    <S.Content>
      <Header />
      <MultipleItems />
      <MultipleItemsOffers />
      <MultipleItemsBestSellers/>
      <MenuSpacing/>
    </S.Content>
  )
}
