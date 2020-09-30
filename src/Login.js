import React, { Component } from 'react';
import lenovo from './lenovo.png';
import ram from './ram.png';
import { Button, Form, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import NavBar from './NavBar';


class Login extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
                }

    }


    handleOnSubmit = (event) => {

        event.preventDefault();

        if (localStorage.getItem('users')) {

            let userData = JSON.parse(localStorage.getItem('users'));

            let returnedData = userData.filter(d => d.email === this.state.email && d.password === this.state.password)

                if (returnedData.length > 0) {

                    localStorage.setItem('loggedUser', JSON.stringify(returnedData));
                        this.props.history.push('/Home');
                    }else {
                    alert('please check the email or the password again');
                          }


        } else {
            alert('please register first');
            this.props.history.push('/register')
            this.setState({
                email: '',
                password: ''
            })
        }
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
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

                        <Form className='form' onSubmit={this.handleOnSubmit}>

                            <p>Login Account</p>

                            <Input type="email" name="email" placeholder="Email Address"
                                value={this.state.email}
                                onChange={this.handleEmailChange}
                                required />

                            <Input type="password" name="password" placeholder="Password"
                                value={this.state.password}
                                onChange={this.handlePasswordChange}
                                required />

                            <Button type="submit" className='largeBtn'> Login Account </Button>

                            <Link to="/register">Create New Account</Link>

                        </Form>

                        {this.state.authnticatedUser && this.renderUserInfo()}

                    </div>


                </div>


            </React.Fragment>
        );
    }
}

export default Login;