import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Certificates extends Component {
    render() {
        return(
            <Grid>
                <Cell col={4}>
                    <p>{this.props.certificateYear}</p>
                </Cell>

                <Cell col={8}>
                    <h4 style={{marginTop: '0px'}}>{this.props.certificateName}</h4>
                    <p>{this.props.certificateDescription}</p>
                    <p>{this.props.detail}</p>
                </Cell>
            </Grid>
        )
    }
}

export default Certificates;