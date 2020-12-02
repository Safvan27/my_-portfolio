import React, { Component } from 'react';
import {Grid , Cell} from 'react-mdl';
class Experiance extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={4}>
                         <p>{this.props.startYear} - {this.props.endYear}</p>

                    </Cell>
                    <Cell col={4}> 
                        <h4 style={{marginTop:"0px"}}> {this.props.jobName} </h4>
                             <p> {this.props.jobDiscription} </p>
                    </Cell>
                
                </Grid>
            </div>
        )
    }
}
export default Experiance;