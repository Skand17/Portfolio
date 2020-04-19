import React from 'react'
import { Formik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'


function Contact() {

    toast.configure()

    function submitForm(values,setSubmitting, resetForm){
        setSubmitting(true)
        axios.post('https://formcarry.com/s/6_NRXcLovqmX', values).then( (res) => {
            resetForm()
            const notify = () => toast.success(res.data.message,{
                position: toast.POSITION.TOP_CENTER
            });
            setSubmitting(false)
            notify()
        }).catch( (err) =>{
            const notify = () => toast.success(err,{
                position: toast.POSITION.TOP_CENTER
            });
            notify()
            setSubmitting(false)
        })
    }


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
                        initialValues={{ email: '', name: '', number : '', message : '' }}
                        validationSchema={
                            Yup.object({
                                email: Yup.string().email().required('Required'),
                                name: Yup.string().required('Required'),
                                message: Yup.string().required('Required')
                            })
                        }
                        onSubmit={(values, { setSubmitting, resetForm }) => {
                            submitForm(values, setSubmitting,resetForm)
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
                                <div className="row">
                                        <div className="col-md-6 col-sm-6 col-xs-12">
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
                                            <span className="error">{errors.name && touched.name && errors.name}</span> 
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-sm-6 col-xs-12">
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
                                                <span className="error">{errors.email && touched.email && errors.email}</span>
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-xs-12">
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
                                            </div>
                                        </div>
                                        <div className="col-md-12 col-sm-12 col-xs-12">
                                                                                        
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
                                            <span className="error">{errors.message && touched.message && errors.message}</span>
                                        </div>
                                        </div>
                                </div>
                            <button className="btn submit-btn" type="submit" disabled={isSubmitting}>
                                {isSubmitting ? 'Submitting...' : 'Submit'}
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
