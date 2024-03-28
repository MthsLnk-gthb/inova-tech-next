import { Accordion } from "react-bootstrap";
import { ArrayDuvidas } from "./../../data/Duvidas/index";
import AccordionDuvidas from "@/Components/Content/AccordionDuvidas";

const DuvidasScreen = () => {
  // Dividindo o array em duas partes
  const metadeDoArray = Math.ceil(ArrayDuvidas.length / 2);
  const primeiraMetade = ArrayDuvidas.slice(0, metadeDoArray);
  const segundaMetade = ArrayDuvidas.slice(metadeDoArray);

  return (
    <>
      <section className="row" style={{maxWidth: "90dvw"}}>
        <article className="col">
          <Accordion>
            {primeiraMetade.map((accordion, index) => {
              const eventKey = `accordion-${index}`;
              return (
                <AccordionDuvidas
                  duvida={accordion}
                  accEventKey={eventKey}
                  key={index}
                />
              );
            })}
          </Accordion>
        </article>
        <article className="col">
          <Accordion>
            {segundaMetade.map((accordion, index) => {
              const eventKey = `accordion-${metadeDoArray + index}`;
              return (
                <AccordionDuvidas
                  duvida={accordion}
                  accEventKey={eventKey}
                  key={metadeDoArray + index}
                />
              );
            })}
          </Accordion>
        </article>
      </section>
    </>
  );
};

export default DuvidasScreen;
