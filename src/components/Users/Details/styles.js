import MuiListItem from '@material-ui/core/ListItem'
import makeStyles from '@material-ui/core/styles/makeStyles'
import withStyles from '@material-ui/core/styles/withStyles'

export const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(1)
  },
  listItem: {
    border: '1px solid black'
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  username: {
    fontSize: 'x-large',
    fontWeight: 'bolder'
  },
  itemLoading: {
    display: 'flex'
  },
  button: {
    height: '2.5rem',
    marginTop: '2rem'
  }

}))

export const ListItem = withStyles(() => ({
  root: {
    backgroundColor: '#dbe0f3bd'
  }
}))(MuiListItem)
