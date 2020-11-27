import React, { Component } from 'react';
import { Grid, Cell} from 'react-mdl';
import Picture from './hpic.jpg';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import Certificate from './certificates';

class Resume extends Component {
    render() { 
        return ( 
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{textAlign: 'center'}}>
                            <img src={Picture} alt='avatar' style={{height: '200px', borderRadius: '100px'}}/>                             
                        </div>
                        
                        <h2 style={{paddingTop: '2em', fontFamily: "montserrat"}}>Ezeigwe Henry</h2>
                        <h4 style={{color: 'gray', fontFamily: "montserrat"}}>Computer Engineer</h4>
                        <hr style={{borderTop: '3px solid #c471ed', width: '50%'}}/>
                        <p style={{fontFamily: "montserrat"}}>
                            A computer engineer with good knowledge of web development, computer systems and softwares.
                            Dependable and organized team player with the ability to communicate effectively and efficiently.
                            Skilled at building relationships with employees across all levels of an organization 
                        </p>
                        <hr style={{borderTop: '3px solid #c471ed', width: '50%'}}/>
                        <h5 style={{fontFamily: "montserrat"}}>Address</h5>
                        <p style={{fontFamily: "montserrat"}}>Lateef Adegboyega Street, Off Ago Palace Way, Okota, Lagos</p>
                        <h5 style={{fontFamily: "montserrat"}}>Email</h5>
                        <a style={{textDecoration: 'none', color: 'black', fontFamily: "montserrat"}} href='mailto:mezebu07@gmail.com' 
                           rel='noreferrer noopener' 
                           target='_blank'>mezebu07@gmail.com
                        </a>

                        <hr style={{borderTop: '3px solid  #c471ed', width: '50%'}}/>
                    </Cell>
                    
                    <Cell className='resume-right-col' col={8}>
                        <h3>Education</h3>
                            
                        <Education
                          startYear={2014}
                          endYear={2018}
                          city={'Kharhiv'}
                          country={'Ukraine'}
                          schoolName={'Kharkov National University of Radio Electronics'}
                          schoolDescription={'Computer Engineering | Computer systems and Networks.'}
                          detail={'Thesis: Intrusion detection in ZigBee/ IEEE 802.15.4 based wireless sensor networks.Supervised by Professor: Edward Soukessov.'}
                         /> 

                         <Education
                           startYear={2012}
                           endYear={2014}
                           city={'Gomel'}
                           country={'Belarus'}
                           schoolName={'Gomel State University, Francisk Skorina'}
                           schoolDescription={'O’ Level/Russian Language Certificate'} 
                         />

                         <Education
                           startYear={2009}
                           endYear={2011}
                           city={'Bucharest'}
                           country={'Romania'}
                           schoolName={'Politehnica University of Bucharest'}
                           schoolDescription={"O' level in Computer Science"} 
                         />
                         <hr style={{borderTop: '3px solid #12c2e9'}} />

                         <h3>Skills</h3>

                         <Skills
                           skill='HTML/CSS'
                           progress={85} 
                         />

                         <Skills
                           skill='JavaScript'
                           progress={50} 
                         />

                         <Skills
                           skill='React'
                           progress={50} 
                         />

                         <Skills
                           skill='Bootstrap'
                           progress={70} 
                         />

                         <Skills
                           skill='Computer systems'
                           progress={90}
                           />
                         
                         <hr style={{borderTop: '3px solid #12c2e9'}} />

                          <h3>Experience</h3>

                         <Experience
                           startYear={2018}
                           endYear={'Present'}
                           companyName={'PCCCZ Nigeria Company LTD'}
                           jobDescription={'Systems Manager'}
                         />
                          
                          <hr style={{borderTop: '3px solid #12c2e9'}} />

                          <h3>Certificate</h3>
                          <Certificate 
                            certificateYear={2018}
                            certificateName={'Certificate of Achievement'}
                            detail={'Certificate of Achievement for Academic performance in bachelor’s Degree program,Kharkiv National University of Radio electronics, Ukraine'}
                          />

                          <Certificate 
                            certificateYear={2019}
                            certificateName={'NYSC Discharge Certificate'}
                            detail={'Batch 19A, Certificate of National Service'}
                          />
                    </Cell>
                </Grid>
            </div>
         );
    }
}
 
export default Resume;