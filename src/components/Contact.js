import React, { useState, useEffect } from "react";

const Contact = () => {
  let [contact, setContact] = useState({
    email: "",
    subject: "",
    message: "",
  });

  

  let [errors, setError] = useState({
    emailError: "",
    subjectError: "",
    messageError: "",
  });

  let onChange123 = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
  
  };

  let onChange1 = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value,
    });
    if (contact[e.target.name].length <= 1) {
      setError({
        ...errors,
        subjectError: "Subject is required",
      });
    } 
    
    
    

    else {
      setError({
        ...errors,
        subjectError: "",
      });
    }
  
  };

  let validate = () => {
    console.log("cvaljon", contact.email);

    if (!contact.email.length < 1 || contact.email == "") {
      setError({
        ...errors,
        emailError: "Email is required",
      });
    }

    if (!contact.subject || contact.subject == "") {
      setError({
        ...errors,
        subjectError: "Subject is required",
      });
    }

    if (!contact.message || contact.message == "") {
      errors.message = "Message is required";
    }
  };

  let submit = () => {
    validate();
    console.log("con", contact);
  };

  useEffect(() => {
    console.log(contact);
  }, [contact]);

  return (
    <div>
      <h1>Contact</h1>
      <div>
        <div>
          <label>Email</label>
          <input type="text" onChange={onChange123} name="email" />
          <div>
            <span style={{ color: "red" }}>{errors.emailError}</span>
          </div>
        </div>
        <div>
          <label>Subject</label>
          <input type="text" onChange={onChange1} name="subject" />
          <div>
            <span style={{ color: "red" }}>{errors.subjectError}</span>
          </div>
        </div>
        <div>
          <label>Message</label>
          <input type="text" name="message" onChange={onChange1} />
          <div>
            <span style={{ color: "red" }}>{errors.emailError}</span>
          </div>
        </div>
        <button
          onClick={submit}
          disabled={
            contact.email === "" ||
            contact.subject === "" ||
            contact.message === ""
          }
        >
          Submit
        </button>
      </div>
    </div>
  );
};


export default Contact;
