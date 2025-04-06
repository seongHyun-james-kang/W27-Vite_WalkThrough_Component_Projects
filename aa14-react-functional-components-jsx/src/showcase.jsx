// importing image
import blastoiseImg from './images/blastoise.jpg';
import './Showcase.css';


function Showcase() {
    // JavaScript variables defined here
    const favPokemon = "Blastoise";
    const pokeCharacteristics =  {
        type: "Water",
        move: "Hydro Pump"
    };

    return(

        <div className="showcase-container">
            <div className="content">
            <h1>{favPokemon}&apos;s Showcase Component</h1>
            <img 
                src={blastoiseImg}
                alt={favPokemon}
                className="pokemon-image"
                />
        <h2>
        <span 
        className="type-span" 
        style={{ backgroundColor: "#007BFF", color: "white" }}
        >
        {pokeCharacteristics.type}
         </span>

         <span 
           className="type-span" 
           style={{ backgroundColor: "white", color: "#007BFF" }}
           >
           {pokeCharacteristics.move}
          </span>
        </h2>
              
        </div>
        </div>
    );
}

export default Showcase;

