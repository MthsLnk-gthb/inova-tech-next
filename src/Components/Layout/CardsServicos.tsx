"use client";

import { servicos } from "@/data/Servicos";
import Link from "next/link";
import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const CardsServicos = () => {
  return (
    <article style={{ display: "flex", flexWrap: "wrap", gap: "15px"}}>
      {servicos.map((servico, index) => {
        return (
          <Card key={index} style={{ width: "15rem" }}>
            <Card.Img
              style={{ width: "50px", height: "50px" }}
              variant="top"
              src={servico.icone.src}
            />

            <Card.Body>
              <Card.Title>{servico.titulo}</Card.Title>
              <Card.Text>{servico.descricao}</Card.Text>
              <Link href={`/servicos/${servico.titulo.toLowerCase()}`}>
                <Button variant="primary">Saiba Mais</Button>
              </Link>
            </Card.Body>
          </Card>
        );
      })}
    </article>
  );
};

export default CardsServicos;
