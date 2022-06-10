import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, InputAdornment, TextField, Typography, makeStyles, Paper, OutlinedInput, FormControl, IconButton } from '@material-ui/core';
// import logo from '../../assets/logo.png';
const useStyles = makeStyles((theme) => ({
    backgroundLogin: {
        //   backgroundImage: `url(${backgroundLogin})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: '100%'
    },
    paperForm: {
        paddingRight: '15px',
        paddingLeft: '15px',
        marginRight: 'auto',
        marginLeft: 'auto',
        marginTop: '15px',
        marginTop: 'auto',
        marginBottom: '15px',
        marginBottom: 'auto'
    },
    sizePaper: {
        width: '495px',
        height: '597px',
        padding: '50px 80px 50px 80px',
        margin: '100px auto',
    },
    input: {
        borderRadius: '48px',
        width: '495px',
        background: '#F7FAFB',
    },
    img: {
        width: '208px ',
        height: '52px',
        marginLeft: '50px'

    },
    title: {
        fontWeight: '600',
        fontSize: '24px',
        lineHeight: '33px',
        padding: '15px 0 20px 0',
        //   color:blackColorTitle
    },
    label: {
        //   color:blackColorTitle,
        fontWeight: '700',
        paddingBottom: '10px'
    },
    button: {
        //   background:primaryButtonColor,
        borderRadius: '40px',
        color: '#fff',
        height: '48px'
    },
    IconButton: {

    }
}))
const LoginPage = () => {
    const classes = useStyles();

    return (
        <section className={classes.backgroundLogin}>
            <div className={classes.paperForm}  >
                <Paper className={classes.sizePaper} >
                    <div>
                        {/* <img
                className={classes.img}
                src={logo}
                alt="logo"
              /> */}
                    </div>
                    <br />
                    <Typography className={classes.title}>Đăng Nhập</Typography>
                    <form
                    // onSubmit={handleSubmit(onSubmit)}
                    >
                        <Grid container spacing={4}>
                            <Grid item md={12} xs={12}>
                                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                                    <Typography className={classes.label}>
                                        Điện thoại
                                    </Typography>
                                    <OutlinedInput
                                        // {...register('phone')}

                                        className={classes.input}
                                        placeholder="Điện thoại"
                                    />

                                </FormControl>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <FormControl variant="outlined">
                                    <Typography className={classes.label}>
                                        Mật khẩu
                                    </Typography>
                                    <OutlinedInput

                                        //   {...register('password')}

                                        className={classes.input}
                                        placeholder="Mật khẩu"
                                        //   type={values.showPassword ? 'text' : 'password'}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    // onClick={handleClickShowPassword}
                                                    // onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    className={classes.IconButton}
                                                >
                                                    {/* {values.showPassword ? <Visibility />  :<VisibilityOff /> } */}
                                                </IconButton>
                                            </InputAdornment>

                                        }

                                    />

                                </FormControl>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <Typography >
                                    <a style={{
                                        cursor: 'pointer',
                                        textDecoration: 'none',
                                        color: '#0b6aaf'
                                    }}
                                    //   onClick={() => history.push('/reset-password')}
                                    >Quên mật khẩu?
                                    </a>
                                </Typography>
                            </Grid>
                            <Grid item md={12} xs={12}>
                                <Button type="submit" fullWidth variant="contained" className={classes.button}>ĐĂNG NHẬP</Button>
                            </Grid>
                        </Grid>


                    </form>
                </Paper>

            </div>
        </section>
    );
};


LoginPage.propTypes = {

};


export default LoginPage;
