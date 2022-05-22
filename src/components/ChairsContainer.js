import { React, useState } from "react";
import styled from "styled-components";

import ChairList from "./ChairList";
import UserData from "./UserData";
import SendData from "./SendData";

export default function ChairsContainer(props) {
  const [selections, setSelections] = useState(props.seats.seats);
  const [inputName, setInputName] = useState("");
  const [inputCPF, setInputCPF] = useState("");

  return (
    <>
      <Container>
        <Chairs>
          <ChairList
            seats={props.seats.seats}
            selections={selections}
            setSelections={setSelections}
          />
        </Chairs>

        <Subtitle>
          <div>
            <div className="selected" />
            Selecionado
          </div>
          <div>
            <div className="available" />
            Disponível
          </div>
          <div>
            <div className="unavailable" />
            Indisponível
          </div>
        </Subtitle>

        <UserData
          inputName={inputName}
          setInputName={setInputName}
          inputCPF={inputCPF}
          setInputCPF={setInputCPF}
        />

        <SendData
          selections={selections}
          inputName={inputName}
          inputCPF={inputCPF}
          dataSucess={props.dataSucess}
          setDataSucess={props.setDataSucess}
          seats={props.seats}
        />
      </Container>
    </>
  );
}

const Container = styled.div`
  width: 375px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
`;

const Chairs = styled.div`
  width: 325px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  margin-bottom: 10px;
`;

const Subtitle = styled.div`
  padding: 0 30px;

  display: flex;
  justify-content: space-between;

  div {
    width: 80px;

    font-size: 13px;
    line-height: 15.23px;
    color: #4e5a65;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }

  div .selected {
    width: 25px;
    height: 25px;
    background-color: #8dd7cf;
    border: solid 1px #1aae9e;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  div .available {
    width: 25px;
    height: 25px;
    background-color: #c3cfd9;
    border: solid 1px #7b8b99;
    border-radius: 50%;
    margin-bottom: 5px;
  }
  div .unavailable {
    width: 25px;
    height: 25px;
    background-color: #fbe192;
    border: solid 1px #f7c52b;
    border-radius: 50%;
    margin-bottom: 5px;
  }
`;
