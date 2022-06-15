/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import Slider from "react-slick";
import * as S from "./styles";
import cimento from "../../../images/Offers/cimento.png"

export default class MultipleItemsOffers extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      lazyLoad: 'ondemand',
      arrows: false
    };
    return (
      <S.MainContent>
        <Slider {...settings}>
          <S.Card>
            <S.CardContent>
              <S.CardImage>
                <S.Image src={cimento} alt="cimento"/>
              </S.CardImage>
              <S.CardText>
                <S.Title>
                  Aproveite
                </S.Title>
                <S.Description>
                  super oferta  saco de cimento a partir de <S.DescriptionValue>R$ 29,90</S.DescriptionValue>
                </S.Description>
              </S.CardText>
            </S.CardContent>
          </S.Card>
          <S.Card>
            <S.CardContent>
              <S.CardImage>
                <S.Image src={cimento} alt="cimento"/>
              </S.CardImage>
              <S.CardText>
                <S.Title>
                  Aproveite
                </S.Title>
                <S.Description>
                  super oferta  saco de cimento a partir de <S.DescriptionValue>R$ 29,90</S.DescriptionValue>
                </S.Description>
              </S.CardText>
            </S.CardContent>
          </S.Card>
        </Slider>
      </S.MainContent>
    );
  }
}
