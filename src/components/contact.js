import React from 'react'
import { Formik } from 'formik';


function Contact() {
    return (
        <React.Fragment>
            <section className="commom-section contact-form-wrapper">
                <div className="container">
                    <div className="heading-section contact">
                        <h2>Get in Touch</h2>
                        <p>Although I'm not currently looking for freelance opportunities, my inbox is always open. Whether for a potential project or just to say hi, I'll try my best to answer your email!</p>
                    </div>
                    <div className="form-wrapper">
                    <Formik
                        initialValues={{ email: '', name: '', contact : '', message : '' }}
                        validate={values => {
                            const errors = {};
                            if (!values.name) {
                                errors.name = 'Required';
                            }
                            else if(!values.email){
                                errors.email = 'Required'
                            } 
                            else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)){
                                errors.email = 'Invalid email address';
                            }
                            else if(!values.message){
                                errors.message = 'Required'
                            }
                            return errors;
                        }}
                        onSubmit={(values, { setSubmitting }) => {
                            setTimeout(() => {
                            alert(JSON.stringify(values, null, 2));
                            setSubmitting(false);
                            }, 400);
                        }}
                        >
                        {({
                            values,
                            errors,
                            touched,
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            isSubmitting,
                            /* and other goodies */
                        }) => (
                            <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Email</label>
                                <input
                                    type="email"
                                    name="email"
                                    className="form-control"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <span>{errors.email && touched.email && errors.email}</span>
                            </div>
                            <div className="form-group">
                                <label>Name</label>
                                <input
                                    type="text"
                                    className="form-control"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                               <span>{errors.name && touched.name && errors.name}</span> 
                            </div>
                            <div className="form-group">
                                <label>Contact No</label>
                                <input
                                    type="text"
                                    name="number"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    className="form-control"
                                    value={values.number}
                                />
                                {errors.number && touched.number && errors.number}
                            </div>
                            <div className="form-group">
                                <label>Message</label>
                                <input
                                    type="text"
                                    name="message"
                                    onChange={handleChange}
                                    className="form-control"
                                    onBlur={handleBlur}
                                    value={values.message}
                                />
                                {errors.message && touched.message && errors.message}
                            </div>
                            <button type="submit" disabled={isSubmitting}>
                                Submit
                            </button>
                            </form>
                        )}
                    </Formik>
                    </div>  
                </div>
            </section>
        </React.Fragment>
    )
}

export default Contact
