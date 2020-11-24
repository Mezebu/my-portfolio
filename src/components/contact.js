import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';


class Contact extends Component {
    render() { 
        return ( 
            <div className='contact-body' id='primary'>
               <Grid className='contact-grid'>
                   <Cell col={6}>
                       <h2>Ezeigwe Henry</h2>
                       <img 
                         src='https://cdn.dribbble.com/users/736825/screenshots/6483816/cloudinary_800x600-01.jpg'
                         alt='profile-pic'
                         
                       />
                   </Cell>
                   <Cell col={6}>
                       <h2>Contact Me</h2>
                       <hr/>
                       <div className='contact-list'>
                       <List>
                           {/* Phone number */}
                         <ListItem>
                            <ListItemContent className='contact-list-content'>
                                <i className='fa fa-phone-square' aria-hidden='true'/>
                                   09038233089
                                </ListItemContent>
                         </ListItem>
                            {/* Email */}
                         <ListItem>
                            <ListItemContent className='contact-list-content'>
                            <a href='mailto:mezebu07@gmail.com' rel='noreferrer noopener' target='_blank'>
                                 <i class="fa fa-envelope-square" aria-hidden='true' />
                                 Email
                                 </a>
                                </ListItemContent>
                         </ListItem>
                              {/* Twitter */}
                         <ListItem>
                            <ListItemContent className='contact-list-content'>
                            <a href='https://twitter.com/Mezebu' rel='noreferrer noopener' target='_blank'>
                                 <i class="fa fa-twitter-square" aria-hidden='true' />
                                 Twitter
                                 </a>
                                </ListItemContent>
                         </ListItem>
                               {/* Whatsappp */}
                         <ListItem>
                            <ListItemContent className='contact-list-content'>
                            <a href='https://wa.me/+2349038233089' rel='noreferrer noopener' target='_blank'>
                             <i class="fa fa-whatsapp" aria-hidden='true'></i>
                                 WhatsApp
                                 </a>
                                </ListItemContent>
                         </ListItem>
                               {/* Telegram */}
                               <ListItem>
                            <ListItemContent className='contact-list-content'>
                            <a href='https://t.me/Mezebu' rel='noreferrer noopener' target='_blank'>
                             <i class="fa fa-telegram" aria-hidden='true'></i>
                                 Telegram
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