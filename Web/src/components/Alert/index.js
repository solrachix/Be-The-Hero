import React from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Call it once in your app. At the root of your app is the best place
toast.configure({
  position: "top-right",
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
})


// import { Container } from './styles';

const Alert = ({ 
  type = null,
  position = "top_end",
  message = "Notification"
}) => {

  toast(message, {
    type: type,
    position: toast.POSITION[position],
  });

  // return (
  // );
}

export default Alert;