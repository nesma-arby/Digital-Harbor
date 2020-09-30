import React, { Component } from 'react';
import lenovo from './lenovo.png';
import ram from './ram.png';
import { Button, Col, Row } from 'reactstrap';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';


class Myaccount extends Component {
    render() {

        let returnData = JSON.parse(localStorage.getItem('loggedUser'));

        if(returnData !== null){

            const user = returnData[0]


            return (

                <React.Fragment>
    
                    <NavBar />
    
                    <div className='blackTemplate'>
    
                        <p className='first'>Lenovo Channel Drive</p>
    
                        <div className='lenovo'>
                            <p>Smarter Technology For All</p>
                            <img src={lenovo} alt='lenovo' />
                        </div>
    
                        <img src={ram} alt='ram' className='ram' />
    
                        <div className='last'>
                            <p>RAMADAN KAREEM </p>
                            <p>رمضان كريم</p>
                        </div>
    
                        <div className='myAccount'>
    
                            <Row>
    
                                <Col sm={6} className='txt-left'>
                                    <h3>My Account</h3>
                                </Col>
    
                                <Col sm={6} className='txt-right'>
                                    <Button> Edit My Account </Button>
                                </Col>
    
                            </Row>
    
                            <ul>
    
                                <li>Name : {user.name}</li>
                                <li>Email Address : {user.email}</li>
                                <li>Company: {user.company}</li>
                                <li>City : {user.city}</li>
                                <li>Title: {user.title}</li>
                                <li>Phone : {user.number}</li>
    
                            </ul>
    
    
                        </div>
    
    
                    </div>
    
                </React.Fragment>
    
    
            );

        }else{
            return(
                <div>
                    Can't access without Login , <Link to='/login'> login </Link>
                </div>
            )
        }
        

    }
}

export default Myaccount;