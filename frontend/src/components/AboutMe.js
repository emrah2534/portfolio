import Image from 'react-bootstrap/Image'
import './AboutMe.css'
import { Row, Col, Grid, Container} from "react-bootstrap";
import axios from "axios";
import React, {useState, useEffect} from "react";
import Figure from 'react-bootstrap/Figure';
import ProgressBar from 'react-bootstrap/ProgressBar';
import myIcon from './svgFiles/myIcon.svg'
import iconDjango from  './svgFiles/django-icon.svg'
import iconPython from './svgFiles/python-icon.svg'
import iconJavascript from './svgFiles/javascript-icon.svg'
import iconReact from './svgFiles/react-js-icon.svg'
import iconSketchup from './svgFiles/sketchup-icon.svg'
import iconAutocad  from './svgFiles/autocad-icon.svg'
import iconPhotshop from './svgFiles/photoshop-icon.svg'
import iconHtml from './svgFiles/html-icon.svg'
import iconCss from './svgFiles/css-icon.svg'
import maxIcon from './svgFiles/3ds-icon.png'
import revitIcon   from './svgFiles/revit-icon.png'
import lumionIcon from './svgFiles/lumion-icon.png'
import rhinoIcon from './svgFiles/rhino-logo.png'



const AboutMe = ()=> {
    const url = "http://127.0.0.1:8000/aboutme_api";
    const [userInf, setUserInf] = useState([]);
    const [showInf, setShowInf] = useState([]);
    const [image, setImage] = useState([]);
    const [text, setText] = useState([])

    function getInfo() {
        axios.get(url)
        .then(response =>{
            setUserInf(response.data)})
        .catch(error=>{
                    console.log(error)
                })}

const icons = {
        'Python':iconPython,
        'JavaScript': iconJavascript,
        'React':iconReact,
        'Django':iconDjango,
        'Revit': revitIcon,
        'SketchUp':iconSketchup,
        'AutoCad': iconAutocad,
        'Photshop':iconPhotshop,
        '3dsMax': maxIcon,
        'Lumion': lumionIcon,
        'Vray': myIcon,
        'Rhino':rhinoIcon,
        'HTML': iconHtml,
        'CSS': iconCss

}

    function applyInfo() {
        setShowInf([])
        userInf.map(data=>{
            if (data.first_name==='Emrah') {
                setImage(data.image)
                setText(data.text)
                const progBarr = (
                    <div className='progress-bar-div' >
                    <a href={`https://en.wikipedia.org/wiki/${data.skill}`}><img className='svg-icon' src={icons[`${data.skill}`]}/></a>
                    <label className='labell'>{data.skill}</label>
                    <ProgressBar className='progress-barr' now={data.skill_range} label={`${data.skill_range}%`} />
                    </div>
                )
                setShowInf(arry=>[...arry,progBarr])

            }

        })
    }

    useEffect(()=>{
        getInfo();

    },[])

     useEffect(()=>{
        applyInfo()
    },[userInf])

    return(
    <Container>
        <Row>
            <Col md={{span:6 ,offset:3}}>
               <Figure>
                  <Figure.Image
                    width={1000}
                    height={1000}
                    alt="171x180"
                    src={image}
                   />
               </Figure>
            </Col>
        </Row>
        <Row>
            <h2>About Me</h2>
        </Row>
        <Row>
            <p className='aboutMe-text'>
                {text}
            </p>
        </Row>

        <Row>
            <div className='line'></div>
            <label className='tech-label'>Technical Skills</label>
            {showInf}
        </Row>
    </Container>

    )
}


export default AboutMe