import React from 'react';
import { Outlet, Link } from "react-router-dom";



export default function Card({char,deleteCharacter}) {
  return (
    <>
       {char.map( (char) =>
        <div key={char.id} className="card bg-base-100 w-96 m-2 p-2 shadow-xl">

            <img src={char.img_url} className='w-[90%] rounded '/>
            <div className="card-body h-[400px]">
                <h2 className="card-title">{char.name}</h2>
                <p>{char.status}</p>
                <p>{char.species}</p>
                <p>{char.gender}</p>
                <p>{char.origin}</p>
                {char.abilities && char.abilities.slice(0, 2).map((ability, index) => (
                        <p key={index}>{ability}</p>
                    ))}
                <div className="card-actions justify-end">
                    <button className="btn btn-primary"><Link to={`${char.id}`}>Veiw Details</Link></button>
                    <button className="btn btn-primary" onClick={() => deleteCharacter(char.id)}>Delete</button>
                </div> 
            </div>
    </div>)}
    </>
  )
}
