import { Button, Card, CardContent, IconButton, TextField } from '@mui/material'
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
// import "./loginform.scss"
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
        e.preventDefault()
        setInputss(validate(inputss))
    }
    console.log(inputss);

    // captcha verification by button disbaled 
    const handlecaptcha = () => {
        setIsVerified(!isVerified)
    }   

    // validatation starts 
    const validate = (values) => {
        const errors = {};
        values.map((item, i) => {
            if (item.fname === "") {
                alert("clicked")
            } else {
                alert("all is wel")
                setInputss()
            }
        })

    }


    return (
        <>
            <div className="bx">
                <div className="form-bx">
                    <div className='left_bx'>
                        <form onSubmit={onsubmitted}>
                            <h1 style={{ textAlign: "center", marginBottom: "2rem", marginTop: "0rem" }}>Contact Form</h1>
                            {
                                inputss.map((element, i) =>
                                (
                                    <Card style={{ marginBottom: "1rem", border: "1px solid #cbc5c5", padding: "1rem", position: "relative" }} key={i}>
                                        <CardContent>

                                            <TextField
                                                type="text"
                                                label="name"
                                                name='fname'
                                                onChange={(e) => handleChange(e, i)}
                                                value={element.fname}

                                            />
                                            <TextField
                                                type="email"
                                                label="email"
                                                name='email'
                                                onChange={(e) => handleChange(e, i)}
                                                value={element.email}
                                            />
                                            <TextField
                                                type="password"
                                                label="password"
                                                name='password'
                                                onChange={(e) => handleChange(e, i)}
                                                value={element.password}
                                            />
                                            <TextField
                                                type="text"
                                                label="Address"
                                                name='address'
                                                value={element.address}
                                                onChange={(e) => handleChange(e, i)}
                                            />

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
                                <Button variant="outlined" id='submt' type="submit" size="large">Submit</Button>
                            </div>
                        </form>

                    </div>

                    <div className='right_bx'>
                    </div>

                </div>
            </div>
        </>

    )
}
// disabled={!isVerified}
export default LoginForm