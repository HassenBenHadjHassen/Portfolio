import React, { useState, useCallback, useEffect } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import {
	GoogleReCaptchaProvider,
	useGoogleReCaptcha,
} from "react-google-recaptcha-v3";

interface FormData {
	name: string;
	email: string;
	message: string;
	username: string; // honeypot field
}

interface FormErrors {
	name?: string;
	email?: string;
	message?: string;
}

// Contact form component that uses reCAPTCHA
function ContactForm() {
	const { executeRecaptcha } = useGoogleReCaptcha();
	const { t } = useTranslation();
	const [formData, setFormData] = useState<FormData>({
		name: "",
		email: "",
		message: "",
		username: "", // honeypot field
	});

	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState<string | null>(null);
	const [success, setSuccess] = useState(false);
	const [formErrors, setFormErrors] = useState<FormErrors>({});
	const [lastSubmissionTime, setLastSubmissionTime] = useState<number | null>(
		null
	);

	// Auto-dismiss success message after 5 seconds
	useEffect(() => {
		if (success) {
			const timer = setTimeout(() => {
				setSuccess(false);
			}, 5000);
			return () => clearTimeout(timer);
		}
	}, [success]);

	// Input sanitization function
	const sanitizeInput = (input: string): string => {
		return input
			.trim()
			.replace(/[<>]/g, "") // Remove potential HTML tags
			.replace(/javascript:/gi, "") // Remove javascript: protocol
			.replace(/on\w+=/gi, ""); // Remove event handlers
	};

	// Email validation function
	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	// Form validation function
	const validateForm = (): boolean => {
		const errors: FormErrors = {};
		let isValid = true;

		// Name validation
		if (!formData.name.trim()) {
			errors.name = t("contact.form.errors.nameRequired");
			isValid = false;
		} else if (formData.name.trim().length < 2) {
			errors.name = t("contact.form.errors.nameMinLength");
			isValid = false;
		} else if (formData.name.trim().length > 50) {
			errors.name = t("contact.form.errors.nameMaxLength");
			isValid = false;
		}

		// Email validation
		if (!formData.email.trim()) {
			errors.email = t("contact.form.errors.emailRequired");
			isValid = false;
		} else if (!validateEmail(formData.email)) {
			errors.email = t("contact.form.errors.emailInvalid");
			isValid = false;
		}

		// Message validation
		if (!formData.message.trim()) {
			errors.message = t("contact.form.errors.messageRequired");
			isValid = false;
		} else if (formData.message.trim().length < 10) {
			errors.message = t("contact.form.errors.messageMinLength");
			isValid = false;
		} else if (formData.message.trim().length > 1000) {
			errors.message = t("contact.form.errors.messageMaxLength");
			isValid = false;
		}

		setFormErrors(errors);
		return isValid;
	};

	// Reset form and states
	const resetForm = useCallback(() => {
		setFormData({ name: "", email: "", message: "", username: "" });
		setError(null);
		setFormErrors({});
		setIsLoading(false);
		setSuccess(false);
	}, []);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Clear previous errors
		setError(null);
		setFormErrors({});

		// Rate limiting check - 60 seconds between submissions
		const now = Date.now();
		if (lastSubmissionTime && now - lastSubmissionTime < 60000) {
			setError(t("contact.form.errors.rateLimit"));
			return;
		}

		// Spam check - if honeypot field is filled, silently reject
		if (formData.username) {
			setSuccess(true); // Fake success to fool bots
			return;
		}

		// Validate form
		if (!validateForm()) {
			return;
		}

		// Check if reCAPTCHA is available
		if (!executeRecaptcha) {
			setError(t("contact.form.errors.recaptchaError"));
			return;
		}

		setIsLoading(true);

		try {
			// Execute reCAPTCHA
			const recaptchaToken = await executeRecaptcha("contact_form");

			// Sanitize inputs before sending
			const sanitizedData = {
				name: sanitizeInput(formData.name),
				email: sanitizeInput(formData.email),
				message: sanitizeInput(formData.message),
				"g-recaptcha-response": recaptchaToken, // Add reCAPTCHA token
			};

			const response = await fetch("https://formspree.io/f/xdkaqnbk", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(sanitizedData),
			});

			if (!response.ok) {
				if (response.status === 429) {
					throw new Error(t("contact.form.errors.tooManyRequests"));
				} else if (response.status >= 500) {
					throw new Error(t("contact.form.errors.serverError"));
				} else if (response.status === 400) {
					throw new Error(t("contact.form.errors.invalidData"));
				} else {
					throw new Error(t("contact.form.errors.sendError"));
				}
			}

			setSuccess(true);
			setLastSubmissionTime(now);
			resetForm();
		} catch (err) {
			setError(
				err instanceof Error
					? err.message
					: t("contact.form.errors.unexpectedError")
			);
		} finally {
			setIsLoading(false);
		}
	};

	const handleChange = useCallback(
		(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
			const { name, value } = e.target;
			setFormData((prev) => ({
				...prev,
				[name]: value,
			}));

			// Clear field-specific error when user starts typing
			if (formErrors[name as keyof FormErrors]) {
				setFormErrors((prev) => ({
					...prev,
					[name]: undefined,
				}));
			}
		},
		[formErrors]
	);

	return (
		<Container fluid className="home-about-section" id="contact">
			<Container>
				<Row>
					<Col md={12} className="home-about-description">
						<h2 style={{ fontSize: "2.6em" }}>
							{t("contact.title")
								.split(" ")
								.map((word, index) =>
									word === "TOUCH" || word === "CONTACT" ? (
										<span key={`contact-${index}`} className="purple">
											{" "}
											{word}
										</span>
									) : (
										`${word} `
									)
								)}
						</h2>

						{error && (
							<Alert
								variant="danger"
								onClose={() => setError(null)}
								dismissible
								role="alert"
								aria-live="assertive"
							>
								<strong>{t("common.error")}:</strong> {error}
							</Alert>
						)}

						{success && (
							<Alert
								variant="success"
								onClose={() => setSuccess(false)}
								dismissible
								role="alert"
								aria-live="polite"
							>
								<strong>{t("common.success")}</strong>{" "}
								{t("contact.form.successMessage")}
							</Alert>
						)}

						<Form onSubmit={handleSubmit} className="contact-form" noValidate>
							{/* Enhanced honeypot field */}
							<div className="visually-hidden" aria-hidden="true">
								<Form.Control
									type="text"
									name="username"
									id="username"
									value={formData.username}
									onChange={handleChange}
									autoComplete="off"
									tabIndex={-1}
								/>
								<label htmlFor="username">Leave this field empty</label>
							</div>

							<Form.Group className="mb-3">
								<Form.Label htmlFor="name" className="visually-hidden">
									{t("contact.form.name")}
								</Form.Label>
								<Form.Control
									type="text"
									name="name"
									id="name"
									placeholder={t("contact.form.name")}
									value={formData.name}
									onChange={handleChange}
									required
									aria-describedby={formErrors.name ? "name-error" : undefined}
									aria-invalid={!!formErrors.name}
									style={{
										backgroundColor: "transparent",
										color: "white",
										border: formErrors.name
											? "1.7px solid #dc3545"
											: "1.7px solid rgba(200, 137, 230, 0.637)",
									}}
								/>
								{formErrors.name && (
									<Form.Text id="name-error" className="text-danger">
										{formErrors.name}
									</Form.Text>
								)}
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label htmlFor="email" className="visually-hidden">
									{t("contact.form.email")}
								</Form.Label>
								<Form.Control
									type="email"
									name="email"
									id="email"
									placeholder={t("contact.form.email")}
									value={formData.email}
									onChange={handleChange}
									required
									aria-describedby={
										formErrors.email ? "email-error" : undefined
									}
									aria-invalid={!!formErrors.email}
									style={{
										backgroundColor: "transparent",
										color: "white",
										border: formErrors.email
											? "1.7px solid #dc3545"
											: "1.7px solid rgba(200, 137, 230, 0.637)",
									}}
								/>
								{formErrors.email && (
									<Form.Text id="email-error" className="text-danger">
										{formErrors.email}
									</Form.Text>
								)}
							</Form.Group>

							<Form.Group className="mb-3">
								<Form.Label htmlFor="message" className="visually-hidden">
									{t("contact.form.message")}
								</Form.Label>
								<Form.Control
									as="textarea"
									name="message"
									id="message"
									placeholder={t("contact.form.message")}
									value={formData.message}
									onChange={handleChange}
									required
									rows={4}
									aria-describedby={
										formErrors.message ? "message-error" : undefined
									}
									aria-invalid={!!formErrors.message}
									style={{
										backgroundColor: "transparent",
										color: "white",
										border: formErrors.message
											? "1.7px solid #dc3545"
											: "1.7px solid rgba(200, 137, 230, 0.637)",
									}}
								/>
								{formErrors.message && (
									<Form.Text id="message-error" className="text-danger">
										{formErrors.message}
									</Form.Text>
								)}
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
									aria-describedby="submit-help"
								>
									{isLoading ? (
										<>
											<span
												className="spinner-border spinner-border-sm me-2"
												aria-hidden="true"
											></span>{" "}
											{t("contact.form.sendingButton")}
										</>
									) : (
										t("contact.form.sendButton")
									)}
								</Button>

								<Button
									variant="secondary"
									type="button"
									onClick={resetForm}
									disabled={isLoading}
									style={{
										fontSize: "1.1em",
									}}
									aria-label="Clear all form fields"
								>
									{t("contact.form.clearButton")}
								</Button>
							</div>

							<div
								id="submit-help"
								className="small text-light mt-2"
								style={{ opacity: 0.8 }}
							>
								{isLoading
									? t("contact.form.sendingText")
									: t("contact.form.helpText")}
							</div>
						</Form>
					</Col>
				</Row>
			</Container>
		</Container>
	);
}

function Contact() {
	const recaptchaSiteKey = "6LegUb0rAAAAAAsxEmAoVqu4Zk1Nbx9XuKE_k-Dl";

	return (
		<GoogleReCaptchaProvider
			reCaptchaKey={recaptchaSiteKey}
			scriptProps={{
				async: false,
				defer: false,
				appendTo: "head",
				nonce: undefined,
			}}
		>
			<ContactForm />
		</GoogleReCaptchaProvider>
	);
}

export default Contact;
