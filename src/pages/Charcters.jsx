import axios from 'axios';
import {React, useState, useEffect } from 'react';
import Card from '../components/Card';



export default function Charcters() {
    const [characters, setCharacters] = useState([]);
    useEffect(() => {
        axios.get('https://finalspaceapi.com/api/v0/character/')
       .then(res => {
        setCharacters(res.data)
        console.log(res.data)
        })
    }, [])


    const deleteCharacter = (id) => {
        setCharacters(characters.filter(character => character.id !== id));
    };

  return (

            <div className='flex flex-wrap shadow-xl'>
                <Card char={characters} deleteCharacter={deleteCharacter}/>
            </div>
  )
}
