import React, { useState } from 'react';
import Modal from 'react-modal';
import './PageCSS/Contact.scss'
import emailjs from 'emailjs-com';
import Exit from '../Assets/Misc/exit.svg'
import GreenCheck from '../Assets/Misc/greenCheckMark.svg'
import Linkedin from '../Assets/Footer/linkedinBlackBG.svg'
import Twitter from '../Assets/Footer/twitterBlackBG.svg'

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)',
      width                 : '250px',
      height                : '180px',
      textAlign             : 'center',
      display               : 'flex',
      flexDirection         : 'column',
      justifyContent        : 'center',
      alignItems             : 'center',
    }
};

export default function Contact(){
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [nameErrorState, setNameErrorState] = useState(false);
    const [emailErrorState, setEmailErrorState] = useState(false);
    const [messageErrorState, setMessageErrorState] = useState(false);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [serverError, setServerError] = useState(false)
    
    const sendEmail = (e) => {
        e.preventDefault();
        reset()

        if(name && !email && !message){
            setEmailErrorState(true)
            setMessageErrorState(true)
        } else if(!name && email && !message ){
            setNameErrorState(true)
            setMessageErrorState(true)
        } else if(!name && !email && message ){
            setNameErrorState(true)
            setEmailErrorState(true)
        } else if(!name && email && message){
            setNameErrorState(true)
        } else if(name && !email && message){
            setEmailErrorState(true)
        } else if(name && email && !message){
            setMessageErrorState(true)
        } else if(!name && !email && !message){
            setNameErrorState(true)
            setMessageErrorState(true)
            setEmailErrorState(true)
        } else if(name && email && message){
            let templateParam = {
                'name': name, 
                'email': email, 
                'message': message, 
            }

            emailjs.send(`${process.env.REACT_APP_EMAILJS_SERVICE_ID}`, 'template_t4o8lgg', templateParam, `${process.env.REACT_APP_EMAILJS_USERID}`)
            .then((result) => {
                setModalIsOpen(true)
            }, (error) => {
                setServerError(true)
            });
            window.scrollTo(0, 0)
            e.target.reset();
        }        
    }

    const reset = () => {
        setEmailErrorState(false)
        setNameErrorState(false)
        setMessageErrorState(false)
    }

    const closeModal = () => {
        setModalIsOpen(false)
    }

    return(
        <div className='form'>
            { serverError ? 
            <div className='form__serverError'>
                <p className="margin">Unfortunately there was an error in submitting your message. Please refresh and try again.</p>
                <img className='form__exitImg' src={Exit} onClick={()=>{setServerError(false)}}/>
            </div>
            :
            null}
            
            <div className='form__container'>
                <h1 className='form__header' >Contact</h1>
                <p className='form__title'>Copy about how you’re open to people contacting you via twitter, linked in or use the form below.</p>
                <div className='form__imgIcon'>
                    <img src={Linkedin} className='form__imgIcon__icon'/>
                    <img src={Twitter} className='form__imgIcon__icon'/>
                </div>
            </div>
            <form className="form__contact" onSubmit={sendEmail}>
                <div className='form__details'>
                    <label className='form__label'>Your Name:</label>
                    <input type="text" name="name" className={nameErrorState ? 'form__input-error' : 'form__input'} onChange={(e)=>{setName(e.target.value)}} />
                    { nameErrorState ? <div className='form__error'>*Please  fill in this field</div> : null }
                </div>
                <div className='form__details'>
                    <label className='form__label'>Your Email Address:</label>
                    <input type="text" name="email" className={emailErrorState ? 'form__input-error' : 'form__input'} onChange={(e)=>{setEmail(e.target.value)}} />
                    { emailErrorState ? <div className='form__error'>*Please  fill in this field</div> : null }
                </div>
                <div className='form__details'>
                    <label className='form__label'>Message:</label>
                    <textarea name="message" className={messageErrorState ? 'form__text-error' : 'form__text'} onChange={(e)=>{setMessage(e.target.value)}}/>
                    { messageErrorState ? <div className='form__error'>*Please  fill in this field</div> : null }
                </div>
                <input type="submit" value="Send" className='form__button' />
            </form>
            <Modal
            isOpen={modalIsOpen}
            // onAfterOpen={afterOpenModal}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Example Modal"
            >
                <img className='check' src={GreenCheck}/>
                <p>You have successfully sent the message to Queenie.</p>
                <button className='btn' onClick={closeModal}>Return to Contact</button>
            </Modal>
        </div>
    )

}