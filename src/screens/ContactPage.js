import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { db } from "../firebase/config";
import ButtonLoader from "../comps/loader";
import cogoToast from "cogo-toast";
import "../styles/contact.css";

const ContactPage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !email || !number || !message) {
      cogoToast.error("Please fill out all the fields", {
        position: "top-right",
        hideAfter: 6,
      });
      setLoading(false);
    } else {
      await db
        .collection("contact")
        .where("email", "==", email)
        .get()
        .then((snap) => {
          if (snap.empty) {
            db.collection("contact")
              .add({
                name,
                email,
                number,
                message,
              })
              .then(() => {
                cogoToast.success("Message has been submitted 👍", {
                  position: "top-right",
                  hideAfter: 5,
                });
                setLoading(false);
                setName("");
                setEmail("");
                setNumber("");
                setMessage("");
              })
              .catch((error) => {
                cogoToast.error(error.message, {
                  position: "top-right",
                  hideAfter: 5,
                });
                setLoading(false);
              });
          } else {
            cogoToast.warn(
              "You already submitted, Please wait for our response",
              {
                position: "top-right",
                hideAfter: 5,
              }
            );
            setLoading(false);
            setName("");
            setEmail("");
            setNumber("");
            setMessage("");
          }
        })
        .catch((err) => {
          cogoToast.error(err);
        });
    }
    setName("");
    setEmail("");
    setNumber("");
    setMessage("");
  };

  return (
    <Container>
      <Row>
        <Col className="text-center">
          <div className="contact">
            <h1>Contact Us</h1>
            <span>______</span>
          </div>
        </Col>
      </Row>
      <Row className="contact-row">
        <Col
          className="text-center contact-l"
          xs={12}
          sm={12}
          md={12}
          lg={6}
          xl={6}
        >
          <h3>Fill Out The Form Below</h3>
          <form onSubmit={submitHandler}>
            <input
              className="contact-form"
              type="text"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <input
              className="contact-form"
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <input
              className="contact-form"
              type="tel"
              placeholder="Phone Number"
              value={number}
              onChange={(e) => setNumber(e.target.value)}
            ></input>
            <textarea
              className="contact-form-textarea"
              cols="30"
              rows="5"
              placeholder="What do you need?(Comments)"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
            <br />
            {loading ? (
              <ButtonLoader />
            ) : (
              <button className="contact-form-btn" type="submit">
                Submit
              </button>
            )}
          </form>
        </Col>
        <Col className="contact-r" xs={12} sm={12} md={12} lg={6} xl={6}>
          <div className="mt-5">
            <h4>CONTACT DETAILS</h4>
            <span>________</span>
            <p>
              Phone & Email +324-123-45-978 <br />
              supportteam@wireman.com
            </p>
          </div>
          <div>
            <h4>Working Hours</h4>
            <span>________</span>
            <p>
              Mon - Satday: 9.00am to 6.00pm <br />
              Sunday: Holiday
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default ContactPage;
