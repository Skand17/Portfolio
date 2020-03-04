import React from 'react';
import axios from 'axios'
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import swal from 'sweetalert'
import { CustomTextareaComponent, CustomInputComponent} from "../Utils/Input"
import { Button , FormGroup, Container} from 'reactstrap';
  
  const GetInTouch = () => {
    const submitForm = (values,{setSubmitting}) => {
        let obj = {
          "Name" : values.name,
          "Email" : values.email,
          "Contact Number" : values.number,
          "Message" : values.message
      }
      axios.post(
          "https://formcarry.com/s/6_NRXcLovqmX", 
          obj, 
          {headers: {"Accept": "application/json"}}
        )
        .then(function (response) {
            setSubmitting(false)
            swal({
                  title : "Thanks for your query. We'll get back to you soon",
                  icon : "success",
                  buttons: true
            })
        })
        .catch(function (error) {
            setSubmitting(false)
        });
    }

    return (
      <Formik
        initialValues={{ name: '', number: '', email: '', message: '' }}
        validationSchema={Yup.object({
            name: Yup.string().max(15, 'Must be 15 characters or less').required('Required'),
            number: Yup.string().max(20, 'Must be 20 characters or less').required('Required'),
            email: Yup.string().email('Invalid email address').required('Required'),
            message : Yup.string().max(20, 'INvalid').required('Required'),
        })}
        onSubmit={(values, { setSubmitting }) => {
          submitForm(values,{setSubmitting})
        }}
      >
      {({
        isSubmitting,
      }) => (
        <Container>
            <div className="form-container">
              <h2>Have any query ?</h2>
              <span className="inner-text">I've got your back !! </span>
                <Form>
                  <FormGroup>
                    <label htmlFor="name">Name</label>
                      <Field className="form-control" component={CustomInputComponent} name="name" type="text" />
                  </FormGroup>
                  <FormGroup>
                      <label htmlFor="number">Phone number</label>
                      <Field className="form-control" component={CustomInputComponent} name="number" type="text" />
                  </FormGroup>
                  <FormGroup>
                      <label htmlFor="email">Email Address</label>
                      <Field className="form-control"component={CustomInputComponent}  name="email" type="email" />
                  </FormGroup>
                  <FormGroup>
                      <label htmlFor="message">Message</label>
                      <Field className="form-control" component={CustomTextareaComponent} name="message" />
                  </FormGroup>
                    <Button color="primary" type="submit" disabled={isSubmitting}>{isSubmitting ? "Submitting..." : "Submit"}</Button>
                </Form>
            </div>
        </Container>
      )}
      </Formik>
    );
  };;

  export default GetInTouch