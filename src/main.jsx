import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { io } from "socket.io-client";
import Match from "./pages/Match";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home";
import JoinRoom from "./pages/JoinRoom";
import CreateTable from "./pages/CreateTable";
import "./index.css";

window.API_URL = "http://localhost:5431";

window.socket = io(window.API_URL);

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/matches/join/:tableId",
        element: <JoinRoom />,
      },
      {
        path: "/matches/create",
        element: <CreateTable />,
      },
      {
        path: "/matches/match",
        element: <Match />,
      },
    ],
  },
]);

// Duplicate the deck to create two decks
window.cards = createDeck();

window.boardLayout = [
  ["X", "♠️2", "♠️3", "♠️4", "♠️5", "♠️6", "♠️7", "♠️8", "♠️9", "X"],
  ["♣️6", "♣️5", "♣️4", "♣️3", "♣️2", "♥️A", "♥️K", "♥️Q", "♥️10", "♠️10"],
  ["♣️7", "♠️A", "♦️2", "♦️3", "♦️4", "♦️5", "♦️6", "♦️7", "♥️9", "♠️Q"],
  ["♣️8", "♠️K", "♣️6", "♣️5", "♣️4", "♣️3", "♣️2", "♦️8", "♥️8", "♠️K"],
  ["♣️9", "♠️Q", "♣️7", "♥️6", "♥️5", "♥️4", "♥️A", "♦️9", "♥️7", "♠️A"],
  ["♣️10", "♠️10", "♣️8", "♥️7", "♥️2", "♥️3", "♥️K", "♦️10", "♥️6", "♦️2"],
  ["♣️Q", "♠️9", "♣️9", "♥️8", "♥️9", "♥️10", "♥️Q", "♦️Q", "♥️5", "♦️3"],
  ["♣️K", "♠️8", "♣️10", "♣️Q", "♣️K", "♣️A", "♦️A", "♦️K", "♥️4", "♦️4"],
  ["♣️A", "♠️7", "♠️6", "♠️5", "♠️4", "♠️3", "♠️2", "♥️2", "♥️3", "♦️5"],
  ["X", "♦️A", "♦️K", "♦️Q", "♦️10", "♦️9", "♦️8", "♦️7", "♦️6", "X"],
];

window.board = createBoard(window.boardLayout);

window.tokens = ["🔵", "🔴", "🟢"];

window.teams = {
  "🔵": {
    sequenceCount: 0,
  },
  "🔴": {
    sequenceCount: 0,
  },
  "🟢": {
    sequenceCount: 0,
  },
};

window.players = [
  {
    name: "Sam",
    token: "🔵",
    startedCurrentRound: true,
    isActivePlayer: true,
    isYou: true,
    cards: [],
  },
  {
    name: "Eva",
    token: "🔴",
    startedCurrentRound: false,
    isActivePlayer: false,
    isYou: false,
    cards: [],
  },
  {
    name: "Niels",
    token: "🟢",
    startedCurrentRound: false,
    isActivePlayer: false,
    isYou: false,
    cards: [],
  },
  {
    name: "Lisa",
    token: "🔵",
    startedCurrentRound: false,
    isActivePlayer: false,
    isYou: false,
    cards: [],
  },
  {
    name: "Joel",
    token: "🔴",
    startedCurrentRound: false,
    isActivePlayer: false,
    isYou: false,
    cards: [],
  },

  {
    name: "Jamal",
    token: "🟢",
    startedCurrentRound: false,
    isActivePlayer: false,
    isYou: false,
    cards: [],
  },
  {
    name: "Lisa",
    token: "🔵",
    startedCurrentRound: false,
    isActivePlayer: false,
    isYou: false,
    cards: [],
  },
  {
    name: "Joel",
    token: "🔴",
    startedCurrentRound: false,
    isActivePlayer: false,
    isYou: false,
    cards: [],
  },

  {
    name: "Jamal",
    token: "🟢",
    startedCurrentRound: false,
    isActivePlayer: false,
    isYou: false,
    cards: [],
  },
];

for (const player of window.players) {
  player.cards = dealCards(5);
}

function dealCards(cardsPerPlayer) {
  return window.cards.splice(0, cardsPerPlayer);
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);

function createBoard(layout) {
  const board = layout.map((row) =>
    row.map((cell) => ({
      face: cell,
      token: null,
      sequences: [],
    }))
  );

  return board;
}

function createDeck() {
  const suits = ["♣️", "♠️", "♦️", "♥️"];
  const values = [
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K",
    "A",
  ];

  const deck = [];

  // Create a single deck
  for (const suit of suits) {
    for (const value of values) {
      const card = `${suit}${value}`;
      deck.push(card);
    }
  }

  // Duplicate the deck to create two decks
  return shuffleCards([...deck, ...deck]);
}

function shuffleCards(cards) {
  const shuffledDeck = [...cards];

  for (let i = shuffledDeck.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffledDeck[i], shuffledDeck[j]] = [shuffledDeck[j], shuffledDeck[i]];
  }

  return shuffledDeck;
}
