import { servicos } from "@/data/Servicos";
import Link from "next/link";
import React from "react";
import Button from "react-bootstrap/Button";
import styles from "@/styles/components/layout/cardsservicos.module.scss";
import Image from "next/image";

const CardsServicos = () => {
  return (
    <article style={{ display: "flex", flexWrap: "wrap", gap: "15px" }}>
      {servicos.map((servico, index) => {
        const isPair = index % 2 === 0;
        const fadeClass = isPair ? styles.rightleftfade : styles.leftrightfade;

        return (
          <section key={index} className={styles.container}>
            <div className={styles.overlay}>
              <div className={styles.content}>
                <h1>{servico.titulo}</h1>
                <p>{servico.descricao}</p>
                <Link href={`/servicos/${servico.titulo.toLowerCase()}`}>
                  <Button variant="primary" className={styles.button}>Saiba Mais</Button>{" "}
                </Link>
              </div>
              <Image
                src={servico.imagemFundo.src}
                alt="Card image"
                width={1200}
                height={500}
                className={`${styles.image} ${fadeClass}`}
              />
            </div>
          </section>
        );
      })}
    </article>
  );
};

export default CardsServicos;
