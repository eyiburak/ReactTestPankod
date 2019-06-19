import React from 'react';

import ThreeColThumb from '../../components/ThreeColThumb/ThreeColThumb';
import './Anasayfa.css';

class Anasayfa extends React.Component {
    render(){
        return (
            <div className="Anasayfa">
                <div className="Container">
                    <ThreeColThumb />
                </div>
            </div>
        )
    }
} 

export default Anasayfa;