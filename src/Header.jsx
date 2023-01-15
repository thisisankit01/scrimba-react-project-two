import airbnb from './assets/airbnblogo.svg'

function Navbar() {

  return (
    <>
    <header>
      <nav>
        <img src={airbnb} className="nav--logo"/>
      </nav>
    </header>
    </>
  )
}

export default Navbar

/*
Challenge: Build the Hero component.
Check the Figma file for the design specifics.
*/