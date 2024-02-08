import React, { useState } from 'react';
import axios from 'axios';
import { Button }  from 'react-bootstrap';

function QuoteGenerator() {
  const [randomQuote, setRandomQuote] = useState(null);

  const generateRandomQuote = async () => {
    try {
      const response = await axios.get('https://dummyjson.com/quotes');
      const quotes = response.data.quotes;

        // Choose a random quote
      const randomIndex = Math.floor(Math.random() * quotes.length);
      const quote = quotes[randomIndex];

      // Set the random quote in the state
      setRandomQuote(quote);
    } catch (error) {
      console.error('Error fetching quotes:', error);
    }
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Button variant="warning text-white fw-3" onClick={generateRandomQuote}>Generate Quotes</Button>{' '}
      {randomQuote && (
        <div style={{ border: '1px solid #ccc', padding: '10px', marginTop: '25px', width: '500px', height:'300px',
          background: 'pink', textAlign: 'center', borderRadius: '20px',
          display: 'flex',flexDirection: 'column',
          justifyContent: 'center',  // Center horizontally
          alignItems: 'center'     }}>
            <p><b>{randomQuote.quote}</b></p>
            <p className='mt-3'>By - {randomQuote.author}</p>
        </div>
      )}
    </div>
  );
}

export default QuoteGenerator;
