import React from 'react'

const Footer = () => {
    return (
        <>
            <footer style={styles.footer}>
                <p className="mt-3">© Hostel Management { new Date().getFullYear() }</p>
            </footer>
        </>
    )
}

export default Footer

const styles = {
    footer: {
        position: 'fixed',
        left: '0',
        bottom: '0',
        width: '100%',
        backgroundColor: '#4486A3',
        color: 'white',
        textAlign: 'center',
        height: '50px',
        fontFamily: 'Roboto',
        fontSize: '0.7rem',
        fontWeight: '300'
    }
}