import React from 'react';
import {NavLink} from 'react-router-dom';

import './ThreeColThumb.css';
import Image from '../../assets/images/image.jpg'

const ThreeColThumb = () => {
    return (
        <section className="ThreeColThumbWrapper">
            <article className="Col">
                <figure className="ImageBlock">
                    <NavLink to="/">
                        <img src={Image} />
                    </NavLink>
                </figure>  
                <figcaption className="Infos">
                    <h3>
                        <NavLink to="/hakkimizda" className="Link">
                            Best Code Ever
                        </NavLink>
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet contstectur amet sit dolor.
                        Lorem ipsum dolor sit amet contstectur amet sit dolor.
                        Lorem ipsum dolor sit amet contstectur amet sit dolor.
                    </p>
                </figcaption>
            </article>
            <article className="Col">
                <figure className="ImageBlock">
                    <NavLink to="/">
                        <img src={Image} />
                    </NavLink>
                </figure>  
                <figcaption className="Infos">
                    <h3>
                        <NavLink to="/hakkimizda" className="Link">
                            Best Code Ever
                        </NavLink>
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet contstectur amet sit dolor.
                        Lorem ipsum dolor sit amet contstectur amet sit dolor.
                        Lorem ipsum dolor sit amet contstectur amet sit dolor.
                    </p>
                </figcaption>
            </article>
            <article className="Col">
                <figure className="ImageBlock">
                    <NavLink to="/">
                        <img src={Image} />
                    </NavLink>
                </figure>  
                <figcaption className="Infos">
                    <h3>
                        <NavLink to="/hakkimizda" className="Link">
                            Best Code Ever
                        </NavLink>
                    </h3>
                    <p>
                        Lorem ipsum dolor sit amet contstectur amet sit dolor.
                        Lorem ipsum dolor sit amet contstectur amet sit dolor.
                        Lorem ipsum dolor sit amet contstectur amet sit dolor.
                    </p>
                </figcaption>
            </article>
        </section>
    )
}

export default ThreeColThumb;