import Image from "next/image";
import backgroundImage from "@/public/images/graphic.jpg";
import styles from "@/styles/pages/introducao.module.scss";

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
            Somos a InovaTech, mais que uma empresa de soluções, nós
            construímos e desenvolvemos o melhor para o seu negócio digital,
            além de oferecer conteúdos e tutoriais dinâmicos para o treinamento da sua equipe !
          </p>
          <ul style={{display: "flex"}}>
            <label>Nossos serviços:</label>
            <li>Desenvolvimento de Software</li>
            <li>Marketing</li>
            <li>Design</li>
            <li>Consultoria</li>
            <li>Treinamento</li>
          </ul>
        </article>
      </div>
    </main>
  );
};

export default IntroducaoScreen;
