import { Button, Card, CardContent, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import "./loginform.css"
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import ImageBack from "./login.jpg"

const LoginForm = () => {
    const [formerrors, setFormErrors] = useState([{}])
    const [isVerified, setIsVerified] = useState(false)
    const [inputss, setInputss] = useState([{
        fname: "",
        email: "",
        password: "",
        address: ""
    }])
    const handleChange = (e, i) => {
        let newdata = [...inputss]
        newdata[i][e.target.name] = e.target.value
        setInputss(newdata)
    }

    const addmore = () => {
        setInputss([...inputss, { fname: "", email: "", password: "", address: "" }])
    }

    const removeFiled = (i) => {
        let newvalues = [...inputss]
        newvalues.splice(i, 1)
        setInputss(newvalues)
    }
    const onsubmitted = (e) => {
        e.preventDeafult()
        setFormErrors(validate(inputss))
    }
    console.log(inputss);

    // validatation starts 
    const validate = (values) => {
        const errors = {};
        if (!values.fname) {

        }
    }

    const handlecaptcha = () => {
        setIsVerified(!isVerified)
    }
    return (
        <>
            <div className="bx">
                <div className="form-bx">
                    <div className='left_bx'>
                        <h1 style={{ textAlign: "center", marginBottom: "2rem", marginTop: "0rem" }}>Contact Form</h1>
                        {
                            inputss.map((element, i) =>
                            (
                                <Card style={{ marginBottom: "1rem", border: "1px solid #cbc5c5", padding: "1rem", position: "relative" }} key={i}>
                                    <CardContent>
                                        <form onSubmit={onsubmitted}>
                                            <TextField
                                                type="text"
                                                required
                                                label="name"
                                                name='fname'
                                                onChange={(e) => handleChange(e, i)}
                                                value={element.fname}

                                            />
                                            <TextField
                                                type="email"
                                                required
                                                label="email"
                                                name='email'
                                                onChange={(e) => handleChange(e, i)}
                                                value={element.email}
                                            />
                                            <TextField
                                                type="password"
                                                required
                                                label="password"
                                                name='password'
                                                onChange={(e) => handleChange(e, i)}
                                                value={element.password}
                                            />
                                            <TextField
                                                type="text"
                                                required
                                                label="Address"
                                                name='address'
                                                value={element.address}
                                                onChange={(e) => handleChange(e, i)}
                                            />
                                        </form>
                                        {
                                            i ? (
                                                <IconButton className="close-icon" onClick={() => removeFiled(i)}>
                                                    <CancelRoundedIcon />
                                                </IconButton>
                                            ) : ""
                                        }

                                    </CardContent>
                                </Card>
                            ))
                        }
                        <div style={{ display: "flex", justifyContent: "end" }}>
                            <Button onClick={addmore}>+Add More</Button>
                        </div>
                        <div style={{ marginBottom: "2rem" }}>
                            <ReCAPTCHA
                                sitekey={process.env.REACT_APP_SITE_KEY}
                                onChange={handlecaptcha}
                            />
                        </div>

                        <div style={{ display: "flex", justifyContent: "center" }} >
                            <Button disabled={!isVerified} variant="outlined" type="submit" style={{ width: "40%" }} size="large">Submit</Button>
                        </div>
                    </div>
                    <div className='right_bx'>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LoginForm