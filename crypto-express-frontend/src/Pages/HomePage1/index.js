import React, { useState, useEffect } from "react";
import AuthenedHomePage from "./AuthenedHomePage";
import UnauthenHomepage from "./UnauthenHomepage";

const index = (props) => {
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <>
            {authenticated ?
                <>
                    <AuthenedHomePage/>
                </>
                :
                <>
                    <UnauthenHomepage/>
                </>
            }
        </>
    )
}


export default index;