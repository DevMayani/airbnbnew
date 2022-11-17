import React from 'react'
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import Card from './component/Card'
import data from './data'
import './App.css'

const App = () => {

  const cards = data.map(item => {
    return (
    <Card 
      key={item.id}
      item={item}
      />
      )
  })

  return (


    <div>
      <Navbar />
      <Hero />
      <section className='card-list'>
      {cards}
      </section>
    </div>
  )
}

export default App
