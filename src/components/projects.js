import React, { Component } from 'react';
import { Grid, Cell, Card, CardTitle, CardText, CardActions, Button} from 'react-mdl';

class Projects extends Component {
    render() { 
        return ( 

            <Grid>
                <Cell col={12}>
                    
                <div className='projects-grid'>

                {/* ScoreCard */}
                 <Card shadow={5} style={{minWidth: '400', margin: 'auto', marginTop: '5px', borderRadius: '2rem'}}>
                    <CardTitle style={{color: 'gray', height: '150px', background: '#fcb1b1'}}>ScoreCard</CardTitle>
                       <CardText>Created with CodeSandbox</CardText>
                          <CardActions border>
                             <Button colored>
                                <a style={{textDecoration: 'none'}} href='https://ndup0.csb.app/' rel='noreferrer noopener' target='_blank'>
                                  Live Demo
                                </a>
                             </Button>

                             <Button colored>
                               <a style={{textDecoration: 'none'}} href='https://github.com/Mezebu/score-card' rel='noreferrer noopener' target='_blank'>
                                 github
                               </a>
                             </Button>

                             <Button colored>
                               <a style={{textDecoration: 'none'}} href='https://codesandbox.io/s/github/Mezebu/score-card' rel='noreferrer noopener' target='_blank'>
                                 Sandbox
                               </a>
                             </Button>
                          </CardActions>           
                </Card>

                {/* Designs Page */}

                <Card shadow={5} style={{minWidth: '400', margin: 'auto', marginTop: '5px', borderRadius: '2rem'}}>
                  <CardTitle style={{color: 'black', height: '150px', background: 'orange'}}>Design</CardTitle>
                    <CardText>HTML/CSS</CardText>
                      <CardActions border>
                        <Button colored>
                          <a style={{textDecoration: 'none', color: 'orange'}} href='https://mezebu.github.io/designs/' rel='noreferrer noopener' target='_blank'>
                            Live Demo
                          </a>
                        </Button>

                        <Button colored>
                          <a style={{textDecoration: 'none', color: 'orange'}} href='https://github.com/Mezebu/designs' rel='noreferrer noopener' target='_blank'>
                            github
                          </a>
                        </Button>
                      </CardActions>           
                </Card>
                
                {/* Infuse Page */}                

                <Card shadow={5} style={{minWidth: '400', margin: 'auto', marginTop: '5px', borderRadius: '2rem'}}>
                  <CardTitle style={{color: 'black', height: '150px', background: 'red'}}>Infuse</CardTitle>
                    <CardText>HTML/CSS</CardText>
                      <CardActions border>
                        <Button colored>
                          <a style={{textDecoration: 'none', color: 'red'}} href='https://mezebu.github.io/Infuse/' rel='noreferrer noopener' target='_blank'>
                            Live Demo
                          </a>
                        </Button>

                        <Button colored>
                          <a style={{textDecoration: 'none', color: 'red'}} href='https://github.com/Mezebu/Infuse' rel='noreferrer noopener' target='_blank'>
                            github
                          </a>
                        </Button>
                  </CardActions>           
                </Card>
                </div>

                </Cell>

                 <Cell col={12}>
                   <div className='projects-grid'>

                     {/* thumbuz Page */}

                     <Card shadow={5} style={{minWidth: '400', margin: 'auto', marginTop: '5px', borderRadius: '2rem'}}>
                       <CardTitle style={{color: 'black', height: '150px', background: 'gray'}}>Thumbuz</CardTitle>
                         <CardText>Login Page</CardText>
                           <CardActions border>
                             <Button colored>
                               <a style={{textDecoration: 'none', color: 'gray'}} href='https://mezebu.github.io/thumbeez/' rel='noreferrer noopener' target='_blank'>
                                 Live Demo
                               </a>
                             </Button>

                             <Button colored>
                               <a style={{textDecoration: 'none', color: 'gray'}} href='https://github.com/Mezebu/thumbeez' rel='noreferrer noopener' target='_blank'>
                                 github
                               </a>
                             </Button>
                           </CardActions>           
                     </Card>

                     {/* Fox Page */}

                     <Card shadow={5} style={{minWidth: '400', margin: 'auto', marginTop: '5px', borderRadius: '2rem'}}>
                       <CardTitle style={{color: 'black', height: '150px', background: 'blue'}}>Fox 4</CardTitle>
                         <CardText>HTML/CSS</CardText>
                           <CardActions border>
                             <Button colored>
                               <a style={{textDecoration: 'none', color: 'blue'}} href='https://mezebu.github.io/Fox-4/' rel='noreferrer noopener' target='_blank'>
                                 Live Demo
                               </a>
                             </Button>

                             <Button colored>
                               <a style={{textDecoration: 'none', color: 'blue'}} href='https://github.com/Mezebu/Fox-4' rel='noreferrer noopener' target='_blank'>
                                 github
                               </a>
                             </Button>
                           </CardActions>           
                         </Card>

                     {/* Social  */}

                     <Card shadow={5} style={{minWidth: '400', margin: 'auto', marginTop: '5px', borderRadius: '2rem'}}>
                       <CardTitle style={{color: 'black', height: '150px', background: 'purple'}}>Social</CardTitle>
                         <CardText>HTML/CSS</CardText>
                           <CardActions border>
                             <Button colored>
                               <a style={{textDecoration: 'none', color: 'purple'}} href='https://mezebu.github.io/Social/' rel='noreferrer noopener' target='_blank'>
                                 Live Demo
                               </a>
                             </Button>

                             <Button colored>
                               <a style={{textDecoration: 'none', color: 'purple'}} href='https://github.com/Mezebu/Social' rel='noreferrer noopener' target='_blank'>
                                github
                               </a>
                             </Button>
                           </CardActions>           
                     </Card>
                    </div>
                </Cell>
            </Grid>
            

            
                
            
           
         );
    }
}
 
export default Projects;