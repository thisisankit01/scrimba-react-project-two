import collage from'./assets/collage.png'

export default function Hero() {
  return (
    <section className="hero">
      <div className="collage">
      <img src={collage} className="collage--img"/>
      </div>
    <div className="content">
    <h1 className='hero-heading'>Online Experiences</h1>
    <p className='hero-para'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
    </div>
    </section>
  )
}
