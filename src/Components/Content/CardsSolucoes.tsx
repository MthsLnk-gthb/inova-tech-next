import { Solucao } from "@/data/Servicos";
import { Card, CardGroup } from "react-bootstrap";

interface CardsSolucoesProps {
  solucoesServico: Solucao[];
}

const CardsSolucoes = ({ solucoesServico }: CardsSolucoesProps) => {
  return (
    <CardGroup>
      {solucoesServico.map((solucao, index) => {
        return (
          <Card key={index}>
            <Card.Img
              variant="top"
              as={solucao.iconeSolucao}
              fontSize="2rem"
              color="#edce05"
            />

            <Card.Body>
              <Card.Title>{solucao.tituloSolucao}</Card.Title>
              <Card.Text>{solucao.descricaoSolucao}</Card.Text>
            </Card.Body>
          </Card>
        );
      })}
    </CardGroup>
  );
};

export default CardsSolucoes;
