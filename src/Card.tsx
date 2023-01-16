 import photo1 from './assets/photo1.png'
 import star from './assets/Star.png'
 import './index.css'
 import './output.css'

 export default function Card(props : any) {
  return (
    <div className="card-container flex flex-row">
    <div className="card flex flex-col">
   <img src={`${photo1}`} alt="" className='card--image' />
   <div className="card--stats">
    <img src={star} className="card--star"/>
      <span> {props.rating}</span>
      <span className='gray'> {props.reviewCount}</span>
      <span className='gray'>{props.country}</span>
    </div>
    <p className='space-line'>{props.title}</p>
    <p className='space-line'><span className='bold'>From ${props.price} </span>/ person</p>
    </div>
    </div>
  )
 }

/*
Challenge: Pass props to the Card component and display that data

- img ("katie-zaferes.png")
- rating ("5.0")
- reviewCount (6)
- country (Whatever you want)
- title ("Life Lessons with Katie Zaferes")
- price (136)

*/
