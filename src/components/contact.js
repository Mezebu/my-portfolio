import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() { 
        return ( 
            <div className='contact-body'>
               <Grid className='contact-grid'>
                   <Cell col={6}>
                       <h2>Ezeigwe Henry</h2>
                       <img 
                         src='https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png'
                         alt='profile-pic'
                         style={{height: '250px'}}
                       />
                   </Cell>
                   <Cell col={6}>
                       <h2>Contact Me</h2>
                       <hr/>
                       <div className='contact-list'>
                       <List>
                         <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'lato'}}>
                                <i className='fa fa-phone-square' aria-hidden='true'/>
                                   09038233089
                                </ListItemContent>
                         </ListItem>
                         
                         <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'lato'}}>
                            <a href='mailto:mezebu07@gmail.com' rel='noreferrer noopener' target='_blank'>
                                 <i class="fa fa-envelope-square" aria-hidden='true' />
                                 Email
                                 </a>
                                </ListItemContent>
                         </ListItem>

                         <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'lato'}}>
                            <a href='https://twitter.com/Mezebu' rel='noreferrer noopener' target='_blank'>
                                 <i class="fa fa-twitter-square" aria-hidden='true' />
                                 Twitter
                                 </a>
                                </ListItemContent>
                         </ListItem>

                         <ListItem>
                            <ListItemContent style={{fontSize: '30px', fontFamily: 'lato'}}>
                            <a href='https://wa.me/+2349038233089' rel='noreferrer noopener' target='_blank'>
                             <i class="fa fa-whatsapp" aria-hidden='true'></i>
                                 WhatsApp
                                 </a>
                                </ListItemContent>
                         </ListItem>

                       </List>
                       </div>
                   </Cell>
                   </Grid> 
            </div>
            
         );
    }
}
 
export default Contact;