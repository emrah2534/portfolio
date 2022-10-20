import './Image.css';
import { Row, Col, Grid, Container} from "react-bootstrap";
import React, {useState, useEffect} from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import iconLocation from './svgFiles/location.png'
import {
  Link,
} from "react-router-dom";

const Images= () => {
    const url = "http://127.0.0.1:8000/arch_api";
    const [show, setShow] = useState([]);
    const [projects, setProjects] = useState([]);


    function getImages() {
        axios.get(url)
            .then(response =>{
                setProjects(response.data)
            })
            .catch(error=>{
                console.log(error)
            })
    }

    function applyImages ()  {
        setShow([])
        projects.map(arches=> {

            let des = <p>{arches.description.substr(0,130)}<strong style={{fontSize:'20px'}}>...</strong></p>
            const new_image = (

                <Col md={4}>
                    <div key={arches.id} style={{marginBottom:'20px'}}>
                    <Card className='text-center'>
                      <Card.Img style={{width: '100%', maxHeight:'210px'}} src={arches.image}  />
                      <Card.Body>
                        <Card.Title>{arches.title}</Card.Title>
                        <Card.Text>{des}</Card.Text>
                        <Link to={`details/${arches.id}`}><Button variant="primary">Learn more</Button></Link>
                      </Card.Body>
                        <Card.Footer className='text-muted' ><img src={iconLocation}
                       style={{width:'20px', marginBottom:'4px'}}/> {arches.place}</Card.Footer>
                    </Card>
                    </div>
                </Col>
             );

             setShow(arry=>[...arry,new_image])});
    }

    useEffect(()=>{
        getImages();
          }, [])

    useEffect(()=>{
        applyImages()
    },[projects])

    return (
        <div>
            <Container>
                <div className='rows' >
                    <Row>
                        {show.length>0 ? show : 'Nothing tho show'}
                    </Row>
                </div>
            </Container>
        </div>

  );}


export default Images


