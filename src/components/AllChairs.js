import axios from "axios";
import { useParams } from "react-router-dom";
import { React, useEffect, useState } from "react";
import styled from "styled-components";
import arrow from "../img/arrow-undo.svg"

import ChairsContainer from "./ChairsContainer";

export default function AllChairs(props) {
  const { idSessao } = useParams();
  const [seats, setSeats] = useState([]);

  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${idSessao}/seats`
    );
    promisse.then((response) => setSeats(response.data));
  }, [idSessao]);

  if (seats.length === 0) {
    return "Carregando...";
  }

  return (
    <><Back onClick={backPage}> <img src={arrow} alt=""/> </Back>
      <Container>
        <Title>Selecione o(s) assento(s)</Title>

        <ChairsContainer
          seats={seats}
          dataSucess={props.dataSucess}
          setDataSucess={props.setDataSucess}
        />
      </Container>
      <Footer>
        <div>
          <img src={seats.movie.posterURL} alt={seats.movie.title} />
        </div>
        <span>
          <p>{seats.movie.title}</p>
          <p>{`${seats.day.weekday} - ${seats.day.date}`}</p>
        </span>
      </Footer>
    </>
  );
}

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
  a {
    text-decoration: none;
  }
`;

const Title = styled.h1`
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.04em;
  text-align: center;
  color: #293845;

  margin: 30px 0 30px 0;
  width: 100%;
`;

const Footer = styled.div`
  margin-top: 20px;
  height: 117px;
  width: 100%;
  padding: 10px;

  display: flex;
  align-items: center;

  color: #293845;
  font-size: 20px;
  background: #dfe6ed;
  border: 1px solid #9eadba;

  div {
    margin-right: 15px;
    box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);

    display: flex;
    align-items: center;
    justify-content: center;

    img {
      height: 89px;
      width: 64px;

      border: solid 10px #ffffff;
    }
  }

  p {
    flex-wrap: wrap;
  }
`;

const Back = styled.div`
width: 34px;
height: 34px;
background: #E8833A;
border-radius: 16px;
position: absolute;
top: 16px;
left: 36px;
color: #FFFFFF;
display: flex;
justify-self: center;
align-items:center;
text-align:center;
padding-bottom: 3px;
padding-left: 2px;
`

function backPage(){
  window.history.back()
}