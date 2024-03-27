import CardsServicos from "@/Components/Layout/CardsServicos";
import RedirectButton from "@/Components/RedirectBtn";
import React from "react";

const Servicos = () => {
  return (
    <main
      style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <CardsServicos />
      <RedirectButton
        destinyRoute="/servicos/orcamento"
        buttonContent="Orçamento"
      />
    </main>
  );
};

export default Servicos;
