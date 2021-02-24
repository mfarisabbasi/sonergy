import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { motion } from "framer-motion";
import { db } from "../firebase/config";
import ButtonLoader, { QuoteFormLoader } from "../comps/loader";
import cogoToast from "cogo-toast";
import "../styles/quote-form.css";

const QuoteForm = ({ setShowForm }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [number, setNumber] = useState("");
  const [story, setStory] = useState("");
  const [size, setSize] = useState("");
  const [loading, setLoading] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setLoading(true);
    if (!name || !email || !number || !story || !size) {
      cogoToast.error("Please fill out all the fields", {
        position: "top-center",
        hideAfter: 6,
      });
      setLoading(false);
    } else {
      await db
        .collection("getaquote")
        .where("email", "==", email)
        .get()
        .then((snap) => {
          if (snap.empty) {
            db.collection("getaquote")
              .add({
                name,
                email,
                number,
                story,
                size,
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
                setStory("");
                setSize("");
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
            setStory("");
            setSize("");
          }
        })
        .catch((err) => {
          cogoToast.error(err);
        });
    }
    setName("");
    setEmail("");
    setNumber("");
    setStory("");
    setSize("");
  };

  return (
    <Container>
      <motion.div
        className="quote-form"
        initial={{
          opacity: 0,
        }}
        animate={{ opacity: 1 }}
        transition={{ ease: "linear", duration: 0.4 }}
        exit={{
          opacity: 0,
        }}
      >
        <Row>
          <Col className="text-center">
            <form onSubmit={submitHandler}>
              <div
                onClick={() => setShowForm(false)}
                className="quote-form-close"
              >
                <i className="fa fa-times fa-3x"></i>
              </div>
              <h2>Get A Free Quote</h2>
              <input
                className="quote-form-input"
                type="text"
                placeholder="Name (required)"
                value={name}
                onChange={(e) => setName(e.target.value)}
              ></input>
              <br />
              <input
                className="quote-form-input"
                type="email"
                placeholder="Email (required)"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
              <br />
              <input
                className="quote-form-input"
                type="tel"
                placeholder="Phone Number (required)"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
              ></input>
              <br />
              <select
                placeholder="Story"
                value={story}
                onChange={(e) => setStory(e.target.value)}
              >
                <option value="">Select Story (required)</option>
                <option value="singlestory">Single Story</option>
                <option value="doublestory">Double Story</option>
              </select>
              <select
                placeholder="System Size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              >
                <option value="">Select Size (required)</option>
                <option value="6.6kw">6.6kw</option>
                <option value="9.9kw">9.9kw</option>
              </select>
              <br />
              {loading ? (
                <QuoteFormLoader />
              ) : (
                <button className="quote-form-btn" type="submit">
                  Get A Free Quote
                </button>
              )}
            </form>
          </Col>
        </Row>
      </motion.div>
    </Container>
  );
};

export default QuoteForm;
