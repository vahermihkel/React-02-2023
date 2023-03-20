import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

function ContactUs() {
  // const form = useRef();
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();

  const sendEmail = () => {
    // e.preventDefault();
    const data = {
      "from_name": nameRef.current.value,
      "from_email": emailRef.current.value,
      "message": messageRef.current.value
    }

    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', data, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div>
      <label>Name</label>
      <input type="text" ref={nameRef} />
      <label>Email</label>
      <input type="email" ref={emailRef} />
      <label>Message</label>
      <textarea name="message" ref={messageRef} />
      <button onClick={sendEmail}>Send</button>
    </div>
  );
};

export default ContactUs;