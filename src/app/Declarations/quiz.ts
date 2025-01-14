export const quizData: QuizData[] = [
  {
    id: 1,
    question: "Was bedeutet SSR in Next.js?",
    answers: [
      "Server-Side Routing",
      "Server-Side Rendering",
      "Static Site Rendering",
      "Single-Server Routing"
    ],
    correct: 1,
  },
  {
    id: 3,
    question: "Wann wird der Code in getServerSideProps ausgeführt?",
    answers: [
      "Beim Builden der Anwendung",
      "Jedes Mal, wenn die Seite aufgerufen wird",
      "Nur beim ersten Seitenaufruf",
      "Beim Klicken auf einen Button"
    ],
    correct: 1,
  },
  {
    id: 7,
    question: "Wie beeinflusst SSR die SEO einer Webseite?",
    answers: [
      "SEO wird nicht beeinflusst",
      "SEO wird verbessert, da der vollständige HTML-Inhalt vom Server kommt",
      "SEO wird verschlechtert, da nur JavaScript-Inhalte gerendert werden",
      "SEO ist nur bei CSR wichtig"
    ],
    correct: 1,
  },
  {
    id: 10,
    question: "Wie kann die Performance einer SSR-Seite verbessert werden?",
    answers: [
      "Durch das Caching der Serverantworten",
      "Durch das Entfernen von CSS",
      "Durch das Deaktivieren von SSR",
      "Durch das Erhöhen der Bildqualität"
    ],
    correct: 0,
  },
];



export type QuizData = {
  id: number;
  question: string;
  answers: string[];
  correct: number;
};