import React, { useState, useEffect } from "react";
import { Body, Navbar, Sidebar } from "../../Config";
import { HomeBody } from "./HomeElements";



const index = (props) => {
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <>
            {authenticated ?
                <>
                    <Navbar />
                    <Sidebar />
                    <Body>
                        body
                    </Body>
                </>


                :
                <>
                    <Navbar />
                    <HomeBody>
                        homepage
                    </HomeBody>
                </>
            }


        </>
    )
}


export default index;