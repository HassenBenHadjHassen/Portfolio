import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    username: "", // honeypot field
  });

  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState(false);
  const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(null);

  // Reset form and states
  const resetForm = () => {
    setFormData({ name: "", email: "", message: "", username: "" });
    setError(null);
    setIsLoading(false);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Rate limiting check - 60 seconds between submissions
    const now = Date.now();
    if (lastSubmissionTime && now - lastSubmissionTime < 60000) {
      setError('Please wait 60 seconds before submitting another message');
      return;
    }

    // Spam check - if honeypot field is filled, silently reject
    if (formData.username) {
      setSuccess(true); // Fake success to fool bots
      return;
    }

    setIsLoading(true);
    setError(null);

    try {
      if (!formData.email.includes('@')) {
        throw new Error('Please enter a valid email address');
      }

      await fetch("https://formspree.io/f/xdkaqnbk", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });
      
      setSuccess(true);
      setLastSubmissionTime(now);
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unexpected error occurred');
      setIsLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Container fluid className="home-about-section">
      <Container>
        <Row>
          <Col md={12} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              GET IN <span className="purple">TOUCH</span>
            </h1>
            
            {error && (
              <Alert variant="danger" onClose={() => setError(null)} dismissible>
                {error}
              </Alert>
            )}
            
            {success && (
              <Alert variant="success" onClose={() => setSuccess(false)} dismissible>
                Thank you for your message!
              </Alert>
            )}

            <Form onSubmit={handleSubmit} className="contact-form">
              {/* Enhanced honeypot field */}
              <div className="visually-hidden" aria-hidden="true">
                <Form.Control
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  autoComplete="off"
                  tabIndex={-1}
                />
                <label htmlFor="username">Leave this field empty</label>
              </div>

              <Form.Group className="mb-3">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "1.7px solid rgba(200, 137, 230, 0.637)",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "1.7px solid rgba(200, 137, 230, 0.637)",
                  }}
                />
              </Form.Group>

              <Form.Group className="mb-3">
                <Form.Control
                  as="textarea"
                  name="message"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  style={{
                    backgroundColor: "transparent",
                    color: "white",
                    border: "1.7px solid rgba(200, 137, 230, 0.637)",
                  }}
                />
              </Form.Group>

              <div className="d-flex justify-content-between align-items-center mt-3">
                <Button
                  variant="primary"
                  type="submit"
                  style={{
                    fontSize: "1.1em",
                  }}
                  className="btn-primary"
                  disabled={isLoading}
                >
                  {isLoading ? 'Sending...' : 'Send Message'}
                </Button>

                <Button
                  variant="secondary"
                  type="button"
                  onClick={resetForm}
                  style={{
                    fontSize: "1.1em",
                  }}
                >
                  Clear Form
                </Button>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;
