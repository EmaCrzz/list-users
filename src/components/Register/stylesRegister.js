import { makeStyles } from '@material-ui/core/styles'

export const useStyles = makeStyles((theme) => ({
  container: {
    width: '400px',
    height: '70vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: '3rem',
    padding: '30px',
    borderRadius: '10px',
    border: '1px solid rgb(189 189 189 / 80%)'
  },
  itemText: {
    marginBottom: '2rem'
  },
  title: {
    fontWeight: '700',
    letterSpacing: '2px'
  },
  width: {
    width: '100%',
    marginBottom: '2rem'
  }
}))
