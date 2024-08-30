import {useState} from 'react'
import * as classes from "./App.module.scss"
import {Link, Outlet} from "react-router-dom";
import Cupcake from '@/assets/cupcake.jpg'
import downloadPng from '@/assets/dodownloadPng.png'

import Hawthorn from '@/assets/hawthorn.svg'

function TODO(a:number){
    console.log(a)
}

function TODO2(){
    throw new Error()
}

const App = () => {
    const [count, setCount] = useState(0)
    const increment = () => {
        // setCount(prev => prev + 1)

        TODO2()
    }


    // if(__PLATFORM__ === "desktop"){
    //     return <div>
    //         Hello user desktop
    //     </div>
    // }

    // if(__PLATFORM__ === "mobile"){
    //     return <div>
    //          mobile visitor
    //     </div>
    // }

    if(__ENV__ === 'development') {
        //addDevtools()
    }


    return (
        <div data-testId={'App.DataTestId'} id='root'>
            <img width={100} height={100} src ={Cupcake} alt="icon"/>
            fafafafafasdadad
sasasaasaasadadadfafa fafaf
            <img width={100} height={100} src ={downloadPng} alt='icon'/>

            <Hawthorn style={{color:"green"}} width = {100} height = {100}/>


            <Link to={'/about'}>About</Link>
            <br/>
            <Link to={'/shop'}>Shop</Link>

            <div>
                {__PLATFORM__}
            </div>

            
            <h1 data-testid={'Platform'} className={classes.value}>{count}</h1>
            <button className={classes.button1} onClick={increment}>
                <span> Click </span>
            </button>
            <Outlet/>
        </div>
    )
}

export default App