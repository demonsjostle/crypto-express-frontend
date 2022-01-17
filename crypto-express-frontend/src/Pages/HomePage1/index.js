import React, { useState, useEffect } from "react";
import { Navbar } from "../../Config";  
import { FirstContainer, 
         HomeBody, 
         PlayButton,
         SecondContainer
} 
from "./HomeElements";



const index = (props) => {
    const [scrollNav, setScrollNav] = useState(false);
    const changeNav = () => {
        if(window.scrollY >= 80) {
            setScrollNav(true);
        } else {
            setScrollNav(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', changeNav);
    }, [])


    return (
        <>  
            <Navbar scrollNav={scrollNav}/>
            <HomeBody>
                <FirstContainer scrollNav={scrollNav}>
                    <PlayButton>Play</PlayButton>
                </FirstContainer>

                <SecondContainer>

                </SecondContainer>
            </HomeBody>
        </>
    )
}


export default index;