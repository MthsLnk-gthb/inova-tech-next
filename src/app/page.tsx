import React from "react";
import Servicos from "./servicos/page";
import IntroducaoScreen from "./introducao/page";

const Home = () => {
  return (
    <div>
      <main>
        <IntroducaoScreen/>
        <Servicos/>
      </main>
    </div>
  );
};

export default Home;
