import {useParams} from "react-router-dom";
import React, {useState, useEffect} from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import './Details.css'

const Deatils = () => {
    let { id } = useParams();
    const url = 'http://127.0.0.1:8000/archDetail_api/'
    const [info, setInfo] = useState([]);
    const [show, setShow] = useState([]);


    function getImages () {
        axios.get(url+id)
            .then(response => {
                setInfo(response.data)
            })
            .catch(error=>{
                console.log(error)
            })
    }


    function applyImages () {

        setShow([])
        let count = 0;
        info.map(images=>{
               images.images.forEach(image=>{

                   const element = (
                         <div className='element'>
                          <Card>
                            <Card.Img className='card-image' variant="top" src={image} />
                            <Card.Body className='card-body'>
                              <Card.Text className='card-text'>
                                  {images.text[count]}
                              </Card.Text>
                            </Card.Body>
                          </Card>

                        </div>
                    )
                    {count++}
                    return setShow(arry => [...arry,element])


               })

        })
    }

    useEffect(() => {
        getImages()

    }, []);

    useEffect(()=> {
        applyImages()
    } ,[info]);


    return (
        <>
        <h2>Details Of the Project</h2>
            <>{show}</>
        </>
    )
}

export default Deatils