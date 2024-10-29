import React, { useState } from 'react';
import './App.css';

// Mapeo de caracteres para desencriptación
const charMap = {
  '^': 'm', '(': ' ', ')': ' ', '~': 'o', '[': 'e', ']': 'n', '\\': 'i', '+': 'u',
  '?': 'a', '=': 't', '$': 'r', '*': 'p', '/': 'l', '¿': 'y', '{': 's',
  '}': 'q', '¡': 'd', '¬': 'ó', '__': 'z', '-': 'h', '`': 'c', '#': 'v',
  ';': 'f', '!': 'j', '%': 'b'
};

// Función de desencriptación que maneja combinaciones de caracteres
const decryptMessage = (encryptedText) => {
  let result = '';
  for (let i = 0; i < encryptedText.length; i++) {
    // Comprobar si tenemos "__" para traducirlo a "z"
    if (encryptedText[i] === '_' && encryptedText[i + 1] === '_') {
      result += 'z';
      i++; // Saltar el siguiente "_"
    }
    // Si es "-", traducir a "h"
    else if (encryptedText[i] === '-') {
      result += 'h';
    }
    // Para otros caracteres, usa el mapeo normal
    else {
      result += charMap[encryptedText[i]] || encryptedText[i];
    }
  }
  return result;
};

function App() {
  const [encryptedText, setEncryptedText] = useState('');
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
