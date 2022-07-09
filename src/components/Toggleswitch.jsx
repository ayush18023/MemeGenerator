import { useState } from "react";
import '../CSS/Toggleswitch.css';
const Toggleswitch = () => {
    const [swit, setswit] = useState('switch-inactive');
    const [backg, setbackg] = useState('inactiv-toggler');
    const handletog=()=>{
        if(swit==='switch-active'){
            setswit('switch-inactive');
            setbackg('inactiv-toggler');
        }
        else if(swit==='switch-inactive'){
            setswit('switch-active');
            setbackg('activ-toggler');
        }
    }
    return (
        <div className={backg}>
            <span class={swit} onClick={handletog}></span>
        </div>
    );
}
 
export default Toggleswitch;