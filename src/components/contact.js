import React,{ Component } from 'react';
import { Grid , Cell ,List,ListItem,ListItemContent} from 'react-mdl';
import Logo from './Propic1.png';
class Contact extends Component{
      render(){
          return(
                <div className="contact-body">
                    <Grid className="contact-grid">
                        <Cell col={6}>
                            <h2 style={{fontSize:'60px' , letterSpacing:'4px'}}>Safvan P</h2>
                            <img 
                                src={Logo}
                                alt="Pro Pic"
                                style={{height:'250px', borderRadius:"4px" , boxShadow:"3px 4px 5px"}}
                            />
                            <p style={{width:'75%',margin:'auto',paddingTop:'1em' }}>I've enjoyed being a self-employed handyman the past few months, but I'm ready and eager to return to the workforce full time. I miss having a regular schedule and contributing to a team.</p>
                        </Cell>
                        
                        <Cell col={6}> 
                        <h2 style={{fontSize:'40px'}}>Contact Me</h2>
                        <hr/>
                        <div  className="contact-list">
                        <List>
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px' , fontFamily:'Anton'}}>
                                    <i className="fa fa-phone-square " aria-hidden="true"/>
                                    (+91)-96 0560 1635
                                    </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px' , fontFamily:'Anton'}}>
                                    <i className="fa fa-whatsapp " aria-hidden="true"/>
                                    (+91)-96 0560 1635
                                    </ListItemContent>
                            </ListItem>
                            
                            <ListItem>
                                <ListItemContent style={{fontSize:'25px' , fontFamily:'Anton'}}>
                                    <i className="fa fa-envelope " aria-hidden="true"/>
                                        safvanparangodath12@gmail.com
                                    </ListItemContent>
                            </ListItem>

                            <ListItem>
                                <ListItemContent style={{fontSize:'25px' , fontFamily:'Anton'}}>
                                    <i className="fa fa-skype " aria-hidden="true"/>
                                    live:.cid.ee719fe61a294580
                                    </ListItemContent>
                            </ListItem>
                        </List>
                        </div>
                        
                        </Cell>
                    </Grid>
                </div>
            )
      }
  }


  export default Contact;