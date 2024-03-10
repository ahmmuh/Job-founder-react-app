import React from 'react'

const Footer = () => {
    const date = new Date()
    return (
        <footer className='fixed-bottom text-center text-white  pt-4 bg-color'>
            <p> Skapat av Ahmed Mukhtar &copy; {date.getFullYear().toString()}</p>
        </footer>
    )
}

export default Footer
