import * as React from 'react';
import Modal from '@mui/material/Modal';

import classes from './Login.module.scss'
import LoginForm from './LoginForm';


const Login = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);





  return (
    <div className={classes.wrapper}>
      <div className={classes.button} onClick={handleOpen}>Login</div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <>
          <LoginForm />
        </>
      </Modal>
    </div>
  );
};

export default Login;
