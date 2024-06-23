import React from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {BsWhatsapp} from 'react-icons/bs'
import {FiPhone} from 'react-icons/fi'
import emailjs from 'emailjs-com'
import { useRef } from 'react'

const Contact = () => {
  const form=useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_9mxzpvt', 'template_jx01iks', form.current, 'Qhwrkmq7xLtcxVUc1');
    e.target.reset();
      
  };


  return (
    <section id='contact'>
      <h2> CONTACT</h2>
        <div className="container contact_container">
          <div className="contact_options">
            <article className="contact__option">
              <AiOutlineMail/>
              <h4>Email</h4>
              <h5>abasan10.ab@gmail.com</h5>
              <a href='mailto:abasan10.ab@gmail.com' target="_blank">Send a Email</a>
            </article>
            <article className="contact__option">
              <BsWhatsapp/>
              <h4>WhatsApp</h4>
              <h5>0450221236</h5>
              <a href='https://web.whatsapp.com/+61-450221236' target="_blank">Send a Message</a>
            </article>
            <article className="contact__option">
              <FiPhone/>
              <h4>Phone Number</h4>
              <h5>0450221236</h5>
              <a >Call</a>
            </article>
          </div>
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name='name' placeholder='Your Fullname' required ></input>   
            <input type="email" name='email' placeholder='Your Email'required />
            <textarea type='message' rows='7' placeholder='Your Message' required/>
            <button type='submit' className='btn btn-primary'>Send Message</button>
          </form>
        </div>

    </section>
  )
}

export default Contact