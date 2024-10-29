import React, { useState } from 'react';
import './App.css';

// Mapeo de caracteres para desencriptación
const charMap = {
  '^': 'm', '(': ' ', ')': ' ', '~': 'o', '[': 'e',']': 'n', '\\': 'i', '+': 'u',
  '?': 'a', '=': 't', '$': 'r', '*': 'p', '/': 'l', '¿': 'y', '{': 's',
  '}': 'q', '¡': 'd', '¬': 'ó', '_': 'z', '-': ' ', '`': 'c', '#': 'v',
  ';': 'f', '!': 'j', '%':'b',
};

// Función de desencriptación
const decryptMessage = (encryptedText) => {
  return encryptedText
    .split('')
    .map(char => charMap[char] || char) // Sustituye caracteres según el mapeo, o deja el original si no está en el mapa
    .join('');
};

function App() {
  const [encryptedText, setEncryptedText] = useState('^[()`~^*/?`[()^+`-~()#[$()/~()%\\[]()}+[()[{=~¿()=$?%?!?]¡~()¿()`¬^~()[{=~()?+^[]=?()^\\{()*~¡[$[{()¡[()?=[]`\\¬]()¿()[{;+[$_~()`~]=\\]+~');
  const [decryptedText, setDecryptedText] = useState('');

  const handleDecrypt = () => {
    const result = decryptMessage(encryptedText);
    setDecryptedText(result);
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>🔐 Desencriptador de Mensajes</h1>
        <p>Descifra mensajes ocultos de manera sencilla.</p>
      </header>

      <div className="container">
        <div className="input-section">
          <label htmlFor="encrypted-text">🔒 Mensaje Encriptado:</label>
          <textarea
            id="encrypted-text"
            value={encryptedText}
            onChange={(e) => setEncryptedText(e.target.value)}
            rows="5"
            cols="50"
            placeholder="Introduce el texto encriptado aquí..."
          />
        </div>

        <button onClick={handleDecrypt} className="decrypt-button">Desencriptar</button>

        <div className="output-section">
          <h2>Mensaje Desencriptado:</h2>
          <div className="decrypted-output">
            <p>{decryptedText || "Aquí aparecerá el mensaje desencriptado..."}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
