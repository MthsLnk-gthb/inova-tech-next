import Image from "next/image";
import backgroundImage from "@/public/images/graphic.jpg";
import styles from "@/styles/screens/introducao.module.scss";

const IntroducaoScreen = () => {
  return (
    <main className={styles.container}>
      <div className={styles.backgroundContainer}>
        <Image
          src={backgroundImage}
          alt="Imagem de fundo"
          className={styles.backgroundImage}
          priority={true}
        />
        <div className={styles.overlay}></div>
        <article className={styles.content}>
          <h1>Soluções digitais para Empresas</h1>
          <p>
            Somos a InovaTech, mais que uma empresa de soluções, nós construímos
            e desenvolvemos o melhor para o seu negócio digital, além de
            oferecer conteúdos e tutoriais dinâmicos para o treinamento da sua
            equipe !
          </p>
            <label className={styles.label}>Nossos serviços:</label>
          <ul style={{ display: "flex", flexWrap: "wrap" }} className={styles.list}>
            <li>Desenvolvimento de Software</li>
            <li>Treinamento</li>
            <li>Consultoria</li>
            <li>Marketing</li>
            <li>Design</li>
          </ul>
        </article>
      </div>
    </main>
  );
};

export default IntroducaoScreen;
