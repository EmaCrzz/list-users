import makeStyles from '@material-ui/core/styles/makeStyles'

export const useStyles = makeStyles(({ spacing, pallette }) => ({
  root: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)'
  },
  title: {
    fontSize: 14
  },
  pos: {
    marginBottom: 12
  },
  container: {
    padding: spacing(0, 1),
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(275px, 1fr))',
    gap: '.5rem'
  },
  subheader: {
    margin: spacing(1, 0)
  }
}))
