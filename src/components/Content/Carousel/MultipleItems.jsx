/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import Slider from "react-slick";
import * as S from "./styles";
import "./slider.css"
import sala from "../../../images/principais/sala.png"
import cozinha from "../../../images/principais/cozinha.png"
import banheiro from "../../../images/principais/banheiro.png"

export default class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 3,
      lazyLoad: 'ondemand',
      arrows: false
    };
    return (
      <S.MainContent>
        <Slider {...settings}>
          <S.Card img={sala}>
            <S.CardName>
              <S.Name>
                sala
              </S.Name>
            </S.CardName>
          </S.Card>
          <S.Card img={cozinha}>
            <S.CardName>
              <S.Name>
                cozinha
              </S.Name>
            </S.CardName>
          </S.Card>
          <S.Card img={banheiro}>
          <S.CardName>
              <S.Name>
                banheiro
              </S.Name>
            </S.CardName>
          </S.Card>
          <S.Card img={sala}>
          <S.CardName>
              <S.Name>
                sala
              </S.Name>
            </S.CardName>
          </S.Card>
          <S.Card img={cozinha}>
          <S.CardName>
              <S.Name>
                cozinha
              </S.Name>
            </S.CardName>
          </S.Card>
          <S.Card img={banheiro}>
          <S.CardName>
              <S.Name>
                banheiro
              </S.Name>
            </S.CardName>
          </S.Card>
        </Slider>
      </S.MainContent>
    );
  }
}
