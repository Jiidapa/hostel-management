import React from 'react';
import '../style/style.scss';

const Footer = () => {
    return (
        <>
            <footer className="footer w-100">
                <p className="my-0">© Hostel Management { new Date().getFullYear() }</p>
            </footer>
        </>
    )
}

export default Footer
