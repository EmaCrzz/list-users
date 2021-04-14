import React from 'react'

import Button from '@material-ui/core/Button'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Radio from '@material-ui/core/Radio'
import RadioGroup from '@material-ui/core/RadioGroup'
import FormControl from '@material-ui/core/FormControl'
import Container from '@material-ui/core/Container'

import { useStyles, TextField } from './styles'

export default function Demo () {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true
  })
  const [value, setValue] = React.useState('primary')

  const classes = useStyles()

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked })
    setValue(event.target.value)
  }
  return (
    <>

      <AppBar className={classes.appBar} position="static">
        <Toolbar>
          <IconButton aria-label="menu" className={classes.menuButton} color="inherit" edge="start">
            <MenuIcon />
          </IconButton>
          <Typography className={classes.title} variant="h6">
                      News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>

      <Container >
        <TextField
          className={classes.inputDemo}
          fullWidth
          label="Standar"
          size='small'
          variant="standard"
        />
        <TextField
          className={classes.inputDemo}
          fullWidth
          label="Outlined"
          size='small'
          variant="outlined"
        />
        <TextField
          className={classes.inputDemo}
          defaultValue="Hello World"
          error
          fullWidth
          helperText="Incorrect entry."
          label="Error"
        />
        <div>
          <Button
            className={classes.inputDemo}
            color='primary'
            fullWidth
            variant="contained">
        Primario
          </Button>
          <Button
            className={classes.inputDemo}
            color='secondary'
            fullWidth
            variant="contained">
        Secundario
          </Button>
        </div>
        <div>
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedB}
                color="primary"
                name="checkedB"
                onChange={handleChange}
              />
            }
            label="Primary"
          />
          <FormControlLabel
            control={
              <Checkbox
                checked={state.checkedA}
                color="secondary"
                name="checkedA"
                onChange={handleChange} />
            }
            label="Secondary"
          />
          <FormControl component="fieldset">
            <RadioGroup aria-label="gender" name="gender1" onChange={handleChange} value={value}>
              <FormControlLabel control={<Radio color='primary'/>} label="Primary" value="primary"/>
              <FormControlLabel control={<Radio color='secondary'/>} label="Secondary" value="secondary" />
            </RadioGroup>
          </FormControl>
        </div>

      </Container>
    </>
  )
}
