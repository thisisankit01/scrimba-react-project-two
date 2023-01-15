/* Challenge:

- Create a Contact.js component in another file
- Move one of the contact card divs below into that file
- import and render 4 instances of that contact card
    - Think ahead: what's the problem with doing it this way?
*/

import picture from './assets/photo1.png'
import star from './assets/star.png'


export default function Contact(props) {
  console.log(props);
  return(
    <div className="contact-card">
    <img src={props.img}/>
    <h3>{props.name}</h3>
    <div className="info-group">
        <img src={star} />
        <p>{props.phone}</p>
    </div>
    <div className="info-group">
        <img src="./images/mail-icon.png" />
        <p>{props.email}</p>
    </div>
</div>
  )
}

/* Challenge:
One LAST time in this course, set up a React app from scratch
- Render an <App /> component
    - App should be in its own file
- App should render 4-5 <Joke /> components 
  (Joke component defined in its own file too)
    - Each Joke should receive a "setup" prop and a "punchline" prop
      and render those however you'd like
- Use your favorite 2-part jokes (setup & punchline), or check
  jokes.md file for some examples.



EXTRA CREDIT:
Some jokes are only a punchline with no setup:

E.g.: "It’s hard to explain puns to kleptomaniacs because 
they always take things literally."

If you don't pass in a "question" prop, how might you make it only 
show the punchline?
*/