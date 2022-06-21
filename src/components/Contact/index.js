import './index.scss'
import React from 'react'
import Loader from 'react-loaders'
import AnimaterLetters from '../AnimatedLetters'
import { useEffect, useState } from 'react'
import { useRef } from 'react'
import emailjs from '@emailjs/browser'

const Contact = () => {
    const refForm = useRef
    // const [letterClass, setLetterClass] = useState('text-animate')
     const form = useRef()

    // useEffect(() => {
    //     return setTimeout(() => {
    //     setLetterClass('text-animate-hover')
    //     }, 3000)
    // }, [])

    const sendEmail = (e) =>{
        e.preventDefault()
        
        emailjs
            .sendForm( 
                'gmail',
                'template_zq0t98c',
                form.current,
                'QhYqt0TbPcJwnlmccCkAQ'
            )
            .then(
                () => {
                  alert('Message successfully sent!')
                  window.location.reload(false)
                },
                () => {
                  alert('Failed to send the message, please try again')
                }
              )
    }
    return(
        <>
        <div className="container contact-page">
          <div className="text-zone">
            <h1>
              Contact me
            </h1>
            <p>
                If am interested in internship oppurtunites-especially in cybersecturiy.
                If you have any questions or would like to get to know me better,
                please reach out to me using the form below.
            </p>
            <div className='contact-form'>
                <form ref={form} onSubmit={sendEmail}>
                    <ul>
                        <li className='half'>
                            <input type="text" name="name" placeholder="Name" reaquired />
                        </li>
                        <li className='half'>
                            <input type="email" name="email" placeholder="Email" reaquired />
                        </li>
                        <li>
                            <input placeholder='Subject' type="text" name="subject" reaquired />
                        </li>
                        <li>
                            <textarea placeholder='Message' name="message" required></textarea>
                        </li>
                        <li>
                            <input type="submit" className='flat-button' value="Submit"></input>
                        </li>
                    </ul>
                </form>
            </div>
          </div>
        </div>    


        <Loader type="pacman" />


    </>)
}

export default Contact