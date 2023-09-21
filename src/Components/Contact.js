import React from 'react';
import '../Styles/Contact.css'

const Contact = () => {
  return (
    <div>
        <h1 className='title-contact'>Contact</h1>
        <p className='entry-content'>Any queries please contact to <strong className='gmail-strong'>ibommamoviecom@gmail.com</strong></p>
        <h2 className='support-header'><strong>SUPPORT :</strong></h2>
        <p className='entry-content-p'>To avoid your message being marked as spam .Please kindly provide us with following details and send us a support mail.Thank you for the cooperation </p>
        <div className='paragraph'>
        <p>Movie Name:?</p>
        <p>Geo Location(Country):?</p>
        <p>URL:?</p>
        <p>ISP(Internet Service Provider)?</p>
        <p>Error</p>
        </div>
    </div>

  )
}

export default Contact