import { React } from "react";
import styled from "styled-components";

export default function Inputs(props) {
  return (
    <Container>
      <Data>
        <div className="title">Nome do comprador:</div>
        <input
          type="text"
          placeholder="Digite seu nome..."
          value={props.inputName}
          onChange={(e) => props.setInputName(e.target.value)}
        ></input>

        <div className="title">CPF do comprador:</div>
        <input
          type="text"
          placeholder="Digite seu CPF..."
          value={props.inputCPF}
          onChange={(e) => props.setInputCPF(e.target.value)}
        ></input>
      </Data>
    </Container>
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

const Data = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 45px 0;

  .title {
    font-size: 18px;
    color: #293845;

    margin-bottom: 5px;
  }

  input {
    width: 327px;
    height: 51px;
    border-radius: 3px;
    background-color: #ffffff;
    margin-bottom: 10px;
    border: solid 1px #d4d4d4;
    padding: 0 18px;

    ::placeholder {
      font-size: 18px;
      color: #afafaf;
      line-height: 21.09px;
      font-style: italic;
    }
  }
`;
