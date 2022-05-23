import axios from "axios";
import { React, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import arrow from "../img/arrow-undo.svg"

import Session from "./Session";

export default function SessionTimes() {
  const { idFilme } = useParams();
  const [session, setSession] = useState([]);

  useEffect(() => {
    const promisse = axios.get(
      `https://mock-api.driven.com.br/api/v5/cineflex/movies/${idFilme}/showtimes`
    );
    promisse.then((response) => {
      setSession(response.data);
    });
  }, [idFilme]);

  if (session.length === 0) {
    return <div className="container"><div className="loader"></div></div>;
  }

  return (
    <>
      <Back onClick={backPage}> <img src={arrow} alt="voltar"/> </Back>
      <Container>
        <Title>Selecione o horário</Title>
      </Container>

      {session.days.map((infos) => (
        <Session key={infos.id} {...infos} />
      ))}

      <Footer>
        <div>
          <img src={session.posterURL} alt={session.title} />
        </div>
        <p>{session.title}</p>
      </Footer>
    </>
  );
}

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
  font-family: "Roboto", sans-serif;
  font-size: 24px;
  line-height: 28px;
  letter-spacing: 0.04em;
  text-align: center;
  color: #293845;

  margin: 40px 0 30px 0;
  width: 100%;
`;

const Footer = styled.div`
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