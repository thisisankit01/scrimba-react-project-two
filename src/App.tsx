import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./Data"
import './index.css'


export default function App() {
  const cards = data.map(item => {
      return (
          <Card
              key={item.id}
              {...item}
              
          />
      )
  })        
  
  return (
      <div>
          <Navbar />
          <Hero />
          <section className="flex flex-row flex-wrap">
              {cards}
          </section>
      </div>
  )
}