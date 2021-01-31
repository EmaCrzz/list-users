import React from 'react'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import DeleteIcon from '@material-ui/icons/Delete'
import TextField from '@material-ui/core/TextField'
import InputLabel from '@material-ui/core/InputLabel'
import MenuItem from '@material-ui/core/MenuItem'
import FormHelperText from '@material-ui/core/FormHelperText'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'

const useStyles = makeStyles(({ spacing }) => ({
  root: {
    flexGrow: 1,
    position: 'relative'
  },
  buttons: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '.5rem'
  },
  textfield: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '.5rem'
  },
  selects: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '.5rem'
  },
  paper: {
    padding: spacing(0.5, 1),
    height: '90%',
    '& > *': {
      margin: spacing(0.5)
    }
  },
  menuButton: {
    marginRight: spacing(2)
  },
  title: {
    flexGrow: 1
  },
  formControl: {
    margin: spacing(1),
    minWidth: 120
  },
  selectEmpty: {
    marginTop: spacing(2)
  }
}))

export default function ButtonAppBar () {
  const classes = useStyles()
  const [age, setAge] = React.useState('')

  const handleChange = event => {
    setAge(event.target.value)
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            aria-label="menu"
            className={classes.menuButton}
            color="inherit"
            edge="start"
          >
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
              News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Paper className={classes.paper} elevation={0}>
        <Typography component="div" variant="subtitle1">
            Botones
        </Typography>
        <div className={classes.buttons}>
          <Button color="primary" variant="contained">
              Primario
          </Button>
          <Button color="secondary" variant="contained">
              Secundario
          </Button>
          <Button disabled variant="contained">
              Deshabilitado
          </Button>
          <Button color="primary" variant="outlined">
              Primario
          </Button>
          <Button color="secondary" variant="outlined">
              Secundario
          </Button>
          <Button
            className={classes.button}
            color="secondary"
            startIcon={<DeleteIcon />}
            variant="contained"
          >
              Eliminar
          </Button>
        </div>
        <Typography component="div" variant="subtitle1">
            Entrada de texto
        </Typography>
        <div className={classes.textfield}>
          <TextField id="standard-basic" label="Standard" />
          <TextField
            id="outlined-basic"
            label="Con bordes"
            variant="outlined"
          />
        </div>
        <Typography component="div" variant="subtitle1">
            Selects
        </Typography>
        <div className={classes.selects}>
          <FormControl className={classes.formControl}>
            <InputLabel id="demo-simple-select-helper-label">Edad</InputLabel>
            <Select
              id="demo-simple-select-helper"
              labelId="demo-simple-select-helper-label"
              onChange={handleChange}
              value={age}
            >
              <MenuItem value={10}>Diez</MenuItem>
              <MenuItem value={20}>Veinte</MenuItem>
              <MenuItem value={30}>Treinta</MenuItem>
            </Select>
            <FormHelperText>Texto de infomación</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl} error>
            <InputLabel id="demo-simple-select-error-label">Edad</InputLabel>
            <Select
              id="demo-simple-select-error"
              labelId="demo-simple-select-error-label"
              onChange={handleChange}
              renderValue={value => `⚠️  - ${value}`}
              value={age}
            >
              <MenuItem value={10}>Diez</MenuItem>
              <MenuItem value={20}>Veinte</MenuItem>
              <MenuItem value={30}>Treinta</MenuItem>
            </Select>
            <FormHelperText>Error</FormHelperText>
          </FormControl>
          <FormControl className={classes.formControl} variant="outlined">
            <InputLabel id="demo-simple-select-outlined-label">
                Edad
            </InputLabel>
            <Select
              id="demo-simple-select-outlined"
              label="Age"
              labelId="demo-simple-select-outlined-label"
              onChange={handleChange}
              value={age}
            >
              <MenuItem value={10}>Diez</MenuItem>
              <MenuItem value={20}>Veinte</MenuItem>
              <MenuItem value={30}>Treinta</MenuItem>
            </Select>
          </FormControl>
          <FormControl className={classes.formControl} variant="filled">
            <InputLabel id="demo-simple-select-filled-label">Edad</InputLabel>
            <Select
              id="demo-simple-select-filled"
              labelId="demo-simple-select-filled-label"
              onChange={handleChange}
              value={age}
            >
              <MenuItem value={10}>Diez</MenuItem>
              <MenuItem value={20}>Veinte</MenuItem>
              <MenuItem value={30}>Treinta</MenuItem>
            </Select>
          </FormControl>
        </div>
      </Paper>
    </div>
  )
}
