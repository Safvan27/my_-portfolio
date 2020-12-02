import React,{ Component } from 'react';
import { Grid , Cell} from 'react-mdl';
  class Resume extends Component{
      render(){
          return(
            <div className="contact-body">
            <Grid className="contact-grid">
                <Cell col={6}>Hello hai </Cell>
                <Cell col={6}>Hello </Cell>
            </Grid>
        </div>
          )
      }
  }


  export default Resume;