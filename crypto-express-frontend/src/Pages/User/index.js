import React from 'react';
import Navbar from '../../Layouts/Navbar';
import Sidebar from '../../Layouts/Sidebar';
const index = () => {
    return (
        <>
            <Navbar scrollNav={true} />
            <Sidebar />
        </>
    )

};

export default index;
