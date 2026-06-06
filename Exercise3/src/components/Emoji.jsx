import { useEmoji } from "../context/emojiContext";

function EmojiMood() {
  const { emoji, changeMood } = useEmoji();

  return (
    <>
      <div>
        <h1>Current Mood: {emoji}</h1>
      </div>
      <button onClick={changeMood} style={{ fontSize: '25px' }}>Change Mood</button>
    </>
  );
}

export default EmojiMood;