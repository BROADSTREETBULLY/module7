import { useState, createContext, useContext } from "react";

const EmojiContext = createContext();

export function EmojiProvider({ children }) {
  const [emoji, setEmoji] = useState('😊');

  function changeMood() {
    setEmoji(e => e === '😊' ? '☹️' : '😊');
  }

  return (
    <EmojiContext.Provider value={{ emoji, changeMood }}>
      {children}
    </EmojiContext.Provider>
  );
}

export function useEmoji() {
  return useContext(EmojiContext);
}