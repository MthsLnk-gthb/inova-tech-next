import React from "react";
import Servicos from "./servicos/page";
import IntroducaoScreen from "../Pages/introducao/page";
import DuvidasScreen from "@/Pages/DuvidasScreen";

const Home = () => {
  return (
    <div>
      <main>
        <IntroducaoScreen />
        <Servicos />
        <DuvidasScreen/>
      </main>
    </div>
  );
};

export default Home;
