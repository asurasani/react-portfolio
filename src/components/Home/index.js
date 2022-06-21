import React from 'react'
import {Link} from 'react-router-dom'
import AnimaterLetters from '../AnimatedLetters';
import Loader from 'react-loaders'
import './index.scss';
import {useState, useEffect} from 'react'

const Home = () => {
    const [letterClass, setLetterClass] = useState('text-animate')
    const nameArray = [' ', 'A', 'n', 'e', 'e', 's', 'h']
    const beggingArray = ['p', 'l', 'e', 'a', 's', 'e',' ', 'h', 'i', 'r', 'e', ' ', 'm','e']

    // useEffect(() => {
    //     return setTimeout(() => {
    //         setLetterClass('text-animate-hover')
    //     }, 4000)
    // }, [])


    return (
        <>
        <div className='container home-page'>
            <div className='text-zone'>
                <h1> 
                <span className={letterClass}>H</span>
                <span className={`${letterClass} _12`}>i,</span>
                <br />
                <span className={`${letterClass} _13`}>I</span>
                <span className={`${letterClass} _14`}>'m</span>
                <AnimaterLetters letterClass={letterClass}
                strArray = {nameArray}
                idx = {15} />
                <br />
                <AnimaterLetters letterClass={letterClass}
                strArray = {beggingArray}
                idx = {22} />
                </h1>
                <h2>Junior at Stony Brook University</h2>
                <Link to="/contact" className='flat-button'>CONACT ME</Link>
            </div>

        </div>
        <Loader type='pacman' />
        </>

    );

}

export default Home