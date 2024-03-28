import iconeCodigo from "@/public/icons/code.png";
import iconeConsulta from "@/public/icons/consult.png";
import iconeDesign from "@/public/icons/design.png";
import iconeMarketing from "@/public/icons/marketing.png";
import iconeTreinamento from "@/public/icons/tutorial.png";

import imagemCodigo from '@/public/images/software.jpg'
import imagemMarketing from '@/public/images/marketing.jpg'
import imagemDesign from '@/public/images/design.jpg'
import imagemConsultoria from '@/public/images/consultoria.jpg'
import imagemTreinamento from '@/public/images/treinamento.jpg'
import { BsAspectRatioFill, BsBinocularsFill, BsBookmarkFill, BsBorderAll, BsChatLeftDotsFill, BsCodeSlash, BsCollectionPlayFill, BsDatabaseFillDown, BsDatabaseFillGear, BsEnvelopeFill, BsFan, BsFastForwardBtnFill, BsGraphUpArrow, BsPhoneFill, BsWindows } from "react-icons/bs";
import { ReactNode } from "react";
import { StaticImageData } from "next/image";
import { IconType } from "react-icons";

export interface Solucao {
  iconeSolucao: IconType;
  tituloSolucao: string;
  descricaoSolucao: string;
}

export interface Servico {
  icone: StaticImageData
  imagemFundo: StaticImageData;
  titulo: string;
  descricao: string;
  maisInformacoes: string;
  solucoes: Solucao[];
}

export const servicos: Servico[] =[
  {
    icone: iconeCodigo,
    imagemFundo: imagemCodigo,
    titulo: "Desenvolvimento de Software",
    descricao:
      "Transforme suas ideias em realidade com nossa equipe de desenvolvedores entusiasmados e profissionais.",
    maisInformacoes:
      "Nossos serviços incluem desenvolvimento web, mobile e desktop, integração de sistemas, migração de dados, otimização de desempenho e muito mais. Estamos comprometidos em fornecer soluções personalizadas que atendam às suas necessidades específicas, garantindo alta qualidade e eficiência em todas as etapas do processo de desenvolvimento.",
    solucoes: [
      {
        iconeSolucao: BsBorderAll,
        tituloSolucao: "Desenvolvimento Front-End",
        descricaoSolucao:
          "Para desenvolver as interfaces e funcionalidades dos sites utilizamos as ferramentas que estão no topo do mercado, como: HTML, CSS, JavaScript, React e Next JS ",
      },
      {
        iconeSolucao: BsCodeSlash,
        tituloSolucao: "Desenvolvimento Back-End",
        descricaoSolucao:
          "Utilizando Java, Node JS e PHP nós constuímos sólidas aplicações Back-End, que tornam os sites e aplicativos ainda mais completos",
      },
      {
        iconeSolucao: BsPhoneFill,
        tituloSolucao: "Desenvolvimento Mobile",
        descricaoSolucao:
          "Desenvolvemos aplicações para smartphones utilizando React Native, o que facilita a implementação em todos os sistemas operacionais",
      },
    ],
  },
  {
    icone: iconeMarketing,
    imagemFundo: imagemMarketing,
    titulo: "Marketing",
    descricao:
      "Alcance seu público-alvo e expanda sua presença online com nossas estratégias de marketing digital.",
    maisInformacoes:
      "Nossos serviços de marketing também incluem análise de dados, automação de marketing, desenvolvimento de campanhas personalizadas e gestão de reputação online. Estamos focados em fornecer resultados mensuráveis, aumentando sua visibilidade, gerando leads qualificados e impulsionando o crescimento do seu negócio de maneira eficaz.",
    solucoes: [
      {
        iconeSolucao: BsGraphUpArrow,
        tituloSolucao: "Otimização de SEO",
        descricaoSolucao:
          "Melhore a visibilidade do seu site nos resultados de busca, aumentando o tráfego orgânico e atraindo mais clientes em potencial de forma consistente e sustentável.",
      },
      {
        iconeSolucao: BsEnvelopeFill,
        tituloSolucao: "Automação de Email Marketing",
        descricaoSolucao:
          "Aumente a eficiência das suas campanhas de email, nutrindo leads e convertendo mais clientes com mensagens personalizadas e automatizadas, gerando mais vendas e engajamento.",
      },
      {
        iconeSolucao: BsBookmarkFill,
        tituloSolucao: "Gestão de Redes Sociais",
        descricaoSolucao:
          "Potencialize o alcance e o envolvimento da sua marca nas redes sociais, através de estratégias de conteúdo, interação com seguidores e análise de métricas para construir uma comunidade sólida e fiel.",
      },
    ],
  },
  {
    icone: iconeDesign,
    imagemFundo: imagemDesign,
    titulo: "Design",
    descricao:
      "Deixe sua marca se destacar com nossos serviços de design inovador e criativo.",
    maisInformacoes:
      "Além do design gráfico, oferecemos serviços de UX/UI design, design de produtos, prototipagem rápida e consultoria de design. Nosso objetivo é criar experiências memoráveis que cativem seu público-alvo, fortalecendo a identidade da sua marca e impulsionando o engajamento do usuário.",
    solucoes: [
      {
        iconeSolucao: BsCollectionPlayFill,
        tituloSolucao: "Design de Interface de Usuário (UI)",
        descricaoSolucao:
          "Crie interfaces intuitivas e atraentes para seus produtos digitais, garantindo uma experiência de usuário memorável e aumentando a satisfação e retenção dos clientes.",
      },
      {
        iconeSolucao: BsFan,
        tituloSolucao: "Criação de Logos e Elementos Gráficos",
        descricaoSolucao:
          "Desenvolva identidades visuais únicas e impactantes para sua marca, através de logos e elementos gráficos bem elaborados, que transmitam sua mensagem e fortaleçam sua presença no mercado.",
      },
      {
        iconeSolucao: BsAspectRatioFill,
        tituloSolucao: "Design Responsivo e Adaptativo",
        descricaoSolucao:
          "Crie designs que se adaptem a diferentes dispositivos e tamanhos de tela, proporcionando uma experiência consistente e agradável em todas as plataformas, aumentando a acessibilidade e a usabilidade do seu produto.",
      },
    ],
  },
  {
    icone: iconeConsulta,
    imagemFundo: imagemConsultoria,
    titulo: "Consultoria",
    descricao:
      "Obtenha insights estratégicos para impulsionar o crescimento e eficiência do seu negócio.",
    maisInformacoes:
      "Nossa equipe de consultores experientes está focada em fornecer soluções personalizadas para os desafios específicos do seu negócio. Oferecemos análises detalhadas, recomendações acionáveis e suporte contínuo para garantir que você alcance seus objetivos de crescimento e otimize sua operação de maneira eficaz.",
    solucoes: [
      {
        iconeSolucao: BsBinocularsFill,
        tituloSolucao: "Consultoria em Estratégias Digitais",
        descricaoSolucao:
          "Obtenha insights especializados para desenvolver e implementar estratégias digitais eficazes, alinhadas com os objetivos do seu negócio, maximizando o retorno sobre o investimento e impulsionando o crescimento.",
      },
      {
        iconeSolucao: BsFastForwardBtnFill,
        tituloSolucao: "Consultoria em Otimização de Processos",
        descricaoSolucao:
          "Identifique e otimize processos internos relacionados ao marketing digital, aumentando a eficiência operacional, reduzindo custos e garantindo resultados mais consistentes e escaláveis.",
      },
      {
        iconeSolucao: BsDatabaseFillDown,
        tituloSolucao: "Consultoria em Análise de Dados",
        descricaoSolucao:
          "Utilize dados e análises para tomar decisões embasadas, entender melhor o comportamento do seu público-alvo e identificar oportunidades de crescimento, melhorando continuamente o desempenho das suas estratégias digitais.",
      },
    ],
  },
  {
    icone: iconeTreinamento,
    imagemFundo: imagemTreinamento,
    titulo: "Treinamento",
    descricao:
      "Capacite sua equipe com programas de treinamento personalizados para impulsionar o desempenho.",
    maisInformacoes:
      "Oferecemos diversos materiais de treinamento, desde tutoriais até e-books para você que busca aperfeiçoar e ampliar a gama de conhecimentos da sua equipe. Contamos com instrutores qualificados e empenhados em entregar a melhor experiência de aprendizado para quem irá consumir o conteúdo. Nosso foco é fornecer treinamentos sob medida, adaptados às necessidades específicas da sua equipe, e garantir que cada membro alcance seu máximo potencial.",
    solucoes: [
      {
        iconeSolucao: BsChatLeftDotsFill,
        tituloSolucao: "Treinamento em Marketing Digital",
        descricaoSolucao:
          "Capacite sua equipe com treinamentos abrangentes em todas as áreas do marketing digital, desde fundamentos até estratégias avançadas, garantindo que estejam atualizados e preparados para enfrentar os desafios do mercado digital.",
      },
      {
        iconeSolucao: BsWindows,
        tituloSolucao: "Treinamento em Ferramentas Digitais",
        descricaoSolucao:
          "Proporcione aos seus colaboradores treinamentos específicos em ferramentas digitais essenciais para o seu negócio, capacitando-os a utilizar eficazmente plataformas e software para maximizar a produtividade e eficiência.",
      },
      {
        iconeSolucao: BsDatabaseFillGear,
        tituloSolucao: "Treinamento em Análise de Dados",
        descricaoSolucao:
          "Desenvolva as habilidades da sua equipe em análise de dados, fornecendo treinamentos práticos para entender e interpretar métricas relevantes, permitindo uma tomada de decisão mais informada e estratégica.",
      },
    ],
  },
];
