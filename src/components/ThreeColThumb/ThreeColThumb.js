import React from 'react';
import {NavLink} from 'react-router-dom';

import './ThreeColThumb.css';

const ThreeColThumb = ({data}) => {
    return (
        <section className="ThreeColThumbWrapper">
            <article className="Col">
                <figure className="ImageBlock">
                    <NavLink to="/">
                        <img src={data.src} alt={data.alt} aria-hidden="true" />
                    </NavLink>
                </figure>  
                <figcaption className="Infos">
                    <h3>
                        <NavLink to="/hakkimizda" className="Link">
                           {data.title}
                        </NavLink>
                    </h3>
                    <p>
                        {data.description}
                    </p>
                </figcaption>
            </article>
        </section>
    )
}

export default ThreeColThumb;