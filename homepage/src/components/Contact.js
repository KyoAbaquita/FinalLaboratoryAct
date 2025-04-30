import React, { useState } from 'react';

const Contact = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
    };

    const handleReset = () => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
    };

    return (
        <div className="container py-5">
            <div className="row justify-content-center">
                <div className="col-md-8 col-lg-6">
                    {submitted ? (
                        <div className="text-center">
                            <h1 className="text-success">Thank you, {formData.name}!</h1>
                            <p>Your message has been sent.</p>
                            <p><strong>Email:</strong> {formData.email}</p>
                            <p><strong>Message:</strong> {formData.message}</p>
                            <button onClick={handleReset} className="btn btn-primary mt-3">
                                Send Another Message
                            </button>
                        </div>
                    ) : (
                        <form onSubmit={handleSubmit} className="bg-light p-4 rounded shadow-sm">
                            <h2 className="text-center text-success mb-4">Contact Us</h2>

                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">Name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="email" className="form-label">Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    className="form-control"
                                    required
                                />
                            </div>

                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">Message</label>
                                <textarea
                                    name="message"
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="form-control"
                                    rows="4"
                                    required
                                />
                            </div>

                            <button type="submit" className="btn btn-success w-100">Submit</button>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Contact;
