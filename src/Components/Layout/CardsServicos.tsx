"use client";

import { servicos } from "@/data/Servicos";
import Link from "next/link";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import CardsSolucoes from "../Content/CardsSolucoes";

const CardsServicos = () => {
  return (
    <article style={{ display: "flex", flexWrap: "wrap", gap: "15px"}}>
      {servicos.map((servico, index) => {
        return (
          <Card key={index}>
            <Card.Img src={servico.imagemFundo.src} alt="Card image" style={{opacity: "30%"}} />
            <Card.ImgOverlay>
              <Card.Title>{servico.titulo}</Card.Title>
              <Card.Text>{servico.descricao}</Card.Text>
              <Link href={`/servicos/${servico.titulo.toLowerCase()}`}>
                 <Button variant="primary">Saiba Mais</Button>
                {" "}
              </Link>
          <CardsSolucoes solucoesServico={servico.solucoes}/>
            </Card.ImgOverlay>


          </Card>
        );
      })}
    </article>
  );
};

export default CardsServicos;
