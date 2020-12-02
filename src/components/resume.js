import React,{ Component } from 'react';
import { Grid , Cell} from 'react-mdl';
import Logo from './Propic3.png';
import Education from './education';
import Experiance from './experiance';
import Skills from './skills';


  class Resume extends Component{
      render(){
          return(
              <div>
              <Grid>
                <Cell style={{backgroundColor:"#2727278a"}} col={4}>
                    <div style={{textAlign:"center"}}>
                        <img 
                        src={Logo}
                        alt="pro pic"
                        style={{ paddingTop:"20px" , height:"200px"}}
                        />
                        
                    </div>
                    <h2 style={{textShadow:"2px 2px 2px white"}}> Safvan P</h2>
                    <h4 style={{color:"black"}}>Front end Developer</h4>
                    <hr style={{borderTop:"3px solid black" , width:"50%"}}></hr>
                    <p>
                    Creative and self-starting Front-End Developer with 6 month experience building stable websites and apps in fast-paced, collaborative environments. Highly skilled in <b>HTML/CSS/JavaScript/ReactJS</b> and working knowledge of Photoshop.
                    </p>
                    <hr style={{borderTop:"3px solid black" , width:"50%"}}></hr>
                    <h5>Address</h5>
                    <p>Malappuram , Kerala ,India</p>
                    <h5>Phone</h5>
                    <p>+91-9605 601635</p>
                    <h5>E-mail</h5>
                    <p>safvanparangodath12@gmail.com</p>
                    <h5>Website</h5>
                    <p>https://safvan27.netlify.app/</p>
                    
                    <hr style={{borderTop:"3px solid black" , width:"50%"}}></hr>

                </Cell>
                <Cell className="resume-right-col" col={8}>
                    <h2>Education</h2>
                    <Education
                        startYear={2002}
                        endYear={2006}
                        schoolName="MES CE"
                        schoolDiscription="MES College of Engineering (MESCE) is a private engineering college in Kuttippuram, Malappuram."
                        />
                        <Education
                        startYear={2002}
                        endYear={2006}
                        schoolName="MES CE"
                        schoolDiscription="MES College of Engineering (MESCE) is a private engineering college in Kuttippuram, Malappuram."
                        />
                      
                        <hr style={{borderTop:"3px solid black"}}/>
                        <h2>Experiance</h2>
                        <Experiance 
                        startYear={2012}
                        endYear={2020}
                        jobName="Intern"
                        jobDiscription="trainee in Kingslab Pvt Ltd "
                        />
                        <Experiance 
                        startYear={2012}
                        endYear={2020}
                        jobName="Second Job"
                        jobDiscription="trainee in Kingslab Pvt Ltd "
                        />
                    <hr style={{borderTop:"3px solid black" , width:"50%"}}></hr>
                       <h2>Skills</h2>
                        <Skills
                            skill = "HTML"
                            progress={80}                        
                        />
                         <Skills
                            skill = "CSS"
                            progress={70}                        
                        />
                         <Skills
                            skill = "JAVA  SCRIPTS"
                            progress={40}                        
                        />
                         <Skills
                            skill = "REACT JS"
                            progress={60}                        
                        />
                </Cell>
              </Grid>
              </div>
          )
      }
  }


  export default Resume;