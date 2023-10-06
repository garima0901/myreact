import react from 'react'
import alpha from './images/images1.jpg'
import Bar from './Bar'
import PropsSample from './PropsSample'
import MyApi from './MyApi'
export default function Home(){
    return(
        <>
       <img src={alpha}></img>
       <MyApi/>
       //<Bar/>
       //<PropsSample/>
       </>
    )
}
