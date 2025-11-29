import { Experience, Project, Skill, Certificate } from './types';

export const USER_INFO = {
  name: "Igor da Silva",
  role: "QA Engineer & Test Analyst",
  description: "Profissional experiente em testes de software com 3 anos de experiência em testes manuais e 1 ano com automação de testes. Especialista em garantir a qualidade e o desempenho de aplicações.",
  location: "Tubarão, SC",
  email: "igorrsilvaa920@gmail.com",
  linkedin: "https://www.linkedin.com/in/igor-da-silva-b248bb289/",
  github: "https://github.com/igorrsilvaaf",
  phone: "(48) 99119 - 6884",
  profileImage: "/wizard-profile.png" // Certifique-se de salvar a imagem enviada como 'wizard-profile.png' na pasta public
};

export const EXPERIENCES: Experience[] = [
  {
    role: "Quality Assurance",
    company: "Frengee",
    period: "Out 2024 - Atual",
    description: [
      "Responsável pela criação e implementação do setor de qualidade.",
      "Implementação de testes automatizados com Cypress, JMeter, k6 e Playwright.",
      "Gerenciamento da ferramenta TestRail e análise de resultados."
    ]
  },
  {
    role: "Engenheiro de Qualidade",
    company: "Grupo Casas Bahia",
    period: "Ago 2024 - Out 2024",
    description: [
      "Engenheiro de software I.",
      "Implementação e manutenção de testes automatizados com Cypress, JMeter, k6 e Appium."
    ]
  },
  {
    role: "Analista de Qualidade",
    company: "Ticket Mais - Bar Fácil",
    period: "Fev 2024 - Jul 2024",
    description: [
      "Criação e implementação do setor de qualidade.",
      "Testes automatizados com Cypress, JMeter, k6 e Playwright.",
      "Gestão de TestRail."
    ]
  },
  {
    role: "Analista de Testes",
    company: "Logtec",
    period: "Ago 2021 - Fev 2024",
    description: [
      "Testes Manuais Precisos e documentação abrangente.",
      "Testes alpha, beta e regressão.",
      "Configuração de bancos PostgreSQL, MySQL e Firebird.",
      "Monitoramento com Jira."
    ]
  },
  {
    role: "Analista de Suporte",
    company: "Logtec",
    period: "Jun 2020 - Ago 2021",
    description: [
      "Atendimento ao cliente, replicação de dados e correção de BDD."
    ]
  }
];

export const SKILLS: Skill[] = [
  { name: "Cypress", level: 50 },
  { name: "Jira", level: 60 },
  { name: "Appium", level: 30 },
  { name: "JMeter", level: 40 },
  { name: "k6", level: 20 },
  { name: "SQL & NoSQL", level: 70 },
  { name: "Maestro", level: 40 },
  { name: "Git & GitHub", level: 80 },
  { name: "Postman", level: 60 },
  { name: "JavaScript", level: 40 },
];

export const PROJECTS: Project[] = [
  {
    title: "Eventos API",
    description: "Projeto de compra de ingresso",
    image: "https://picsum.photos/id/42/400/300",
    link: "https://github.com/igorrsilvaaf/API_eventos_JavaScript"
  },
  {
    title: "Currículo Virtual",
    description: "Currículo online interativo",
    image: "https://picsum.photos/id/1/400/300",
    link: "https://github.com/igorrsilvaaf/cv"
  },
  {
    title: "Card Bike",
    description: "Componente de card para produtos",
    image: "https://picsum.photos/id/146/400/300",
    link: "https://github.com/igorrsilvaaf/CardBike"
  },
  {
    title: "Dashboard",
    description: "Symter Dashboard Project",
    image: "https://picsum.photos/id/180/400/300",
    link: "https://github.com/igorrsilvaaf/Symter_DashBoard.git"
  },
  {
    title: "Weather App",
    description: "Aplicação de previsão do tempo",
    image: "https://picsum.photos/id/10/400/300",
    link: "https://github.com/igorrsilvaaf/WeatherAPP"
  }
];

export const CERTIFICATES: Certificate[] = [
  { name: "Tecnólogo em Análise e Desenvolvimento de Sistemas", duration: "2.5 anos", image: "https://picsum.photos/seed/cert1/200/150" },
  { name: "API do Zero ao Full", duration: "5.0 horas", image: "https://picsum.photos/seed/cert2/200/150" },
  { name: "DevOps para Testers", duration: "4.0 horas", image: "https://picsum.photos/seed/cert3/200/150" },
  { name: "Certificado Teste de Software", duration: "5.0 horas", image: "https://picsum.photos/seed/cert4/200/150" },
  { name: "Cypress Avançado", duration: "3.0 horas", image: "https://picsum.photos/seed/cert5/200/150" },
  { name: "Liderança em Qualidade", duration: "6.0 horas", image: "https://picsum.photos/seed/cert6/200/150" },
];