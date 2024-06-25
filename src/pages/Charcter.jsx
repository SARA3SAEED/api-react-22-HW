import {React, useState, useEffect } from 'react';
import axios from 'axios';
import { Outlet, Link, useParams } from "react-router-dom";

export default function Charcter() {
    const { id }=useParams();
    const [character, setCharacter] = useState([]);
    useEffect(() => {
        axios.get(`https://finalspaceapi.com/api/v0/character/${id}`)
       .then(res => {
        setCharacter(res.data)
        console.log(res.data)
        })
    }, [])

  return (
    <div className="hero bg-base-200 w-[70%] m-16 shadow-xl">
    <div className="hero-content flex-col lg:flex-row">
      <img
        src={character.img_url}
        className=" rounded-lg shadow-xl" />
      <div>
                <h2 className="card-title">{character.name}</h2>
                <p>{character.status}</p>
                <p>{character.species}</p>
                <p>{character.gender}</p>
                <p>{character.origin}</p>
                {character.abilities && character.abilities.slice(0, 2).map((ability, index) => (
                        <p key={index}>{ability}</p>
                    ))}
        <Link to="/" className="btn btn-primary">Back Page</Link>
      </div>
    </div>
  </div>
  )
}
