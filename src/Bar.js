import { Link } from 'react-router-dom';
import './Bar.css'

function Bar(){
    return(
        <>
        <ul>
        <h1 style={{color: "red"}}>Hello Style!</h1>       
        <Link to ='/'><li>home</li></Link>
        <Link to ='/About'><li>about</li></Link>
        <Link to='/contact'><li>contact</li></Link>
        


        </ul>
        </>
    );
}
       

export default Bar;