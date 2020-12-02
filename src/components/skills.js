import React, { Component } from 'react';
import {Grid , Cell , ProgressBar} from 'react-mdl';
class Skills extends Component{
    render(){
        return(
            <div>
                <Grid>
                    <Cell col={2}>
                            <div style={{display:"flex"}}> {this.props.skill} </div>
                    </Cell>
                    <Cell col={9}>
                        <div> <ProgressBar   style={{  marginTop:'6px'  , width:'85%'}} progress={this.props.progress} /> </div> 
                    </Cell>
                    <Cell col={1}>
                        {this.props.progress}%
                    </Cell>
                   
                </Grid>
            </div>
        )
    }
}
export default Skills;