import React from 'react';
import './StarWars.css';


 class Card extends  React.Component {
     constructor() {
         super();
         this.state = {
             birthYear: "",
             Gender: "",
             mass: "",
             hairColor: "",
             eyeColor: "",
             height: ""
         }
     }
 }

export default Card;


// const Card = () => {
//     return (
//         <div>
//             <div className="cards">
//             <h1>Hello</h1>
//             </div>
            
//         </div>
//     );
// };