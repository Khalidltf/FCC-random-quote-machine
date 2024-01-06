import { useState } from "react";
import quotes from "./assets/quotes.json";
import { FaTwitter, FaQuoteLeft, FaTumblr } from "react-icons/fa";
import "./App.css";

interface Quote {
  quote: string;
  author: string;
}

const getRandomQuote = (): Quote => {
  // console.log(quotes[Math.floor(Math.random() * quotes.length)]);
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const getRandomColor = (): string => {
  const colors = [
    "#16a085",
    "#27ae60",
    "#2c3e50",
    "#f39c12",
    "#e74c3c",
    "#9b59b6",
    "#FB6964",
    "#342224",
    "#472E32",
    "#BDBB99",
    "#77B1A9",
    "#73A857",
  ];

  return colors[Math.floor(Math.random() * colors.length)];
};

const transition = "all 1s";

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const [randomColor, setRandomColor] = useState<string>(getRandomColor());

  const changeQuote = () => {
    setQuote(getRandomQuote());
    setRandomColor(getRandomColor());
  };

  return (
    <>
      <div id="wrapper" style={{ backgroundColor: randomColor, transition }}>
        <div id="quote-box">
          <div
            className="quote-content"
            style={{ color: randomColor, transition }}
          >
            <h2 id="text">
              <FaQuoteLeft size="30" style={{ marginRight: "10px" }} />
              {quote.quote}
            </h2>
            <h4 id="author"> -- {quote.author}</h4>
          </div>
          <div className="buttons">
            {/* tweet quote */}
            <a
              href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=${quote.quote}`}
              id="tweet-quote"
              className="button"
              title="Tweet this quote!"
              style={{
                backgroundColor: randomColor,
                marginRight: "0.4em",
                fontSize: "1em",
                transition,
              }}
              target="_top"
            >
              <FaTwitter color="white" />
            </a>
            {/* tumblr quote */}
            <a
              href={`https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Aristotle&content=${quote.quote}.&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button`}
              className="button"
              id="tumblr-quote"
              title="Post this quote on tumblr!"
              style={{
                backgroundColor: randomColor,
                marginRight: "10px",
                fontSize: "1em",
                transition,
              }}
              target="_blank"
            >
              <FaTumblr color="white" />
            </a>
            {/* new quote */}
            <button
              id="new-quote"
              className="button"
              onClick={changeQuote}
              style={{ backgroundColor: randomColor, transition }}
            >
              New Quote
            </button>
          </div>
        </div>
      </div>
      <div className="footer">
        by{" "}
        <a href="https://codepen.io/KL1125" target="_blank">
          khalid
        </a>
      </div>
    </>
  );
}

export default App;
