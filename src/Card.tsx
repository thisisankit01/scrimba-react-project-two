 import photo1 from './assets/photo1.png'
 import star from './assets/Star.png'
 import './index.css'
 import './output.css'


export default function Card(props : any) {
  let badgeText
  if (props.openSpots === 0) {
      badgeText = "SOLD OUT"
  } else if (props.location === "Online") {
      badgeText = "ONLINE"
  }
  
  return (
      <div className="card">
          {
              badgeText && 
              <div className="card--badge">{badgeText}</div>
          }
          <img 
              src={photo1} 
              className="card--image" 
          />
          <div className="card--stats">
              <img src={star} className="card--star" />
              <span>{props.stats.rating}</span>
              <span className="gray">({props.stats.reviewCount}) • </span>
              <span className="gray">{props.location}</span>
          </div>
          <p className="card--title">{props.title}</p>
          <p className="card--price">
              <span className="bold">From ${props.price}</span> / person
          </p>
      </div>
  )
}
