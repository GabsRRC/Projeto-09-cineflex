//import React from "react"
import axios from "axios";
import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import { BrowserRouter, Routes, Route } from 'react-router-dom';

export default function Home() {
  const [images, setImages] = useState([]);

  useEffect(() => {
    const promise = axios.get(
      "https://mock-api.driven.com.br/api/v5/cineflex/movies"
    );

    promise.then((response) => {
      setImages([...response.data]);
    });
  }, []);

  return (
    <Container>
      <Title>Selecione o filme</Title>
      <Movies>
        {images.length === 0
          ? "Carregando..."
          : images.map((image) => (
              <Image
                source={image.posterURL}
                title={image.title}
                id={image.id}
                resume={image.overview}
                relase={image.releaseDate}
              />
            ))}
      </Movies>
    </Container>
  );
}

function Image({ source, id }) {
  return (
    <Poster>
      <Link to={`/filme/${id}`}>
        {" "}
        <img src={source} alt="" />{" "}
      </Link>
    </Poster>
  );
}

//Styles

const Container = styled.div`
  font-family: "Roboto", sans-serif;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-left: 30px;
  margin-right: 30px;
`;

const Title = styled.div`
  width: 374px;
  height: 110px;
  color: #293845;

  font-size: 24px;
  font-family: "Roboto", sans-serif;
  font-weight: 400;

  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

const Movies = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 900px;
`;

const Poster = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 145px;
  height: 209px;

  margin-right: 10px;
  margin-left: 10px;
  margin-bottom: 8px;
  margin-top: 8px;

  background: #ffffff;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;

  img {
    width: 129px;
    height: 193px;
  }
`;
