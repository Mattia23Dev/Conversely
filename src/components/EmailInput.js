import { TextField } from "@material-ui/core";
import '../assets/stylePages/accedi.css';

const EmailInput = (props) => {
  const {
    label,
    value,
    onChange,
    inputErrorHandler,
    handleInputError,
    required,
  } = props;

  return (
    <TextField
      label={label}
      variant="outlined"
      value={value}
      onChange={onChange}
      helperText={inputErrorHandler.email.message}
      onBlur={(event) => {
        if (event.target.value === "") {
          if (required) {
            handleInputError("email", true, "Email is required");
          } else {
            handleInputError("email", false, "");
          }
        } else {
          const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          if (re.test(String(event.target.value).toLowerCase())) {
            handleInputError("email", false, "");
          } else {
            handleInputError("email", true, "Incorrect email format");
          }
        }
      }}
      error={inputErrorHandler.email.error}
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
  );
};

export default EmailInput;