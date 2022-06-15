/* eslint-disable no-console */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from "react";
import Slider from "react-slick";
import * as S from "./styles";
import torneira from "../../../images/BestSellers/torneira.png";
import areia from "../../../images/BestSellers/areia.png";
import lixaFerro from "../../../images/BestSellers/lixaFerro.png";
import "./slider.css";

export default class MultipleItemsBestSellers extends Component {
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
          <S.Card>
            <S.CardContent>
              <S.CardImage>
                <S.Image src={torneira} alt="torneira"/>
              </S.CardImage>
              <S.CardText>
                <S.DescriptionValue>R$ 233,90</S.DescriptionValue>
                <S.Description>
                Torneira Prizi Cascata
                </S.Description>
              </S.CardText>
              <S.Buy>
                  <S.ButtonBuy>
                    <S.Button>Comprar</S.Button>
                  </S.ButtonBuy>
                </S.Buy>
            </S.CardContent>
          </S.Card>
          <S.Card>
            <S.CardContent>
              <S.CardImage>
                <S.Image src={lixaFerro} alt="lixaFerro"/>
              </S.CardImage>
              <S.CardText>
                <S.DescriptionValue>R$ 3,90</S.DescriptionValue>
                <S.Description>
                Folha Lixa Ferro 80 - 3M
                </S.Description>
              </S.CardText>
              <S.Buy>
                  <S.ButtonBuy>
                    <S.Button>Comprar</S.Button>
                  </S.ButtonBuy>
                </S.Buy>
            </S.CardContent>
          </S.Card>
          <S.Card>
            <S.CardContent>
              <S.CardImage>
                <S.Image src={areia} alt="areia"/>
              </S.CardImage>
              <S.CardText>
                <S.DescriptionValue>R$ 4,99</S.DescriptionValue>
                <S.Description>
                Areia Média Lavada 20kg
                </S.Description>
              </S.CardText>
              <S.Buy>
                  <S.ButtonBuy>
                    <S.Button>Comprar</S.Button>
                  </S.ButtonBuy>
                </S.Buy>
            </S.CardContent>
          </S.Card>
          <S.Card>
            <S.CardContent>
              <S.CardImage>
                <S.Image src={torneira} alt="torneira"/>
              </S.CardImage>
              <S.CardText>
                <S.DescriptionValue>R$ 233,90</S.DescriptionValue>
                <S.Description>
                Torneira Prizi Cascata
                </S.Description>
              </S.CardText>
              <S.Buy>
                  <S.ButtonBuy>
                    <S.Button>Comprar</S.Button>
                  </S.ButtonBuy>
                </S.Buy>
            </S.CardContent>
          </S.Card>
          <S.Card>
            <S.CardContent>
              <S.CardImage>
                <S.Image src={lixaFerro} alt="lixaFerro"/>
              </S.CardImage>
              <S.CardText>
                <S.DescriptionValue>R$ 3,90</S.DescriptionValue>
                <S.Description>
                Folha Lixa Ferro 80 - 3M
                </S.Description>
              </S.CardText>
              <S.Buy>
                  <S.ButtonBuy>
                    <S.Button>Comprar</S.Button>
                  </S.ButtonBuy>
                </S.Buy>
            </S.CardContent>
          </S.Card>
          <S.Card>
            <S.CardContent>
              <S.CardImage>
                <S.Image src={areia} alt="areia"/>
              </S.CardImage>
              <S.CardText>
                <S.DescriptionValue>R$ 4,99</S.DescriptionValue>
                <S.Description>
                Areia Média Lavada 20kg
                </S.Description>
              </S.CardText>
              <S.Buy>
                  <S.ButtonBuy>
                    <S.Button>Comprar</S.Button>
                  </S.ButtonBuy>
                </S.Buy>
            </S.CardContent>
          </S.Card>
        </Slider>
      </S.MainContent>
    );
  }
}
