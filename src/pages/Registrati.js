import { useState, useContext } from "react";
import {
  Grid,
  TextField,
  Button,
  Typography,
  makeStyles,
  Paper,
  MenuItem,
  Input,
} from "@material-ui/core";
import axios from "axios";
import { Navigate } from "react-router-dom";
import ChipInput from "material-ui-chip-input";
import DescriptionIcon from "@material-ui/icons/Description";
import FaceIcon from "@material-ui/icons/Face";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/material.css";
import '../assets/stylePages/registrati.css';
import PasswordInput from "../components/PasswordInput";
import EmailInput from "../components/EmailInput";
import FileUploadInput from "../components/FileUploadInput";
import { SetPopupContext } from "../App";
import successImage from '../assets/images/fireworks 1.png';
import apiList from "../components/apiList";
import isAuth from "../components/isAuth";
import { Redirect } from "react-router-dom";
import { HeaderCandidatoWhite } from "../components/Header";

const useStyles = makeStyles((theme) => ({
  inputBox: {
    width: "400px",
    backgroundColor: "white",
                fontFamily: 'Comfortaa, cursive',
                borderRadius: '15px',
                color: 'black',
                border: 'none',
                marginBottom: '20px',
  },
}));

const Registrati = (props) => {
  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);

  const [isRegistrationComplete, setIsRegistrationComplete] = useState(false);

  const [loggedin, setLoggedin] = useState(isAuth());

  const [signupDetails, setSignupDetails] = useState({
    email: "",
    password: "",
    nome: "",
    cognome: "",
    city: "",
    role: "worker",
  });

const [numero, setPhone] = useState("")


  const [inputErrorHandler, setInputErrorHandler] = useState({
    email: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
    password: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
    name: {
      untouched: true,
      required: true,
      error: false,
      message: "",
    },
  });

  const handleInput = (key, value) => {
    setSignupDetails({
      ...signupDetails,
      [key]: value,
    });
  };

  const handleInputError = (key, status, message) => {
    setInputErrorHandler({
      ...inputErrorHandler,
      [key]: {
        required: true,
        untouched: false,
        error: status,
        message: message,
      },
    });
  };

  const handleLogin = () => {
    const tmpErrorHandler = {};
    Object.keys(inputErrorHandler).forEach((obj) => {
      if (inputErrorHandler[obj].required && inputErrorHandler[obj].untouched) {
        tmpErrorHandler[obj] = {
          required: true,
          untouched: false,
          error: true,
          message: `${obj[0].toUpperCase() + obj.substr(1)} is required`,
        };
      } else {
        tmpErrorHandler[obj] = inputErrorHandler[obj];
      }
    });

    let updatedDetails = {
      ...signupDetails,
         numero,
    };

    setSignupDetails(updatedDetails);
    console.log(updatedDetails);

    const verified = !Object.keys(tmpErrorHandler).some((obj) => {
      return tmpErrorHandler[obj].error;
    });

    if (verified) {
      axios
        .post(apiList.signup, updatedDetails)
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          localStorage.setItem("role", response.data.role);
          setLoggedin(isAuth());
          setPopup({
            open: true,
            severity: "success",
            message: "Logged in successfully",
          });
          setIsRegistrationComplete(true);
          console.log(response.data.token);
          console.log(response.data.role);
        })
        .catch((err) => {
          setPopup({
            open: true,
            severity: "error",
            message: err.message,
          });
          console.log(err);
        });
    } else {
      setInputErrorHandler(tmpErrorHandler);
      setPopup({
        open: true,
        severity: "error",
        message: "Incorrect Input",
      });
    }
  };

  const handleNext = (e) => {
    e.preventDefault();
    setIsRegistrationComplete(true);
  }

  return (
    <div className={isRegistrationComplete ? "dark-overlay" : "registrati"}>
    <HeaderCandidatoWhite />
      <Grid container direction="column" spacing={4} alignItems="center" className="main-registrati-azienda">
        <Grid className="auth-text">
          <h2>Crea il tuo account</h2>
          <p>Sei già registrato? 
            <span>
              <a href="/accedi">Log in</a>
            </span>
          </p>
        </Grid>
        <Grid container direction="row" spacing={4} className="registrati-input-container">
          <Grid item>
            <TextField
              label="Nome"
              value={signupDetails.nome}
              onChange={(event) => handleInput("nome", event.target.value)}
              error={inputErrorHandler.name.error}
              helperText={inputErrorHandler.name.message}
              onBlur={(event) => {
                if (event.target.value === "") {
                  handleInputError("name", true, "Name is required");
                } else {
                  handleInputError("name", false, "");
                }
              }}
              variant="outlined"
              style={{
                backgroundColor: "white",
                fontFamily: 'Comfortaa, cursive',
                borderRadius: '15px',
                color: 'black',
                border: 'none',
                marginBottom: '20px',
                width: '400px'
              }}
              InputProps={{
                  style: {
                      color: "black"
                  }
              }}
            />
          </Grid>
          <Grid item>
            <TextField
              label="Cognome"
              value={signupDetails.cognome}
              onChange={(event) => handleInput("cognome", event.target.value)}
              className={classes.inputBox}
              error={inputErrorHandler.name.error}
              helperText={inputErrorHandler.name.message}
              variant="outlined"
              onBlur={(event) => {
                if (event.target.value === "") {
                  handleInputError("name", true, "Name is required");
                } else {
                  handleInputError("name", false, "");
                }
              }}
            
            />
          </Grid>
        </Grid>

        <Grid container direction="row" spacing={4} className="registrati-input-container">
          <Grid item>
              <PhoneInput
                label="phone"
                country={"it"}
                onChange={(numero) => setPhone(numero)}
                error={inputErrorHandler.name.error}
                helperText={inputErrorHandler.name.message}
                style={{
                  backgroundColor: "white",
                  fontFamily: 'Comfortaa, cursive',
                  borderRadius: '15px',
                  color: 'black',
                  border: '1 px solid white',
                  marginBottom: '20px',
                  width: '400px'
                }}
              />
          </Grid>
          <Grid item>
            <TextField
                label="Città"
                value={signupDetails.city}
                onChange={(event) => handleInput("city", event.target.value)}
                className={classes.inputBox}
                error={inputErrorHandler.name.error}
                helperText={inputErrorHandler.name.message}
                onBlur={(event) => {
                  if (event.target.value === "") {
                    handleInputError("name", true, "Name is required");
                  } else {
                    handleInputError("name", false, "");
                  }
                }}
                variant="outlined"
                style={{
                  backgroundColor: "white",
                  fontFamily: 'Comfortaa, cursive',
                  borderRadius: '15px',
                  color: 'black',
                  border: 'none',
                  marginBottom: '20px',
                  width: '400px'
                }}
              />
          </Grid>
        </Grid> 

        <Grid container direction="row" spacing={4} className="registrati-input-container">
          <Grid item>
            <EmailInput
              label="Email"
              value={signupDetails.email}
              onChange={(event) => handleInput("email", event.target.value)}
              inputErrorHandler={inputErrorHandler}
              handleInputError={handleInputError}
              className={classes.inputBox}
              required={true}
            />
          </Grid>
          <Grid item>
            <PasswordInput
              label="Password"
              value={signupDetails.password}
              onChange={(event) => handleInput("password", event.target.value)}
              className={classes.inputBox}
              error={inputErrorHandler.password.error}
              helperText={inputErrorHandler.password.message}
              onBlur={(event) => {
                if (event.target.value === "") {
                  handleInputError("password", true, "Password is required");
                } else {
                  handleInputError("password", false, "");
                }
              }}
            />
          </Grid>
        </Grid>  
        <Grid container direction="column">
            <Grid item>

            </Grid>
        </Grid>
        <Grid item>
          <button
            className='button'
            onClick={() => {
                handleLogin()
            }}
          >
            Crea il mio account
          </button>
        </Grid>
        <Grid item>
          <a
            className='button'
            onClick={handleNext}
            href='/'
          >
            Vai avanti
          </a>
        </Grid>
      </Grid>
      {isRegistrationComplete && (
        <div className="popup">
          <img alt="registrazione avvenuta con successo" src={successImage} />
          <div className="popup-text">
            <h3>Congratulazioni!</h3>
            <p>Registrazione avvenuta con successo!</p>
          </div>
          <a className="button" href="/profilo">Completa configurazione</a>
          <a href="/" >Non ora</a>
        </div>
      )}
      </div>
    )
};

export default Registrati;

// {/* <Grid item>
//           <PasswordInput
//             label="Re-enter Password"
//             value={signupDetails.tmpPassword}
//             onChange={(event) => handleInput("tmpPassword", event.target.value)}
//             className={classes.inputBox}
//             labelWidth={140}
//             helperText={inputErrorHandler.tmpPassword.message}
//             error={inputErrorHandler.tmpPassword.error}
//             onBlur={(event) => {
//               if (event.target.value !== signupDetails.password) {
//                 handleInputError(
//                   "tmpPassword",
//                   true,
//                   "Passwords are not same."
//                 );
//               }
//             }}
//           />
//         </Grid> */}
