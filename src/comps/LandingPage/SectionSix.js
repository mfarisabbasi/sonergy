import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Aos from "aos";
import { db } from "../../firebase/config";
import ButtonLoader from "../loader";
import cogoToast from "cogo-toast";
import "../../styles/LandingPage/section6.css";
import "aos/dist/aos.css";

const SectionSix = () => {
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
        .collection("appointments")
        .where("email", "==", email)
        .get()
        .then((snap) => {
          if (snap.empty) {
            db.collection("appointments")
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

  useEffect(() => {
    Aos.init({});
  }, []);
  return (
    <Container data-aos-duration="1000" data-aos="fade">
      <div className="section6">
        <Row>
          <Col className="text-center">
            <h1>
              <span>Schedule</span> Appointment
            </h1>
            <span>____</span>
          </Col>
        </Row>
        <Row className="mt-5">
          <Col className="text-center" xs={12} sm={12} md={12} lg={12} xl={12}>
            <form onSubmit={submitHandler}>
              <input
                type="text"
                placeholder="Full Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <br />
              <input
                type="email"
                placeholder="Valid Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <input
                type="tel"
                placeholder="Phone Number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              ></input>
              <br />
              <textarea
                placeholder="Your Message"
                cols="30"
                rows="5"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
              <br />
              {loading ? (
                <ButtonLoader />
              ) : (
                <button className="section6-btn" type="submit">
                  Submit
                </button>
              )}
            </form>
          </Col>
        </Row>
      </div>
      <hr />
    </Container>
  );
};

export default SectionSix;
