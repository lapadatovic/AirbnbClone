import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import Card from './Components/Card/Card';
import data from './data'


function App() {

  const cards = data.map(item => {
    return <Card 
      key={item.id}
      item = {item}
      // or we can do like this
      // {...item}
    /> 
  })
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <section className='cards-list'>
        {cards}
      </section>
      
    </div>
  );
}

export default App;

