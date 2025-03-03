import React, { useEffect, useState } from "react";
import axios from "axios";
import './Quote.css'

function Quote() {
    const [quote, setQuote] = useState("");
    const url = "https://dummyjson.com/quotes";


    const generate = async () => {
        try {
            const response = await axios.get(url);
            const quotes = response.data.quotes;
            const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
            setQuote(randomQuote.quote);
        } catch (error) {
            console.error("Error fetching quote:", error);
            setQuote("Failed to load quote.");
        }
    };


    useEffect(() => {
        generate();
    }, []);

    return (
        <div
            className="main d-flex flex-column 
    align-items-center justify-content-center vh-100 "

        >
            <div
                className="quote_div p-4 text-white text-center rounded shadow"
                style={{
                    Width: "550px",
                    backgroundColor: "#505081",
                    Height: "350px",
                    fontSize: "1.2rem",
                    textAlign: 'center',
                    overflow: "hidden",
                    padding: "20px",
                    wordWrap: "break-word",
                    whiteSpace: "normal",
                    margin:'20px'
                }}
            >
                {quote}
            </div>
            <button
                className="  mt-3"
                style={{
                    padding: "10px 20px",
                    fontSize: "1rem",
                    borderRadius: "5px",
                }}
                onClick={generate}
            >
                GENERATE
            </button>
        </div>
    );
}

export default Quote;
