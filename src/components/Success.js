import React from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";
import arrow from "../img/arrow-undo.svg"

export default function Success(props) {
  const ids = [];
  props.dataSucess.seats.map((info) => ids.push(info.id));

  const promisse = axios.post(
    "https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many",
    { ids: ids, name: props.dataSucess.name, cpf: props.dataSucess.cpf }
  );
  promisse.then(() => {
    console.log("success");
  });

  return (
    <><Back onClick={backPage}> <img src={arrow} alt="voltar"/> </Back>
      <Container>
        <Title>Pedido feito com sucesso!</Title>
        <Infos>
          <h2>Filme e sessão</h2>
          <p>{props.dataSucess.movieInfos.movie.title}</p>
          <p>{`${props.dataSucess.movieInfos.day.date} - ${props.dataSucess.movieInfos.name}`}</p>

          <h2>Ingressos</h2>
          {props.dataSucess.seats.map((info) => (
            <p>{`Assento: ${info.name}`}</p>
          ))}

          <h2>Comprador</h2>
          <p>{`Nome: ${props.dataSucess.name}`}</p>
          <p>{`CPF: ${props.dataSucess.cpf}`}</p>
        </Infos>

        <Button>
          <Link to={"/"}>
            <div>Voltar pra Home</div>
          </Link>
        </Button>
      </Container>
    </>
  );
}

//Styles

const Container = styled.div`
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
  width: 200px;
  font-size: 24px;
  text-align: center;
  font-weight: 700;
  color: #247a6b;
  line-height: 28px;
  letter-spacing: 0.04em;

  margin-top: 30px;
`;

const Infos = styled.div`
  h2 {
    font-size: 24px;
    color: #293845;
    line-height: 35px;
    font-weight: 700;
    margin-top: 30px;
  }

  p {
    font-size: 22px;
    color: #293845;
    line-height: 26px;
    font-weight: 400;
  }
`;

const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 50px;

  div {
    width: 225px;
    height: 42px;
    background-color: #e8833a;

    font-size: 18px;
    color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;
  }

  a {
    text-decoration: none;
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