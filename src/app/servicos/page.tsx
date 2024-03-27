import CardsServicos from "@/Components/Layout/CardsServicos";
import RedirectButton from "@/Components/RedirectBtn";
import React from "react";

const Servicos = () => {
  return (
    <article  style={{display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center"}}>
      <CardsServicos />
      <RedirectButton
        destinyRoute="/servicos/orcamento"
        buttonContent="Orçamento"
      />
    </article>
  );
};

export default Servicos;
