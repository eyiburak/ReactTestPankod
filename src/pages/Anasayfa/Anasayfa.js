import React from 'react';

import ThreeColThumb from '../../components/ThreeColThumb/ThreeColThumb';
import './Anasayfa.css';
import Image from '../../assets/images/image.jpg'

const data = [
    {
        src: Image,
        alt:"Image 1",
        title:"Best Code Ever",
        description:"Lorem ipsum dolor sit amet contstectur amet sit dolor. Lorem ipsum dolor sit amet contstectur amet sit dolor.Lorem ipsum dolor sit amet contstectur amet sit dolor."
    },
    {
        src: Image,
        alt:"Image 2",
        title:"Best Code Ever 2",
        description:"Lorem ipsum dolor sit amet contstectur amet sit dolor. Lorem ipsum dolor sit amet contstectur amet sit dolor.Lorem ipsum dolor sit amet contstectur amet sit dolor."
    },
    {
        src: Image,
        alt:"Image 3",
        title:"Best Code Ever 3",
        description:"Lorem ipsum dolor sit amet contstectur amet sit dolor. Lorem ipsum dolor sit amet contstectur amet sit dolor.Lorem ipsum dolor sit amet contstectur amet sit dolor."
    },
]

class Anasayfa extends React.Component {
    render(){
        return (
            <div className="Anasayfa">
                <div className="Container">
                    {
                        data.map((item,index) => 
                            <ThreeColThumb key={index} data={item}/>
                        )
                    }
                </div>
            </div>
        )
    }
} 

export default Anasayfa;