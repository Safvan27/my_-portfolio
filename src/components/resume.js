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
                <Cell style={{backgroundColor:"#2727278a"}} col={4} className="resume-left-grid">
                    <div style={{textAlign:"center"}}>
                        <img 
                        
                        src={Logo}
                        alt="pro pic"
                        style={{ 
                            border: "2px solid black",
                            padding: "5px",
                            boxShadow:"2px 2px 5px", 
                            marginTop:"20px", 
                            height:"200px"}}
                        />
                        
                    </div>
                    <h2 style={{ fontFamily:'Orbitron' , textShadow:"2px 2px 3px white"}}> SAFVAN P</h2>
                    <h4 style={{ fontFamily:"Cookie", fontSize:'3.5em',textShadow:'2px 2px 2px white',color:"black"}}>Front end Developer</h4>
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
                        startYear={2015}
                        endYear={2019}
                        schoolName="Bachelor of Technology in Electronics and Communication."
                        schoolDiscription="APJ Abdul Kalam Kerala Technological University"
                        />
                        <Education
                        startYear={2013}
                        endYear={2015}
                        schoolName="Higher Secondary Education - Science"
                        schoolDiscription="P.P.T.M.Y.H.S.S Cherur, Kannamangalam, Kerala"
                        />
                      
                        <hr style={{borderTop:"3px solid black"}}/>
                        <h2>Experiance</h2>
                        <Experiance 
                        startYear={2020}
                        endYear={2020}
                        jobName="Web Development"
                        jobDiscription="As Intern at Kings Labs Innovation Pvt.Ltd"
                        />
                        <Experiance 
                        startYear={2019}
                        endYear={2019}
                        jobName="Internship"
                        jobDiscription="KELTRON ELECTRO CERAMICS LIMITED. "
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