import Header from "@/Components/Common/header";
import CardsServicos from "@/Components/Layout/CardsServicos";
import Link from "next/link";
import React from "react";
import Servicos from "./servicos/page";

const Home = () => {
  return (
    <div>
      <Header />
      <main>
        <h1>InovaTech</h1>
        <Servicos/>
      </main>
    </div>
  );
};

export default Home;
