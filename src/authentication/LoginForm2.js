import { Button, Card, CardContent, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import "./loginform.scss"
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import ImageBack from "./login.jpg"
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik'
import * as Yup from "yup";

const validationSchemas = Yup.object().shape({
    condidates: Yup.array().of(
        Yup.object().shape({
            fname: Yup.string().required("This Field is required"),
            email: Yup.string().required("This Field is required").email("invalid email"),
            password: Yup.string().required("This Field is required"),
            address: Yup.string().required("This Field is required")
        })
    )
})


const LoginForm2 = () => {
    const [isVerified, setIsVerified] = useState(false)

    const handlecaptcha = () => {
        setIsVerified(!isVerified)
    }

    return (
        <>
            <Formik
                initialValues={{
                    condidates: [{ fname: "", email: "", password: "", address: "" }],
                }}
                validationSchema={validationSchemas}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {
                    (formik) => (
                        <Form>
                            <div className="bx">
                                <div className="form-bx">
                                    <div className='left_bx'>
                                        <h1 style={{ textAlign: "center", marginBottom: "2rem", marginTop: "0rem" }}>Contact Form</h1>
                                        <FieldArray name="condidates" render={
                                            (arrayHelpers) => {
                                                return <div>
                                                    {formik.values.condidates.map((condidate, i) => (
                                                        <>
                                                            <Card style={{ marginBottom: "1rem", border: "1px solid #cbc5c5", padding: "1rem", position: "relative" }} key={i}>
                                                                <CardContent>

                                                                    <div className='mb-rem'>
                                                                        <Field
                                                                            className="form-control"
                                                                            type="text"
                                                                            label="name"
                                                                            name={`condidates.${i}.fname`}

                                                                        />

                                                                        <ErrorMessage component='span' className='field_error' name={`condidates.${i}.fname`} />
                                                                    </div>
                                                                    <div className='mb-rem'>
                                                                        <Field
                                                                            className="form-control"
                                                                            type="email"
                                                                            label="email"
                                                                            name={`condidates.${i}.email`}

                                                                        />
                                                                        <ErrorMessage component="span" className='field_error' name={`condidates.${i}.email`} />
                                                                    </div>
                                                                    <div className='mb-rem'>
                                                                        <Field
                                                                            className="form-control"
                                                                            type="password"
                                                                            label="password"
                                                                            name={`condidates.${i}.password`}

                                                                        />
                                                                        <ErrorMessage component='span' className='field_error' name={`condidates.${i}.password`} />
                                                                    </div>
                                                                    <div className='mb-rem'>
                                                                        <Field
                                                                            className="form-control"
                                                                            type="text"
                                                                            label="Address"
                                                                            name={`condidates.${i}.address`}

                                                                        />
                                                                        <ErrorMessage component='span' className='field_error' name={`condidates.${i}.address`} />
                                                                    </div>
                                                                    {
                                                                        i ?
                                                                            (<IconButton className="close-icon" onClick={() => arrayHelpers.remove(i)}>
                                                                                <CancelRoundedIcon />
                                                                            </IconButton>) : ""
                                                                    }


                                                                </CardContent>
                                                            </Card>
                                                        </>
                                                    ))}
                                                    <div style={{ display: "flex", justifyContent: "end" }}>
                                                        <Button onClick={() => arrayHelpers.insert(formik.values.condidates.length + 1, { fname: "", email: "", password: "", address: "" })}>+Add More</Button>
                                                    </div>
                                                </div>
                                            }
                                        }
                                        />
                                        <div style={{ marginBottom: "2rem" }}>
                                            <ReCAPTCHA
                                                sitekey={process.env.REACT_APP_SITE_KEY}
                                                onChange={handlecaptcha}
                                            />
                                        </div>
                                        <div style={{ display: "flex", justifyContent: "center" }} >
                                            <Button disabled={!isVerified} variant="outlined" id='submt' type="submit" size="large">Submit</Button>
                                        </div>
                                    </div>
                                    <div className='right_bx'>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    )
                }
            </Formik>

        </>

    )
}
export default LoginForm2