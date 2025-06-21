import { useEffect, useState } from "react";
import classes from "./contact-form.module.css";
import Notification from "../ui/notification";

async function sendContactData(contactDetails) {

  const response = await fetch("/api/contact", {
    method: "POST",
    body: JSON.stringify(contactDetails),
    headers: {
      'Content-Type': 'application/json'
    }
  });

  const data = response.json();

  if (!response.ok) {
    throw new Error(data.message || 'Something went wrong')
  }

}

function ContactForm() {
  const [formData, setFormData] = useState({
    email: "",
    name: "",
    message: "",
  });

  const [requestStatus, setRequestStatus] = useState();


  useEffect(() => {
    if (requestStatus === 'success' || requestStatus === 'error') {
      const timer = setTimeout(() => {
        setRequestStatus(null)
      }, 3000)

      return () => {
        clearTimeout(timer)
      }
    }
  }, [requestStatus])

  async function sendMessageHandler(event) {
    const { email, name, message } = formData;

    event.preventDefault();

    setRequestStatus('pending');

    try {
      await sendContactData({ email, name, message })
      setRequestStatus('success')
      setFormData({ email: '', message: '', name: '' })
    } catch (error) {
      setRequestStatus('error')
    }

  }

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  const { email, name, message } = formData;

  let notification;

  if (requestStatus === 'pending') {
    notification = {
      status: 'pending',
      title: 'Sending message....',
      message: 'Your message is on the way...'
    }
  }

  if (requestStatus === 'success') {
    notification = {
      status: 'success',
      title: 'Success',
      message: 'Your message saved successfully'
    }
  }

  if (requestStatus === 'error') {
    notification = {
      status: 'error',
      title: 'Error',
      message: 'Your message failed to saved'
    }
  }

  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={sendMessageHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input
              id="email"
              type="email"
              name="email"
              required
              value={email}
              onChange={changeHandler}
            />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input
              id="name"
              type="text"
              name="name"
              required
              value={name}
              onChange={changeHandler}
            />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea
            id="message"
            rows="5"
            required
            name="message"
            value={message}
            onChange={changeHandler}
          ></textarea>
        </div>
        <div className={classes.actions}>
          <button>Send Message</button>
        </div>
      </form>
      {requestStatus && <Notification {...notification} />}
    </section>
  );
}

export default ContactForm;