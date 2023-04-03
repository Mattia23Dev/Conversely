import { useContext, useEffect, useState } from "react";
import {
  Button,
  Grid,
  Typography,
  Modal,
  Paper,
  makeStyles,
  TextField,
  MenuItem,
} from "@material-ui/core";
import axios from "axios";
import ChipInput from "material-ui-chip-input";
import '../../assets/stylePages/creaAnnuncio.css'
import { SetPopupContext } from "../../App";

import apiList from "../../components/apiList";
import { HeaderAziendaWhiteLogin } from "../../components/Header";

const useStyles = makeStyles((theme) => ({
  body: {
    height: "inherit",
  },
  popupDialog: {
    height: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    // padding: "30px",
  },
  inputBox: {
    width:'100%'
  }
}));

const CreaAnnuncio = (props) => {
  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);

  const [jobDetails, setJobDetails] = useState({
    title: "",
    maxApplicants: 100,
    maxPositions: 30,
    deadline: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)
      .toISOString()
      .substr(0, 16),
    skillsets: [],
    jobType: "Full Time",
    duration: 0,
    salary: 0,
  });

  const handleInput = (key, value) => {
    setJobDetails({
      ...jobDetails,
      [key]: value,
    });
  };

  const handleUpdate = () => {
    console.log(jobDetails);
    axios
      .post(apiList.jobs, jobDetails, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((response) => {
        setPopup({
          open: true,
          severity: "success",
          message: response.data.message,
        });
        setJobDetails({
          title: "",
          maxApplicants: 100,
          maxPositions: 30,
          deadline: new Date(new Date().getTime() + 10 * 24 * 60 * 60 * 1000)
            .toISOString()
            .substr(0, 16),
          skillsets: [],
          jobType: "Full Time",
          duration: 0,
          salary: 0,
        });
      })
      .catch((err) => {
        setPopup({
          open: true,
          severity: "error",
          message: err.response.data.message,
        });
        console.log(err.response);
      });
  };

  return (
    <>
    <HeaderAziendaWhiteLogin />
    <div className="creaAnnuncio-container">
      <div className="creaAnnuncio-left">
        <div>
          <h2>Hai un nuovo annuncio?</h2>
          <p>Inserisci i dati e carica l'annuncio</p>
        </div>
        <hr color="#EAE9E9" fullWidth/>
        <div>
          <p>Inserisci la durata del tuo annuncio</p>
          <Grid item style={{paddingTop:'3em'}}>
                    <TextField
                      label="Durata annuncio"
                      type="datetime-local"
                      value={jobDetails.deadline}
                      onChange={(event) => {
                        handleInput("deadline", event.target.value);
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      fullWidth
                    />
        </Grid>
        </div>
      </div>
      <div className="creaAnnuncio-right">
        <Grid
          container
          item
          direction="column"
          alignItems="center"
          style={{ padding: "30px", minHeight: "93vh" }}
        >
          <Grid item container xs direction="column" justify="center">
            <Grid item>
              <Paper
                style={{
                  padding: "20px",
                  outline: "none",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Grid
                  container
                  direction="column"
                  alignItems="stretch"
                  spacing={3}
                >
                  <Grid direction="row" container spacing={3} fullWidth style={{padding:'15px'}}>
                    <Grid item>
                      <TextField
                        label="Title"
                        value={jobDetails.title}
                        onChange={(event) =>
                          handleInput("title", event.target.value)
                        }
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item>
                      <ChipInput
                        className={classes.inputBox}
                        label="Skills"
                        variant="outlined"
                        helperText="Press enter to add skills"
                        value={jobDetails.skillsets}
                        onAdd={(chip) =>
                          setJobDetails({
                            ...jobDetails,
                            skillsets: [...jobDetails.skillsets, chip],
                          })
                        }
                        onDelete={(chip, index) => {
                          let skillsets = jobDetails.skillsets;
                          skillsets.splice(index, 1);
                          setJobDetails({
                            ...jobDetails,
                            skillsets: skillsets,
                          });
                        }}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid direction="row" container spacing={3} fullWidth style={{padding:'15px'}}>
                    <Grid item>
                      <TextField
                        select
                        label="Job Type"
                        variant="outlined"
                        value={jobDetails.jobType}
                        onChange={(event) => {
                          handleInput("jobType", event.target.value);
                        }}
                        fullWidth
                      >
                        <MenuItem value="Full Time">Full Time</MenuItem>
                        <MenuItem value="Part Time">Part Time</MenuItem>
                        <MenuItem value="Work From Home">Work From Home</MenuItem>
                      </TextField>
                    </Grid>
                    <Grid item>
                      <TextField
                        select
                        label="Duration"
                        variant="outlined"
                        value={jobDetails.duration}
                        onChange={(event) => {
                          handleInput("duration", event.target.value);
                        }}
                        fullWidth
                      >
                        <MenuItem value={0}>Flexible</MenuItem>
                        <MenuItem value={1}>1 Month</MenuItem>
                        <MenuItem value={2}>2 Months</MenuItem>
                        <MenuItem value={3}>3 Months</MenuItem>
                        <MenuItem value={4}>4 Months</MenuItem>
                        <MenuItem value={5}>5 Months</MenuItem>
                        <MenuItem value={6}>6 Months</MenuItem>
                      </TextField>
                    </Grid>
                  </Grid>
                  <Grid direction="row" container spacing={3} fullWidth style={{padding:'15px'}}>
                    <Grid item>
                      <TextField
                        label="Salary"
                        type="number"
                        variant="outlined"
                        value={jobDetails.salary}
                        onChange={(event) => {
                          handleInput("salary", event.target.value);
                        }}
                        InputProps={{ inputProps: { min: 0 } }}
                        fullWidth
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        label="Maximum Number Of Applicants"
                        type="number"
                        variant="outlined"
                        value={jobDetails.maxApplicants}
                        onChange={(event) => {
                          handleInput("maxApplicants", event.target.value);
                        }}
                        InputProps={{ inputProps: { min: 1 } }}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid direction="row" container spacing={3} fullWidth style={{padding:'15px'}}>
                    <Grid item>
                      <TextField
                        label="Title"
                        value={jobDetails.title}
                        onChange={(event) =>
                          handleInput("title", event.target.value)
                        }
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item>
                      <ChipInput
                        className={classes.inputBox}
                        label="Skills"
                        variant="outlined"
                        helperText="Press enter to add skills"
                        value={jobDetails.skillsets}
                        onAdd={(chip) =>
                          setJobDetails({
                            ...jobDetails,
                            skillsets: [...jobDetails.skillsets, chip],
                          })
                        }
                        onDelete={(chip, index) => {
                          let skillsets = jobDetails.skillsets;
                          skillsets.splice(index, 1);
                          setJobDetails({
                            ...jobDetails,
                            skillsets: skillsets,
                          });
                        }}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid direction="row" container spacing={3} fullWidth style={{padding:'15px'}}>
                    <Grid item>
                      <TextField
                        label="Title"
                        value={jobDetails.title}
                        onChange={(event) =>
                          handleInput("title", event.target.value)
                        }
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item>
                      <ChipInput
                        className={classes.inputBox}
                        label="Skills"
                        variant="outlined"
                        helperText="Press enter to add skills"
                        value={jobDetails.skillsets}
                        onAdd={(chip) =>
                          setJobDetails({
                            ...jobDetails,
                            skillsets: [...jobDetails.skillsets, chip],
                          })
                        }
                        onDelete={(chip, index) => {
                          let skillsets = jobDetails.skillsets;
                          skillsets.splice(index, 1);
                          setJobDetails({
                            ...jobDetails,
                            skillsets: skillsets,
                          });
                        }}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid direction="row" container spacing={3} fullWidth style={{padding:'15px'}}>
                    <Grid item>
                      <TextField
                        label="Title"
                        value={jobDetails.title}
                        onChange={(event) =>
                          handleInput("title", event.target.value)
                        }
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item>
                      <ChipInput
                        className={classes.inputBox}
                        label="Skills"
                        variant="outlined"
                        helperText="Press enter to add skills"
                        value={jobDetails.skillsets}
                        onAdd={(chip) =>
                          setJobDetails({
                            ...jobDetails,
                            skillsets: [...jobDetails.skillsets, chip],
                          })
                        }
                        onDelete={(chip, index) => {
                          let skillsets = jobDetails.skillsets;
                          skillsets.splice(index, 1);
                          setJobDetails({
                            ...jobDetails,
                            skillsets: skillsets,
                          });
                        }}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid item style={{ width: "100%" }}>
                    <TextField
                      label="Bio (upto 250 words)"
                      multiline
                      rows={8}
                      style={{ width: "100%" }}
                      variant="outlined"
                      value={jobDetails.bio}
                      onChange={(event) => {
                        if (
                          event.target.value.split(" ").filter(function (n) {
                            return n != "";
                          }).length <= 250
                        ) {
                          handleInput("bio", event.target.value);
                        }
                      }}
                    />
                  </Grid>
                </Grid>
                <Grid container justify="left">
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ padding: "8px 24px", marginTop: "30px", borderRadius: '70px', background: '#293479' }}
                    onClick={() => handleUpdate()}
                  >
                    Carica
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </Grid>
        </Grid>
      </div>
    </div>
    </>
  );
};

export default CreaAnnuncio;