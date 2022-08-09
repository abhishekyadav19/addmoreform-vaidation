import { Button, Card, CardContent, Checkbox, FormControl, FormControlLabel, Grid, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useEffect, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import "./login.scss"
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { Link } from 'react-router-dom';
import "./loginform.scss"
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormik } from 'formik'
import * as Yup from "yup";
import BgImage from "./signup.jpg"
import { loadCaptchaEnginge, LoadCanvasTemplate, LoadCanvasTemplateNoReload, validateCaptcha } from 'react-simple-captcha'


const SignUp = () => {
    const [isVerified, setIsVerified] = useState(false)
  
    const [values, setValues] = useState({
        password: '',
        showPassword: false,
        showcPassword: false,

    });
    const handleClickShowPassword = () => {
        setValues({
            ...values,
            showPassword: !values.showPassword,
            showcPassword: !values.showcPassword,

        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };



    // captcha verification by button disbaled 
    const handlecaptcha = () => {
        setIsVerified(!isVerified)
    }
    const formik = useFormik({
        initialValues: {
            fname: "",
            lname: "",
            pnumber: "",
            email: "",
            password: "",
            cpassword: "",
            check1: false
        },
        validationSchema: Yup.object({
            fname: Yup.string()
                .max(15, '*Must be 15 characters or less')
                .required('*First Name is Required'),
            lname: Yup.string()
                .max(15, '*Must be 15 characters or less')
                .required('*Last Name is Required'),
            pnumber: Yup.string().required("*Phone Number is required"),
            email: Yup.string().required("*Email is required").email("*Invalid Email"),
            password: Yup.string().required('*No password provided.').min(8, '*Password is too short - should be 8 chars minimum.'),
            cpassword: Yup.string().oneOf([Yup.ref('password'), null], 'Passwords must match'),
            check1: Yup
                .bool()
                .oneOf([true], 'You need to accept the terms and conditions'),
        }),
        onSubmit: values => {
            console.log(values);
        },
    })
    const submitted = () => {
        let user_captcha = document.getElementById('user_captcha_input').value;

        if (validateCaptcha(user_captcha) === true) {
            alert('Captcha Matched');
            loadCaptchaEnginge(6);
            document.getElementById('user_captcha_input').value = "";
        }

        else {
            alert('Captcha Does Not Match');
            document.getElementById('user_captcha_input').value = "";
        }
    }
    useEffect(() => {
        loadCaptchaEnginge(6);

    }, [])

    return (
        <>
            <div className="bx">
                <div className="form-bx">
                    <div className='left_bx_signup'>
                        <img src={BgImage} alt="background image" />
                    </div>

                    <div className={`right_bx_signup ${formik.errors ? "overflowsscl" : ""} `}>
                        <form onSubmit={formik.handleSubmit}>
                            <CardContent>
                                <h1 style={{ marginBottom: ".5rem", marginTop: "0rem" }}>Ragister</h1>
                                <h4>Manage all you expectations</h4>
                                <p>Lets get you can verify your personal account and begin setting up your profile </p>
                                <Grid container spacing={1}>
                                    <Grid item md={6} xs={12}>
                                        <FormControl fullWidth style={{ marginBottom: "1rem" }}>
                                            <TextField
                                                type="text"
                                                label="First Name"
                                                name='fname'
                                                {...formik.getFieldProps('fname')}

                                            />
                                            {formik.touched.fname && formik.errors.fname ? (
                                                <div className='error'>{formik.errors.fname}</div>
                                            ) : null}
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <FormControl fullWidth style={{ marginBottom: "1rem" }}>
                                            <TextField
                                                type="text"
                                                label="Last Name"
                                                name='lname'
                                                {...formik.getFieldProps('lname')}

                                            />
                                            {formik.touched.lname && formik.errors.lname ? (
                                                <div className='error'>{formik.errors.lname}</div>
                                            ) : null}
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <FormControl fullWidth style={{ marginBottom: "1rem" }}>
                                            <TextField
                                                type="number"
                                                label="Phone Number"
                                                name='pnumber'
                                                {...formik.getFieldProps('pnumber')}
                                            />
                                            {formik.touched.pnumber && formik.errors.pnumber ? (
                                                <div className='error'>{formik.errors.pnumber}</div>
                                            ) : null}
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <FormControl fullWidth style={{ marginBottom: "1rem" }}>
                                            <TextField
                                                type="email"
                                                label="Email"
                                                name='email'
                                                {...formik.getFieldProps('email')}
                                            />
                                            {formik.touched.email && formik.errors.email ? (
                                                <div className='error'>{formik.errors.email}</div>
                                            ) : null}
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <FormControl sx={{ width: '100%' }} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={values.showPassword ? 'text' : 'password'}
                                                {...formik.getFieldProps('password')}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            // onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {values.showPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Password"
                                            />
                                            {formik.touched.password && formik.errors.password ? (
                                                <div className='error'>{formik.errors.password}</div>
                                            ) : null}
                                        </FormControl>
                                    </Grid>
                                    <Grid item md={6} xs={12}>
                                        <FormControl sx={{ width: '100%' }} variant="outlined">
                                            <InputLabel htmlFor="outlined-adornment-password">Confirm Password</InputLabel>
                                            <OutlinedInput
                                                id="outlined-adornment-password"
                                                type={values.showcPassword ? 'text' : 'password'}
                                                name="cpassword"
                                                {...formik.getFieldProps('cpassword')}
                                                endAdornment={
                                                    <InputAdornment position="end">
                                                        <IconButton
                                                            aria-label="toggle password visibility"
                                                            onClick={handleClickShowPassword}
                                                            // onMouseDown={handleMouseDownPassword}
                                                            edge="end"
                                                        >
                                                            {values.showcPassword ? <VisibilityOff /> : <Visibility />}
                                                        </IconButton>
                                                    </InputAdornment>
                                                }
                                                label="Confirm Password"
                                            />
                                            {formik.touched.cpassword && formik.errors.cpassword ? (
                                                <div className='error'>{formik.errors.cpassword}</div>
                                            ) : null}
                                        </FormControl>
                                    </Grid>

                                </Grid>

                                <div className='checkbxs'>
                                    <div>
                                        <FormControlLabel control={<Checkbox
                                        />} label="Yes, I want to receive notifications" />
                                    </div>
                                    <FormControlLabel control={<Checkbox name='check1' {...formik.getFieldProps('check1')} />} label="I agree to all terms and conditions" />
                                    {formik.touched.check1 && formik.errors.check1 ? (
                                        <div className='error'>{formik.errors.check1}</div>
                                    ) : null}
                                </div>

                                {/* <div style={{ marginBottom: "2rem" }}>
                                    <ReCAPTCHA
                                        // sitekey="6Lch41chAAAAAKVxdEpW-Z_UEbQkrJSF-1bYo3A_"
                                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                        onChange={handlecaptcha}
                                    />
                                </div> */}


                                {/* captcha number  */}
                                <Grid container>
                                    <Grid item md={7}>
                                        <div className="captcha-number" style={{ marginBottom: "2rem", padding: "12px", backgroundColor: "#ddd8d8",borderRadius:"6px" }}>
                                            <div style={{ marginBottom: ".5rem" }}>
                                                <LoadCanvasTemplate />
                                            </div>
                                            <FormControl style={{ marginBottom: "1rem" }}>
                                                <TextField
                                                    type="text"
                                                    name='user_captcha_input'
                                                    placeholder="Enter Captcha Value"
                                                    id="user_captcha_input"
                                                    size='small'
                                                    style={{ backgroundColor: "#ffffff" }}
                                                />
                                            </FormControl>
                                            <div  >
                                                <Button onClick={submitted} variant="contained" color="success" type="submit" size='small'>Submit</Button>
                                            </div>
                                        </div>
                                    </Grid>
                                </Grid>

                                <div style={{ display: "flex", justifyContent: "center", marginBottom: "1rem" }} >
                                    <Button variant="outlined" id='submt' type="submit" size='large'>Signup</Button>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <span>Already have an account ? <Link to="/">Login</Link></span>
                                </div>
                            </CardContent>
                        </form>

                    </div>


                </div>
            </div>
        </>

    )
}
// disabled={!isVerified}
export default SignUp