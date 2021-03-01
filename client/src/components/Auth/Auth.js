import React from 'react';
import { useDispatch } from 'react-redux';
import { Avatar, Button, Paper, Container } from '@material-ui/core';
import { useHistory } from 'react-router-dom';
import { GoogleLogin } from 'react-google-login';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

import { AUTH } from '../../constants/actionTypes';
import useStyles from './styles';

const SignUp = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const classes = useStyles();

  const googleSuccess = async (res) => {
    const result = res?.profileObj;
    const token = res?.tokenId;

    try {
      dispatch({ type: AUTH, data: { result, token } });

      history.push('/');
    } catch (error) {
      console.log(error);
    }
  };

  const googleError = () => alert('Google Sign In was unsuccessful. Try again later');

  return (
    <Container component="main" maxWidth="xs">
      <Paper className={classes.paper} elevation={3}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <GoogleLogin
          clientId="652701912513-pv5dj0d90t56skjglvvstdqeg3hg7h1i.apps.googleusercontent.com"
          render={(renderProps) => (
            <Button className={classes.googleButton} color="primary" fullWidth onClick={renderProps.onClick} disabled={renderProps.disabled} variant="contained">
              Google Sign In
            </Button>
          )}
          onSuccess={googleSuccess}
          onFailure={googleError}
          cookiePolicy="single_host_origin"
        />
      </Paper>
    </Container>
  );
};

export default SignUp;