import React, { Component } from 'react';
import video from './video.png';
import elearning from './elearning.png';
import howto from './howto.png';
import { Col, Row, Button} from 'reactstrap';
import Register from './Register';
import lenovo from './lenovo.png';
import ram from './ram.png';
import NavBar from './NavBar';




class Home extends Component {

    
    render() {

        let user = JSON.parse(localStorage.getItem('loggedUser'));
        
       if(user !== null){

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

                    <p>  {`Welcome ${user[0].name}`} </p> 

                    </div>
   
                <section className="participate">

                    <h2>Why Participate ?  </h2>
                    <h4>Learn & win lots of prizes</h4>

                    <Button> Register </Button>

                </section>

                <section className='speaker'>

                    <Row>

                        <Col md={4}>
                            <img src={video} alt='video'  />
                        </Col>

                        <Col md={4}>
                            <img src={elearning} alt='E-learning' />
                        </Col>


                        <Col md={4}>
                            <img src={howto} alt='How to participate' />
                        </Col>

                    </Row>

                    <h3> Speaker</h3>
                    <span> <strong> Abdullatif Badawi  </strong> </span>
                    <p>SMP Sales Manager</p>


                </section>

                <section className='agenda'>

                    <h3>   <strong>  Agenda </strong> </h3>

                    <ul>

                        <li>  <span>  1:00 - 1:10</span>   </li>

                        <li>  <span>  1:10 - 1:45</span>  </li>

                        <li>  <span>  1:45 - 2:15</span>   </li>

                        <li>  <span>  2:15 - 2:30 </span>   </li>


                    </ul>


                    <ul>
                        <li> <p> <strong> Welcome Note </strong></p>  </li>
                        <li> <p> <strong> Webinar-Trainig-Product Enablement </strong> </p> <div>Abdullatif Badawi</div></li>
                        <li> <p>  <strong> Kahoot  Activity  </strong> </p> </li>
                        <li> <p>  <strong> Incentive announcement and closing  </strong> </p>  </li>

                    </ul>


                </section>

                <section className='activities'>

                    <h3> Activities </h3>

                    <p>Enjoy With Lenovo Activites Offered and Compete</p>

                </section>

            </React.Fragment>  
        );

       }else{
        return (
            <React.Fragment>  

                <section className='intro'>
                      <Register />
                </section>

                <section className="participate">

                    <h2>Why Participate ?  </h2>
                    <h4>Learn & win lots of prizes</h4>

                    <Button> Register </Button>

                </section>

                <section className='speaker'>

                    <Row>

                        <Col md={4}>
                            <img src={video} alt='video' />
                        </Col>

                        <Col md={4}>
                            <img src={elearning} alt='E-learning' />
                        </Col>


                        <Col md={4}>
                            <img src={howto} alt='How to participate' />
                        </Col>

                    </Row>

                    <h3> Speaker</h3>
                    <span> <strong> Abdullatif Badawi  </strong> </span>
                    <p>SMP Sales Manager</p>


                </section>

                <section className='agenda'>

                    <h3>   <strong>  Agenda </strong> </h3>

                    <ul>

                        <li>  <span>  1:00 - 1:10</span>   </li>

                        <li>  <span>  1:10 - 1:45</span>  </li>

                        <li>  <span>  1:45 - 2:15</span>   </li>

                        <li>  <span>  2:15 - 2:30 </span>   </li>


                    </ul>


                    <ul>
                        <li> <p> <strong> Welcome Note </strong></p>  </li>
                        <li> <p> <strong> Webinar-Trainig-Product Enablement </strong> </p> <div>Abdullatif Badawi</div></li>
                        <li> <p>  <strong> Kahoot  Activity  </strong> </p> </li>
                        <li> <p>  <strong> Incentive announcement and closing  </strong> </p>  </li>

                    </ul>


                </section>

                <section className='activities'>

                    <h3> Activities </h3>

                    <p>Enjoy With Lenovo Activites Offered and Compete</p>

                </section>

            </React.Fragment>  
        );
       }

    
    }
}

export default Home;