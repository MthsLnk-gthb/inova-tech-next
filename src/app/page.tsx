import React from "react";
import Servicos from "./servicos/page";
import IntroducaoScreen from "../Pages/introducao/page";
import DuvidasScreen from "@/Pages/DuvidasScreen";
import FormContato from "@/Components/Forms/FormContato";

const Home = () => {
  return (
    <main>
      <IntroducaoScreen />
      <Servicos />
      <DuvidasScreen />
      <FormContato />
    </main>
  );
};

export default Home;
