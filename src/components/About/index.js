import { 
    faCss3, 
    faHtml5,
    faJs, 
    faReact, 
    faJava,
    faPython
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import './index.scss';
import Loader from 'react-loaders';

const About = () => {
    return(
        <>
            <div className="container about-page">
                <div className="text-zone">
                    <h1>
                        About me
                    </h1>
                    <p>
                        Why Did the Chicken Cross the Mobius Strip?
                        To get to the same side!
                    </p>
                    <p>
                        What starts with T, ends with T, and is full of T?
                        Teapot.
                    </p>
                    <p>
                        What did one tectonic plate say when he bumped into the other?
                        Sorry my fault!
                    </p>
                </div>

                <div className="stage-cube-cont">
                    <div className="cubespinner">
                        <div className="face1">
                            <FontAwesomeIcon icon={faJava} color="#000000" />
                        </div>
                        <div className="face2">
                            <FontAwesomeIcon icon={faHtml5} color="#F06529" />
                        </div>
                        <div className="face3">
                            <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
                        </div>
                        <div className="face4">
                            <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
                        </div>
                        <div className="face5">
                            <FontAwesomeIcon icon={faJs} color="#EFD81D" />
                        </div>
                        <div className="face6">
                            <FontAwesomeIcon icon={faPython} color="#003EFF" />
                        </div>
                    </div>
                </div>  
            </div>
                <Loader type="pacman" />
        </>
    )
}

export default About