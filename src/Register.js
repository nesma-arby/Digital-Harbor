import React, { Component } from 'react';
import lenovo from './lenovo.png';
import ram from './ram.png';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import NavBar from './NavBar';



class Register extends Component {

users =[]

constructor(props) {
    super(props);
    this.state={
        name:'',
        company:'',
        title:'',
        number:'',
        email:'',
        password:'',
        city:''
    }
}

checkEmail = (email) => {

    let users = JSON.parse(localStorage.getItem('users'));
    
    if(users !== null){

        let index = users.findIndex( item => item.email === email)
       
        if(index > -1 ){
            alert('this email already exist please try another one')
        }else{
            this.setState({
                email: email
            })   
        }
    }else{
        this.setState({
            email: email
        }) 
    }

}

handleSubmit = (event) =>{


    event.preventDefault();  

    if (localStorage.getItem('users')) {

        // userData is an array to save current and next values to set them in the storage

        let userData = JSON.parse(localStorage.getItem('users')) ;

        userData.push(this.state);

        localStorage.setItem('users', JSON.stringify(userData));

    } else {

        localStorage.setItem('users', JSON.stringify([this.state]));

    }

    this.setState({
        name:'',
        company:'',
        title:'',
        number:'',
        email:'',
        password:'',
        city:''
    });

    alert('Thanks For Registeration , Please Login to get in your account');

}




handleNameChange = (event) =>{
    this.setState({
        name : event.target.value 
    })
}

handleCityChange = (event) =>{
    this.setState({
        city:event.target.value
    })
}

handleCompanyChange = (event) =>{
    this.setState({
        company:event.target.value
    })
}

handleEmailChange = (event) =>{
    this.checkEmail(event.target.value)
}

handleNumberChange = (event) =>{
    this.setState({
        number:event.target.value
    })
}

handlePasswordChange = (event) =>{
    this.setState({
        password:event.target.value
    })
}

handleTitleChange = (event) =>{
    this.setState({
        title:event.target.value
    })
}


    render() {

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

                <div className='formContainer'>

                    <Form className='form' onSubmit={this.handleSubmit}>

                        <p>Registration</p>
         

                        <Row form>
                            <Col md={6}>
                                <Input type="text" name="fullname"  placeholder="Full Name"
                                value={this.state.name}
                                onChange={this.handleNameChange}
                                required
                                 />
                            </Col>

                            <Col md={6}>
                                <Input type="text" name="company"  placeholder="Company" 
                                value={this.state.company}
                                onChange={this.handleCompanyChange}
                                required
                                />
                            </Col>
                        </Row>

                        <Row form>
                            <Col md={6}>
                                <Input type="text" name="title"  placeholder="Title" 
                                value={this.state.title}
                                onChange={this.handleTitleChange}
                                required
                                />
                            </Col>
                            <Col md={6}>
                                <Input type="text" name="mobilenumber"  placeholder="Mobile Number"
                                value={this.state.number}
                                onChange={this.handleNumberChange}
                                required
                                 />
                            </Col>
                        </Row>

                        <Row form>
                            <Col md={6}>
                                <Input type="email" name="email"  placeholder="Corporate Email"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                required
                                 />
                            </Col>
                            <Col md={6}>
                                <Input type="password" name="password"  placeholder="Password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                required
                                 />
                            </Col>
                        </Row>

                        <Row form>
                            <Col md={6}>
                                <Input type="text" name="city"  placeholder="City"
                                value={this.state.city}
                                onChange={this.handleCityChange}
                                required
                                 />
                            </Col>
                        </Row>

                        <Row form>
                            <Col md={12}>
                                <FormGroup check>
                                <Input type="checkbox" name="check" id="exampleCheck"/>
                                <Label for="exampleCheck" check>Please Keep me informed in product updates, Promotion and 
                                Events From Lenovo</Label>
                                </FormGroup>
                            </Col>
                        </Row>

                        <Row form>
                         <Col md={12}>
                            <Button type="submit" className='register'> Register Now </Button>
                         </Col>
                        </Row>

                    </Form>

                </div>

            </div>

            </React.Fragment>  
        );
    }
}

export default Register;