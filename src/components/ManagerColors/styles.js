import makeStyles from '@material-ui/core/styles/makeStyles'
import withStyles from '@material-ui/core/styles/withStyles'
import MuiTextField from '@material-ui/core/TextField'

export const useStyles = makeStyles(({ spacing, pallette }) => ({
  buttonBack: {
    marginTop: '1rem',
    marginLeft: '1rem',
    borderRadius: '50%',
    minWidth: '50px',
    minHeight: '50px',
    display: 'flex',
    justifyContent: 'center',
    padding: '0'
  },
  container: {
    padding: '2rem',
    paddingTop: '4rem',
    height: '68vh',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'flex-start'
  },
  input: {
    margin: '0',
    marginRight: '1rem',
    width: '60%'
  },
  button: {
    width: '43%',
    margin: 'auto',
    fontSize: '10px'
  },
  inputGroup: {
    width: '100%',
    display: 'grid',
    gridTemplateRows: 'auto',
    gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    gap: '1rem 2rem',
    alignItems: 'flex-end',
    marginBottom: '2rem'
  },
  demo: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    border: '1px solid black',
    borderRadius: '10px',
    width: '80%',
    height: '80vh',
    marginLeft: '2rem',
    flexWrap: 'nowrap'
  },
  containerDemo: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    height: '70vh',
    padding: '2rem'
  },
  appBar: {
    height: '4rem',
    borderRadius: '10px 10px 0 0'
  },
  inputDemo: {
    marginBottom: '1rem'
  }
}))

export const TextField = withStyles(() => ({
  root: {
    '& .MuiInputBase-input, & .MuiFilledInput-input': {
      height: '2rem',
      paddingTop: '2rem'
    }
  }
}))(MuiTextField)
