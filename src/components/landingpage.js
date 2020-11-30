import React,{ Component } from 'react';
import { Grid,Cell } from 'react-mdl'; 
import Logo from './Propic1.png';

class LandingPage extends Component{
      render(){
          return(
           
            <div style={{width: '100%', margin:'auto'}}>
                <div className="name"><h1>Hi ,I'm Safvan</h1><h4>“Chase your dreams .... but make sure you don't find shortcuts ...”
                        <br/>― Sachin Tendulkar</h4></div>
                <Grid className="Landing-grid">
                    <Cell col={12}>
                        <img 
                        src={Logo}
                        alt="avatar"
                        className="avatar-img"
                        />
                        <div className="banner-text">
                            
                             <h2>A FRONT END DEVELOPER</h2>
                            <hr/>
                            <p>REACT | REACTJS | JAVASCRIPTS | CSS | HTML | BOOTSTRAP | REACT BOOTSTRAP </p>
                            <div className="social-links">
                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/safvan27/" rel="noopener noreferrer" target ="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                                 {/* Github */}
                                  <a href="https://github.com/Safvan27" rel="noopener noreferrer" target ="_blank">
                                    <i className="fa fa-github-square" aria-hidden="true" />
                                </a>

                                 {/* Facebook */}
                                 <a href="https://www.facebook.com/parangodath1" rel="noopener noreferrer" target ="_blank">
                                    <i className="fa fa-facebook-square" aria-hidden="true" />
                                </a>

                                 {/* Instagram */}
                                <a href="https://www.instagram.com/safu_saf/" rel="noopener noreferrer" target ="_blank">
                                    <i className="fa fa-instagram" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>

            )
      }
  }


  export default LandingPage;