import React from "react";
import styled from "styled-components";

const ContainerStyled = styled.div`
    padding: 1% 0 3%;
    h2 {
      color: var(--bodyColor);
    }
    h5 {
        color: var(--blue);
        font-style: italic;
    }

    @media only screen and (max-width: 768px) {
        h2 {
          font-size: 25px;
          line-height: 56px;
          text-align: center;
        }
        h5 {
          text-align: center;
        }
    }
`

interface ITitleSection {
    title: string,
    subTitle: string
}
export default function TitleSection({ title, subTitle }: ITitleSection) {
  return (
    <ContainerStyled>
      <h5>- {subTitle}</h5>
      <h2>{title}</h2>
    </ContainerStyled>
  );
}
