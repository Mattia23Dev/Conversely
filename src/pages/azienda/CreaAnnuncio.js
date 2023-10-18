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
  Select,
  InputLabel,
} from "@material-ui/core";
import axios from "axios";
import Chip from "material-ui-chip-input";
import '../../assets/stylePages/creaAnnuncio.css'
import { SetPopupContext } from "../../App";
import DatePicker from 'react-datepicker';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import 'react-datepicker/dist/react-datepicker.css';
import it from 'date-fns/locale/it';
import apiList from "../../components/apiList";
import { HeaderAziendaWhiteLogin } from "../../components/Header";

const nomiItaliani = [
  "cellulare",
  "buoni pasto",
  "auto aziendale",
  "assicurazione sanitaria",
  "acqua gratis",
  "caffe gratis",
  "mensa aziendale",
  "alloggio",
  "stock options",
  "car sharing",
  "biblioteca",
  "dog day",
  "kids day",
  "asilo",
  "bonus bimbi",
  "borse di studio",
  "budget formazione",
  "budget postazione lavoro agile",
  "smart working",
  "lavoro agile",
  "remote working",
  "venerdi corto (7 ore)",
  "venerdi corto (mezza giornata)",
  "settimana corta (venerdi off)",
  "congedo papà",
  "convenzioni",
  "dichiarazione redditi",
  "docce",
  "lavanderia",
  "lavaggio auto",
  "navetta aziendale",
  "orario flessibile",
  "orario estivo",
  "parcheggio gratuito",
  "team building",
  "volontariato",
  "ferie illimitate",
  "tutor in azienda",
  "sconti dipendenti",
  "rimborso libri scolastici",
  "palestra",
  "budget vacanze",
  "budget spazio coworking",
  "budget benessere",
  "kit di benvenuto",
  "laptop a scelta",
  "donazioni benefiche a scelta",
  "nessuno",
  "da definire",
];

const titoliStudioItaliani = [
  "diploma scuola secondaria",
  "laurea triennale",
  "laurea magistrale",
  "dottorato",
  "master di primo livello",
  "master di secondo livello",
];

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

/*                      <ChipInput
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
                      /> */


const CreaAnnuncio = (props) => {
  const classes = useStyles();
  const setPopup = useContext(SetPopupContext);

  const [jobDetails, setJobDetails] = useState({
    titolo: "",
    city: "",
    descrizione: "",
    contratto: "",
    competenze: [],
    turnazione: "",
    esperienza: 1,
    mansioni: "",
    benefit: [],
    protetto: false,
    tempoLavoro: "",
    studio: "",
    ranger: 100,
    rangel: 0,
    durataAnnuncio: new Date(),
    skills: [], 
  });

  const handleInput = (key, value) => {
    setJobDetails({
      ...jobDetails,
      [key]: value,
    });
  };

  const handleUpdate = () => {
    console.log(jobDetails);
    const token = localStorage.getItem("token");
    console.log(token);
    axios
      .post(apiList.jobs, jobDetails, {
        headers: {
          Authorization: `Token ${token}`,
        },
      })
      .then((response) => {
        setPopup({
          open: true,
          severity: "success",
          message: response.data.message,
        });
       setJobDetails({
        titolo: "",
        city: "",
        descrizione: "",
        contratto: "",
        competenze: [],
        turnazione: "",
        esperienza: 1,
        mansioni: "",
        benefit: [],
        protetto: false,
        tempoLavoro: "",
        studio: "",
        ranger: 100,
        rangel: 0,
        durataAnnuncio: new Date(new Date())
          .toISOString()
          .substr(0, 16),
        skills: ["skill1","skill2"], 
      }) 
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
          <CustomInput value={jobDetails.durataAnnuncio.toISOString().substr(0, 16)} />
          <Grid item style={{paddingTop:'0em'}}>
              <div className='calendar-container'>
                <Calendar 
                onChange={(date) => {
                  handleInput("durataAnnuncio", date);
                }} 
                value={jobDetails.durataAnnuncio} />
              </div>
                    {/*<TextField
                      label="Durata annuncio"
                      open={true}
                      type="date"
                      value={jobDetails.durataAnnuncio}
                      onChange={(event) => {
                        handleInput("durataAnnuncio", event.target.value);
                      }}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                      fullWidth
                    />*/}
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
                    <Grid item >
                      <TextField
                        label="Titolo"
                        value={jobDetails.titolo}
                        onChange={(event) =>
                          handleInput("titolo", event.target.value)
                        }
                        variant="outlined"
                        fullWidth
                      />
                    </Grid>
                    <Grid item>
                      <TextField
                        label="Città"
                        value={jobDetails.city}
                        onChange={(event) => handleInput("city", event.target.value)}
                        className={classes.inputBox}
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
                  <Grid direction="row" container spacing={3} fullWidth style={{padding:'15px'}}>
                    <Grid item>
                      <TextField
                          label="Mansioni"
                          value={jobDetails.mansioni}
                          onChange={(event) =>
                            handleInput("mansioni", event.target.value)
                          }
                          variant="outlined"
                          fullWidth
                        />
                    </Grid>
                    <Grid direction="row" item spacing={3}>
                    <TextField
                        style={{width: '250px'}}
                        label="Range retributivo minimo"
                        type="number"
                        variant="outlined"
                        value={jobDetails.rangel}
                        onChange={(event) => {
                          handleInput("rangel", parseInt(event.target.value));
                        }}
                        InputProps={{ inputProps: { min: 0 } }}
                        fullWidth
                      />
                       <TextField
                        style={{width: '250px', marginLeft: '20px'}}
                        label="Range retributivo massimo"
                        type="number"
                        variant="outlined"
                        value={jobDetails.ranger}
                        onChange={(event) => {
                          handleInput("ranger", parseInt(event.target.value));
                        }}
                        InputProps={{ inputProps: { min: 1 } }}
                        fullWidth
                      />
                    </Grid>
                  </Grid>
                  <Grid direction="row" container spacing={3} fullWidth style={{padding:'15px'}}>
                    <Grid item>
                      <Select
                        style={{width: '250px', height: 'fit-content'}}
                        multiple
                        label="Competenze"
                        variant="outlined"
                        value={jobDetails.competenze || []}
                        onChange={(event) => {
                          handleInput("competenze", event.target.value);
                        }}
                        fullWidth
                        onAdd={(chip) =>
                          setJobDetails({
                            ...jobDetails,
                            competenze: [...jobDetails.competenze, chip],
                          })
                        }
                        onDelete={(chip, index) => {
                          let competenze = jobDetails.competenze;
                          competenze.splice(index, 1);
                          setJobDetails({
                            ...jobDetails,
                            competenze: competenze,
                          });
                        }}
                      >
                        <MenuItem value="Gestione dello stress">Gestione dello stress</MenuItem>
                        <MenuItem value="Empatia">Empatia</MenuItem>
                        <MenuItem value="Organizzazione">Organizzazione</MenuItem>
                        <MenuItem value="Proattività">Proattività</MenuItem>
                        <MenuItem value="Team work">Team work</MenuItem>
                        <MenuItem value="Creatività">Creatività</MenuItem>
                        <MenuItem value="Ascolto">Ascolto</MenuItem>
                        <MenuItem value="Apprendimento">Apprendimento</MenuItem>
                      </Select>
                    </Grid>
                    <Grid item>
                      <TextField
                          style={{width: '250px'}}
                          select
                          label="Turnazione"
                          variant="outlined"
                          value={jobDetails.turnazione}
                          className={classes.inputBox}
                          onChange={(event) => {
                            handleInput("turnazione", event.target.value);
                          }}
                          fullWidth
                        >
                          <MenuItem value="Orario notturno">Orario Notturno</MenuItem>
                          <MenuItem value="Turni nel weekend">Turni nel Weekend</MenuItem>
                          <MenuItem value="Normale">Turno Normale</MenuItem>
                        </TextField>
                    </Grid>
                  </Grid>
                  <Grid direction="row" container spacing={3} fullWidth style={{padding:'15px'}}>
                    <Grid item>
                      <TextField
                          style={{width: '250px'}}
                          label="Esperienza minima"
                          className={classes.inputBox}
                          type="number"
                          variant="outlined"
                          value={jobDetails.esperienza}
                          onChange={(event) => {
                            handleInput("esperienza", parseInt(event.target.value));
                          }}
                          InputProps={{ inputProps: { min: 0 } }}
                          fullWidth
                        />
                    </Grid>
                    <Grid item>
                      <Select
                        select
                        label="Benefit"
                        multiple
                        value={jobDetails.benefit || []}
                        onChange={(event) => handleInput("benefit", event.target.value)}
                        variant="outlined"
                        fullWidth
                        style={{ width: '250px' }}
                        onAdd={(chip) =>
                          setJobDetails({
                            ...jobDetails,
                            benefit: [...jobDetails.benefit, chip],
                          })
                        }
                        onDelete={(chip, index) => {
                          let benefit = jobDetails.benefit;
                          benefit.splice(index, 1);
                          setJobDetails({
                            ...jobDetails,
                            benefit: benefit,
                          });
                        }}
                      >
                        {nomiItaliani.map((benefit, index) => (
                          <MenuItem key={index} value={benefit}>
                            {benefit}
                          </MenuItem>
                        ))}
                      </Select>
                    </Grid>
                  </Grid>
                  <Grid direction="row" container spacing={3} fullWidth style={{padding:'15px'}}>
                    <Grid item>
                      <TextField
                          style={{width: '250px'}}
                          select
                          label="Categoria protetta"
                          variant="outlined"
                          value={jobDetails.protetto}
                          className={classes.inputBox}
                          onChange={(event) => {
                            handleInput("protetto", event.target.value);
                          }}
                          fullWidth
                        >
                          <MenuItem value={false}>NO</MenuItem>
                          <MenuItem value={true}>SI</MenuItem>
                        </TextField>
                    </Grid>
                    <Grid item>
                      <TextField
                          style={{width: '250px'}}
                          select
                          label="Orari"
                          variant="outlined"
                          value={jobDetails.tempoLavoro}
                          onChange={(event) => {
                            handleInput("tempoLavoro", event.target.value);
                          }}
                          fullWidth
                        >
                          <MenuItem value="Full-time">Full-time</MenuItem>
                          <MenuItem value="Part-time">Part-time</MenuItem>
                        </TextField>
                    </Grid>
                  </Grid>
                  <Grid direction="row" container spacing={3} fullWidth style={{padding:'15px'}}>
                  <Grid item>
                      <TextField
                      style={{width: '250px'}}
                        select
                        label="Titolo di studio"
                        value={jobDetails.studio}
                        onChange={(event) => handleInput("studio", event.target.value)}
                        variant="outlined"
                        fullWidth
                      >
                        {titoliStudioItaliani.map((titolo, index) => (
                          <MenuItem key={index} value={titolo}>
                            {titolo}
                          </MenuItem>
                        ))}
                      </TextField>
                    </Grid>
                    <Grid item>
                      <TextField
                          style={{width: '250px'}}
                          select
                          label="Contratto"
                          variant="outlined"
                          value={jobDetails.contratto}
                          onChange={(event) => {
                            handleInput("contratto", event.target.value);
                          }}
                          fullWidth
                        >
                          <MenuItem value="Determinato">Determinato</MenuItem>
                          <MenuItem value="Indeterminato">Indeterminato</MenuItem>
                          <MenuItem value="Stage">Stage</MenuItem>
                          <MenuItem value="Apprendistato">Apprendistato</MenuItem>
                        </TextField>
                    </Grid>
                  </Grid>
                  <Grid item style={{ width: "100%" }}>
                    <TextField
                      label="Descrizione (max 500 caratteri)"
                      multiline
                      rows={8}
                      style={{ width: "100%" }}
                      variant="outlined"
                      value={jobDetails.descrizione}
                      onChange={(event) => {
                        if (
                          event.target.value.split(" ").filter(function (n) {
                            return n != "";
                          }).length <= 500
                        ) {
                          handleInput("descrizione", event.target.value);
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

function CustomInput({ value }) {
  return (
    <button style={{width: '200px', padding: '4px 10px', marginTop: '50px'}} className="custom-input">
      {value}
    </button>
  );
}

export default CreaAnnuncio;