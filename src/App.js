import React, { useState } from "react";
import "./styles.css";
var headingText = "inside outt";
const emojiDictionary = {
  "😂": "Laughing with tears",
  "😊": "Blushing",
  "🤣": "Laughing hard",
  "😍": "Lovi'n it",
  "😒": "Feeling bored",
  "👌": "All good",
  "😘": "Kisses",
  "😁": "Laughing",
  "👍": "Ok",
  "🙌": "cheer up",
  "😉": "Blink",
  "😢": "Sad and Crying",
  "🥰": "Feeling Loved",
  "🙄": "Whatever",
  "😏": "Huhh!",
  "🤐": "Shut up",
  "😴": "Sleeping",
  "🥱": "Felling Sleepy",
  "🙃": "confused",
  "🤑": "Money in my mind",
  "🫠": "It is what it is",
  "😭": "Crying",
  "😡": "Angry",
  "🤬": "Angry and abusing",
  "🤒": "Felling ill"
};
var emojisWeKnow = Object.keys(emojiDictionary);
export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiChangeHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if (meaning === undefined) {
      meaning = "sorry ,we dont have this on our database";
    }
    setMeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>{headingText}</h1>
      <input
        onChange={emojiChangeHandler}
        style={({ padding: "2rem" }, { width: "80%" })}
      />
      <h2> emojis We know </h2>
      <div>{meaning}</div>
      {emojisWeKnow.map(function (emoji) {
        return (
          <span
            onClick={() => emojiClickHandler(emoji)}
            style={{ cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
