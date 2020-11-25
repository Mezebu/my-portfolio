import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Picture from './hpic.jpg';

class About extends Component {
    render() { 
        return ( 
            <div>
                <Grid>
                    <Cell col={4}>
                    <div style={{textAlign: 'center'}}>
                            <img src={Picture} alt='avatar' style={{height: '200px', borderRadius: '100px'}}/>                             
                        </div>
                    </Cell>

                    <Cell className='about-right-col' col={8}>
                        words
                        </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default About;