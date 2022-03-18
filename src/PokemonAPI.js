import axios from 'axios'
import React, {useState, useEffect} from 'react'

function PokemonAPI () {
    const [pokemons, setPokemons] = useState([])

    useEffect(() => {
        axios.get("https://api.pexels.com/v1/")
            .then(res => {
                console.log(res.data)
                setPokemons(res.data)
            })
            .catch(err => {
            // console.log(err)
        })
    }, [])

    return (
        <div> 
            <ul>
                {pokemons.map(poke => (
                    <img src="{poke.thumbnailUrl}"></img>
                ))

                }
            </ul>
        </div>
      )
}

export default PokemonAPI