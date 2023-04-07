import React from 'react';

export default function Article({ flags, name, population, region, subregion }) {
    return (
    <>
       <article>
          <img src={flags.svg} alt="" />
          <h2>{name.common}</h2>
          <ul>
            <li>Population: {population}</li>
            <li>Region: {region}</li>
            <li>Subregion: {subregion}</li>
          </ul>
       </article>
    </>
  );
}