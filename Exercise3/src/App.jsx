import { useState, useEffect } from "react";
import { EmojiProvider } from "./context/emojiContext";
import "./App.css";
import EmojiMood from "./components/Emoji";
import BitcoinRates from "./Components/BitCoinComponent";

function App() {
  return (
  <EmojiProvider>
    <EmojiMood></EmojiMood>
    <BitcoinRates></BitcoinRates>
  </EmojiProvider>
  );
}

export default App;