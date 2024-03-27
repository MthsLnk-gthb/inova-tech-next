import { servicos } from "@/data/Servicos";
import Image from "next/image";

const DetalhesServico = ({ params }) => {

  const decodedServico = decodeURIComponent(params.servico);

  const servico = servicos.find(
    (servico) => servico.titulo.toLowerCase() === decodedServico.toLowerCase()
  );


  if (!servico) {
    return <div> Serviço não encontrado </div>;
  }

  return (
    <div>
      <Image
        src={servico.icone.src}
        width={50}
        height={50}
        alt={`Ícone do serviço ${servico.titulo}`}
      />
      <h1>{servico.titulo}</h1>
      <p>{servico.descricao}</p>
    </div>
  );
};

export default DetalhesServico;
