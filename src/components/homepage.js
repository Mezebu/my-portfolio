import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';

class Home extends Component {
    render() { 
        return ( 
            <div style={{width: '100%', margin: 'auto'}}>
                <Grid className='home-grid'>
                    <Cell col={12}>
                        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRsRX6QzCX2rxKzfmn7VlsMYA0TYTW5Nt6o5g&usqp=CAU'
                        alt='home-avatar'
                        className='home-image'
                         />

                         <div className='banner-text'>
                             <h1>Computer Engineer</h1>

                             <hr />

                             <p>HTML5/CSS | JavaScript | Bootstrap | React | Microsoft Office | ICT</p>

                             <div className='social-links'>

                                 {/* GitHub */}
                                 <a href='https://github.com/Mezebu' rel='noreferrer noopener' target='_blank'>
                                 <i class="fa fa-github-square" aria-hidden='true' />
                                 </a>

                                 {/* Twitter */}
                                 <a href='https://twitter.com/Mezebu' rel='noreferrer noopener' target='_blank'>
                                 <i class="fa fa-twitter-square" aria-hidden='true' />
                                 </a>

                                 {/* Gmail */}
                                 <a href='mailto:mezebu07@gmail.com' rel='noreferrer noopener' target='_blank'>
                                 <i class="fa fa-envelope" aria-hidden='true' />
                                 </a>

                             </div>
                         </div>
                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default Home;