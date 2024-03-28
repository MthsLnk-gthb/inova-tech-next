"use client"

import React from "react";
import { Accordion } from "react-bootstrap";
import { ArrayDuvidas, DuvidasProps } from "./../../data/Duvidas/index";

interface Props {
  duvida: DuvidasProps;
  accEventKey: string;
}

const AccordionDuvidas = ({duvida, accEventKey}: Props) => {
  return (
    <>
            <Accordion.Item eventKey={accEventKey}>
              <Accordion.Header>{duvida.labelDuvida}</Accordion.Header>
              <Accordion.Body>{duvida.respostaDuvida}</Accordion.Body>
            </Accordion.Item>
    </>
  );
};

export default AccordionDuvidas;
