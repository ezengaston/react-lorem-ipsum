import React, { useState } from "react";
import data from "./data";
function App() {
  const [text, setText] = useState(data);
  const [value, setValue] = useState("0");
  const [generatedText, setGeneratedText] = useState([]);

  function generate(e) {
    let amountOfParagraphs = [];
    e.preventDefault();
    if (value <= 1) {
      amountOfParagraphs.push(text[0]);
    }
    if (value >= text.length - 1) {
      text.map((item) => amountOfParagraphs.push(item));
    }
    if (value > 1 && value < text.length - 1) {
      for (let i = 0; i < value; i++) {
        amountOfParagraphs.push(text[i]);
      }
    }
    setGeneratedText(amountOfParagraphs);
  }

  return (
    <section className="section-center">
      <h3>Tired Of Boring Lorem Ipsum</h3>
      <form className="lorem-form">
        <label htmlFor="amount">Paragraphs:</label>
        <input
          type="number"
          name="amount"
          id="amount"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button className="btn" onClick={(e) => generate(e)}>
          Generate
        </button>
      </form>
      <article className="lorem-text">
        {generatedText.map((item, index) => (
          <p key={index}>{item}</p>
        ))}
      </article>
    </section>
  );
}

export default App;
