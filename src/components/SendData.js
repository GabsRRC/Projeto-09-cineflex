import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default function SendData(props) {
  function VerifySeats(seat) {
    return seat.isSelected === true;
  }

  const selected_seats = props.selections.filter(VerifySeats);

  if (
    selected_seats.length !== 0 &&
    props.inputName.length !== 0 &&
    props.inputCPF.length !== 0
  ) {
    const infos = {
      seats: selected_seats,
      name: props.inputName,
      cpf: props.inputCPF,
      movieInfos: props.seats
    };
    return (
      <Button>
        <Link to={"/sucesso"}>
          <div onClick={() => props.setDataSucess({ ...infos })}>
            Reservar assento(s)
          </div>
        </Link>
      </Button>
    );
  } else {
    return (
      <Button>
        <div onClick={() => alert("Preencha todos os campos")}>
          Reservar assento(s)
        </div>
      </Button>
    );
  }
}

//Styles

const Button = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-bottom: 20px;

  div {
    width: 225px;
    height: 42px;
    background-color: #e8833a;

    font-size: 18px;
    color: #ffffff;

    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 3px;
  }

  a {
    text-decoration: none;
  }
`;
