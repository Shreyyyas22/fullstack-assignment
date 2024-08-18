import React, { useState, useEffect } from 'react';

function App() {
  const [cards, setCards] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/cards')
      .then((response) => response.json())
      .then((data) => setCards(data));
  }, []);

  const filteredCards = cards.filter(card =>
    card.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header Section */}
      <header className="bg-black text-white p-4 flex justify-between items-center">
        <div className="flex items-center space-x-4">
          <img src="logo-placeholder.png" alt="Logo" className="h-8" /> {/* Replace with your logo */}
          <h1 className="text-xl font-semibold">Help Center</h1>
        </div>
        <button className="bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded">
          Submit a request
        </button>
      </header>

      {/* Main Content Section */}
      <main className="flex-grow p-8 bg-gray-100">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-6">How can we help?</h2>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="border p-2 rounded w-1/2 shadow-sm"
          />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center">
          {filteredCards.map((card) => (
            <div
              className="w-full max-w-sm mx-auto mt-6 bg-white rounded-lg shadow-lg p-6"
              key={card.id}
            >
              <h3 className="text-xl font-semibold mb-2 text-gray-800">{card.title}</h3>
              <p className="text-gray-600 mb-4">{card.description}</p>
              <button className="text-blue-500 hover:text-blue-700 font-semibold">
                Read More
              </button>
            </div>
          ))}
        </div>
      </main>

      {/* Footer Section */}
      <footer className="bg-black text-white p-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          <div>
            <h4 className="font-semibold mb-2">Abstract</h4>
            <ul>
              <li>Branches</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Resources</h4>
            <ul>
              <li>Blog</li>
              <li>Help Center</li>
              <li>Release Notes</li>
              <li>Status</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Community</h4>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Facebook</li>
              <li>Dribbble</li>
              <li>Podcast</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-2">Company</h4>
            <ul>
              <li>About Us</li>
              <li>Careers</li>
              <li>Legal</li>
              <li>Contact Us</li>
            </ul>
          </div>
        </div>
        <div className="text-center">
          <p>© Copyright 2022 Abstract Studio Design, Inc. All rights reserved</p>
          <p>Contact Us: info@abstract.com</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
