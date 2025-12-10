import { Experience, Project, Skill, Certificate } from "./types";

export const USER_INFO = {
  name: "Igor da Silva",
  role: "QA Engineer & Test Analyst",
  description:
    "Especialista em Qualidade de software com 6 anos de experiência em testes manuais e automatizados, Graduado em Análise e Desenvolvimento de Sistemas e Pós-Graduado em Engenharia da Computação pela Universidade Uninter.",
  location: "Tubarão, SC",
  email: "igorrsilvaa920@gmail.com",
  linkedin: "https://www.linkedin.com/in/igor-da-silva-francisco/",
  github: "https://github.com/igorrsilvaaf",
  phone: "(48) 99119 - 6884",
  profileImage: "/wizard-profile.png",
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Quality Assurance",
    company: "Frengee",
    period: "Nov 2024 - O momento",
    description: [
      "Liderei a estruturação completa do departamento de qualidade da empresa, partindo de um cenário onde não existiam processos estruturados de QA e que gerava inconsistências na qualidade dos produtos. Implementei metodologias robustas, definindo fluxos de trabalho e estabelecendo uma base sólida para garantia de qualidade que padronizou as entregas e reduziu significativamente o retrabalho da equipe de desenvolvimento. Desenvolvi e implementei uma estratégia abrangente de automação de testes, utilizando Cypress para criar scripts de automação end-to-end que substituíram processos manuais demorados. Esta implementação aumentou drasticamente a eficiência dos testes e expandiu a cobertura de validações, permitindo a detecção precoce de bugs e melhorando a qualidade geral das entregas.",
    ],
  },
  {
    role: "Engenheiro de Qualidade",
    company: "Grupo Casas Bahia",
    period: "Ago 2024 - Nov 2024",
    description: [
      "Atuei no desenvolvimento e manutenção de estratégias abrangentes de automação de testes em uma das maiores redes de varejo do Brasil, focando na otimização da eficiência e expansão da cobertura de testes em sistemas de alta complexidade e volume. Implementei scripts de automação robustos que reduziram significativamente o tempo de validação de funcionalidades críticas do e-commerce e aplicações móveis, garantindo entregas ágeis sem comprometer a qualidade Desenvolvi e executei testes end-to-end utilizando Cypress para simular cenários reais de uso do cliente, validando desde o processo de navegação no site até a finalização de compras e integrações com sistemas de pagamento. Esta abordagem assegurou que a experiência completa do usuário fosse testada de forma consistente, identificando problemas de usabilidade e funcionalidade antes que impactassem os clientes finais.Implementei framework de testes móveis usando Appium + WebDriverIO para dispositivos Android e iOS, criando cenários automatizados que cobriram funcionalidades críticas do aplicativo móvel da empresa. Este trabalho garantiu qualidade consistente em ambas as plataformas móveis, considerando as particularidades de cada sistema operacional e diferentes modelos de dispositivos utilizados pelos clientes.",
    ],
  },
  {
    role: "Analista de Qualidade",
    company: "Ticket Mais - Bar Fácil",
    period: "Mar 2024 - Jul 2024",
    description: [
      "Liderei a implementação completa do departamento de qualidade, estabelecendo processos robustos e metodologias eficientes que asseguraram a excelência dos produtos desde o desenvolvimento até a entrega. Desenvolvi frameworks abrangentes de automação de testes utilizando Cypress para aplicações web, criando scripts que aumentaram significativamente a eficiência e cobertura dos testes, permitindo entregas mais rápidas sem comprometer a qualidade. Estruturei estratégia completa de testes de performance utilizando JMeter e k6, executando testes de carga e estresse que avaliaram o comportamento dos sistemas sob diferentes condições de uso. Esta iniciativa identificou gargalos críticos de performance e possibilitou otimizações que melhoraram a experiência do usuário em cenários de alta demanda, garantindo estabilidade e confiabilidade dos sistemas em produção. Implementei testes end-to-end que simularam cenários reais de uso, validando a integridade e funcionalidade completa dos produtos através de fluxos críticos de negócio. Desenvolvi framework de testes móveis usando Maestro para aplicações Android e iOS, assegurando qualidade consistente em ambas as plataformas e diferentes dispositivos, considerando as especificidades de cada sistema operacional. Realizei validação detalhada de APIs REST utilizando Postman e Insomnia, desenvolvendo testes que verificaram funcionalidade, segurança e desempenho das integrações críticas. Trabalhei diretamente com banco de dados MySQL para validação de dados e criação de cenários de teste mais robustos. Utilizei Jira para gestão eficiente de projetos e Confluence para criação de documentação abrangente dos processos de teste, resultados e melhores práticas, facilitando o compartilhamento de conhecimento e padronização entre equipes.",
    ],
  },
  {
    role: "Analista de Testes",
    company: "Logtec",
    period: "Mar 2020 - Fev 2024",
    description: [
      "Executei testes manuais detalhados e precisos, desenvolvendo abordagem minuciosa para identificação de falhas e anomalias que garantiu a qualidade e usabilidade dos produtos antes do lançamento. Esta metodologia rigorosa de validação evitou problemas críticos em produção e assegurou que os produtos atendessem aos mais altos padrões de qualidade esperados pelos usuários finais. Criei documentação clara e abrangente incluindo planos de teste detalhados, casos de uso específicos e relatórios estruturados de bugs, garantindo comunicação eficaz entre equipes multidisciplinares e entendimento completo dos requisitos e resultados dos testes. Esta prática de documentação facilitou o alinhamento entre desenvolvimento, produto e negócio, otimizando o processo de correção de issues e reduzindo retrabalho. Conduzi testes alpha, beta e de regressão em diferentes fases do desenvolvimento, validando funcionalidades novas e existentes para assegurar que atualizações não introduzissem novos problemas aos sistemas. Gerenciei configuração e manutenção de múltiplos bancos de dados incluindo PostgreSQL, MySQL e Firebird, garantindo integridade de dados para cenários de teste e ambientes de validação.",
    ],
  },
];

export const SKILLS: Skill[] = [
  { name: "Cypress", level: 80 },
  { name: "Playwright", level: 80 },
  { name: "Jira", level: 60 },
  { name: "Appium", level: 80 },
  { name: "JMeter", level: 50 },
  { name: "k6", level: 50 },
  { name: "SQL & NoSQL", level: 70 },
  { name: "Maestro", level: 60 },
  { name: "Git & GitHub", level: 80 },
  { name: "Postman", level: 90 },
  { name: "JavaScript", level: 60 },
  { name: "RabbitMQ", level: 30 },
  { name: "GCP", level: 30 },
  { name: "ArgoCD", level: 30 },
  { name: "Redis", level: 30 },
];

export const PROJECTS: Project[] = [
  {
    title: "Eventos API",
    description: "Projeto de compra de ingresso",
    image: "https://picsum.photos/id/42/400/300",
    link: "https://github.com/igorrsilvaaf/API_eventos_JavaScript",
  },
  {
    title: "Currículo Virtual",
    description: "Currículo online interativo",
    image: "https://picsum.photos/id/1/400/300",
    link: "https://github.com/igorrsilvaaf/cv",
  },
  {
    title: "Card Bike",
    description: "Componente de card para produtos",
    image: "https://picsum.photos/id/146/400/300",
    link: "https://github.com/igorrsilvaaf/CardBike",
  },
  {
    title: "Dashboard",
    description: "Symter Dashboard Project",
    image: "https://picsum.photos/id/180/400/300",
    link: "https://github.com/igorrsilvaaf/Symter_DashBoard.git",
  },
  {
    title: "Weather App",
    description: "Aplicação de previsão do tempo",
    image: "https://picsum.photos/id/10/400/300",
    link: "https://github.com/igorrsilvaaf/WeatherAPP",
  },
];

export const CERTIFICATES: Certificate[] = [
  {
    name: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
    duration: "2.5 anos",
    image: "/livro.png",
  },
  {
    name: "Pós-Graduação em Engenharia da Computação",
    duration: "1 ano",
    image: "/livro.png",
  },

  {
    name: "API do Zero ao Full",
    duration: "5.0 horas",
    image: "/livro.png",
  },
  {
    name: "DevOps para Testers",
    duration: "4.0 horas",
    image: "/livro.png",
  },
  {
    name: "Certificado Teste de Software",
    duration: "5.0 horas",
    image: "/livro.png",
  },
  {
    name: "Cypress Avançado",
    duration: "3.0 horas",
    image: "/livro.png",
  },
  {
    name: "Liderança em Qualidade",
    duration: "6.0 horas",
    image: "/livro.png",
  },
];
