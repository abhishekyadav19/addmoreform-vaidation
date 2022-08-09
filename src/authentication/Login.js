import { Button, Card, CardContent, Checkbox, FormControl, FormControlLabel, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React, { useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import "./login.scss"
import CancelRoundedIcon from '@mui/icons-material/CancelRounded';
import { Link } from 'react-router-dom';
import "./loginform.scss"
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { useFormik } from 'formik'
import * as Yup from "yup";

const Login = () => {
    const [isVerified, setIsVerified] = useState(false)

    const handleChange = (e, i) => {
        // let newdata = [...inputss]
        // newdata[i][e.target.name] = e.target.value
        // setInputss(newdata)
    }





    // captcha verification by button disbaled 
    const handlecaptcha = () => {
        setIsVerified(!isVerified)
    }

    // eye icon password show hide 
    const [values, setValues] = React.useState({
        password: '',
        showPassword: false,

    });
    const handleClickShowPassword = () => {
        setValues({
            showPassword: !values.showPassword,
        });
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };


    const formik = useFormik({
        initialValues: {
            username: "",
            password: ""
        },
        validationSchema: Yup.object({
            username: Yup.string()
                .max(15, '*Must be 15 characters or less')
                .required('*User Name is Required'),
            password: Yup.string().required('*No password provided.').min(8, '*Password is too short - should be 8 chars minimum.')

        }),
        onSubmit: values => {
            console.log(values);
        },
    })
    return (
        <>
            <div className="bx">
                <div className="form-bx">
                    <div className='right_bx'>
                    </div>

                    <div className='left_bx'>
                        <form onSubmit={formik.handleSubmit}>
                            <CardContent>
                                <h1 style={{ textAlign: "center", marginBottom: "2rem", marginTop: "0rem" }}>Sign In</h1>
                                <h4>Login to your account</h4>
                                <p>Thank you for get back to appventurez ,lets acces our the best recommendations for you </p>
                                <FormControl fullWidth style={{ marginBottom: "1rem" }}>
                                    <TextField
                                        type="text"
                                        label="Email or Phone Number"
                                        name='username'
                                        {...formik.getFieldProps('username')}
                                    />
                                    {formik.touched.username && formik.errors.username ? (
                                        <div className='error'>{formik.errors.username}</div>
                                    ) : null}
                                </FormControl>
                                <FormControl sx={{ width: '100%' }} variant="outlined">
                                    <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                                    <OutlinedInput
                                        id="outlined-adornment-password"
                                        type={values.showPassword ? 'text' : 'password'}
                                        name="password"
                                        {...formik.getFieldProps('password')}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
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


                                <div className='checkbox-reset'>
                                    <FormControlLabel control={<Checkbox />} label="Remember Me" />

                                    <div>
                                        <Link to="" underline="hover">
                                            Reset Password
                                        </Link>
                                    </div>
                                </div>
                                <div style={{ marginBottom: "2rem" }}>
                                    <ReCAPTCHA
                                        // sitekey="6Lch41chAAAAAKVxdEpW-Z_UEbQkrJSF-1bYo3A_"
                                        sitekey="6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"
                                        onChange={handlecaptcha}
                                    />
                                </div>

                                <div style={{ display: "flex", justifyContent: "center", marginBottom: "2rem" }} >                                  
                                    <Button  disabled={!isVerified} variant="outlined" id='submt' type="submit" size="large">Sign In</Button>
                                </div>
                                <div style={{ display: "flex", justifyContent: "center" }}>
                                    <span>Don't have an account yet ? <Link to="/signup">Join</Link></span>
                                </div>
                            </CardContent>
                        </form>

                    </div>
                </div>
            </div>
        </>

    )
}
export default Login