import { React, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import SessionTimes from "./components/SessionTimes";
import AllChairs from "./components/AllChairs";
import Success from "./components/Success";

export default function App() {
  const [dataSucess, setDataSucess] = useState({});

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/filme/:idFilme" element={<SessionTimes />} />
        <Route
          path="/assentos/:idSessao"
          element={
            <AllChairs dataSucess={dataSucess} setDataSucess={setDataSucess} />
          }
        />
        <Route path="/sucesso" element={<Success dataSucess={dataSucess} />} />
      </Routes>
    </BrowserRouter>
  );
}

