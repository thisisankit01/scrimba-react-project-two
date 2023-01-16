import Navbar from "./Navbar"
import Hero from "./Hero"
import Card from "./Card"
import data from "./Data"
import './index.css'
import photo1 from './assets/photo1.png'

export default function App() {

  const cards = data.map((item)=>{
    return(
      <Card
      img = {item.coverImg}
      rating={item.stats.rating}
      reviewCount={item.stats.reviewCount}
      location={item.location}
      title={item.title}
      price={item.price}
      />
    )
  })


  return(
   <div>
    <Navbar/>
    <Hero/>
    <div className="flex flex-row flex-wrap">
    {cards}
    </div>
   </div>
  )

}