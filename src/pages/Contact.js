import React from "react";
import { useState } from "react";

import emailjs from "@emailjs/browser";
import styled from "styled-components";

const Result = () => {
  return (
    <p>Your message has been successfully sent. I will contact you soon.</p>
  );
};

const Contact = () => {
  const [result, showResult] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_qfjl0xj",
        "template_k9wy4w4",
        e.target,
        "L0RmJWJoyWicOgPKZ"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
    showResult(true);
  };

  // hide result
  setTimeout(() => {
    showResult(false);
  }, 5000);

  return (
    <div>
      <h1>Tell me about your ideas</h1>
      <ContactWrapper>
        {/* left contact page */}
        <FormHorizontal onSubmit={sendEmail}>
          <FormControl
            type="text"
            id="name"
            placeholder="Name"
            name="name"
            required
          />
          <FormControl
            type="text"
            id="email"
            placeholder="Email"
            name="email"
            required
          />
          <Message
            rows="10"
            placeholder="Message"
            name="message"
            required
          ></Message>
          <SendButton id="submit" type="submit" value="send">
            Send
          </SendButton>
        </FormHorizontal>

        {/* Right side */}
        <DirectContactContainer>
          <ContactList>
            <li>Paris, France</li>
            <li>+33 06 15 00 22 11</li>
            <li>hitmeuo@gmail.com</li>
          </ContactList>
          <hr />
          <SocialMediaList>
            <li>Linkedin</li>
            <li>GitHub</li>
            <li>Insta</li>
          </SocialMediaList>
          <hr />
          <CopyRight>&copy; ALL OF THE RIGHTS RESERVED</CopyRight>
        </DirectContactContainer>
      </ContactWrapper>
      <div>{result ? <Result /> : null}</div>
    </div>
  );
};

const ContactWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  position: relative;
  margin: 0 auto;
  padding: 20px;
  max-width: 840px;
  color: #aaa;
`;

const FormHorizontal = styled.form`
  display: flex;
  flex-direction: column;
  width: 50vw;
  padding: 20px;
`;

const DirectContactContainer = styled.div`
  width: 50vw;
  padding: 20px;
`;

const FormControl = styled.input`
  background-color: transparent;
  border-color: white;
  border-radius: 5px;
  border-width: 1.5px;
  padding: 10px;
  margin: 10px 0px;
  color: #aaa;
`;

const Message = styled.textarea`
  background-color: transparent;
  border-color: white;
  border-radius: 5px;
  border-width: 1.5px;
  color: #aaa;
`;

const SendButton = styled.button`
  margin-top: 15px;
  height: 34px;
  background-color: transparent;
  border-color: white;
  border-radius: 5px;
  border-width: 1.5px;
  color: #aaa;
`;

const ContactList = styled.ul`
  list-style-type: none;
  li {
    padding: 15px;
  }
`;

const SocialMediaList = styled.ul`
  display: flex;
  justify-content: center;
  list-style-type: none;
  li {
    padding: 10px;
  }
`;

const CopyRight = styled.div`
  letter-spacing: 1px;
  text-align: center;
  padding-top: 10px;
  font-size: 10px;
`;

export default Contact;
