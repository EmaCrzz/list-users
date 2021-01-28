import React, { useContext } from 'react'

import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import UserSelectContext from 'context/UserIdContext'
import useListTasks from 'Hooks/useListTasks'
import useListUsers from 'Hooks/useListUsers'
import { LoadingTask } from './loadingTask'

const useStyles = makeStyles({
  root: {
    minWidth: 275,
    margin: '1rem',
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
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)'
  },
  button: {
    height: '2.5rem',
    marginTop: '1rem',
    marginLeft: '1rem'
  }
})

const theme = createMuiTheme({
  overrides: {
    MuiTypography: {
      colorTextSecondary: {
        color: '#d1a400',
        textShadow: '1px 1px 2px #d5d5d5'
      }
    }
  }
})

export default function ListTasks ({ history, match }) {
  const classes = useStyles()
  const bull = <span className={classes.bullet}>•</span>

  const taskLoading = [0, 1, 2, 3, 4, 5]
  const matchId = match && match.params.id
  const { userId } = useContext(UserSelectContext)
  const { users } = useListUsers({ id: userId || matchId })
  const { tasks, loading } = useListTasks({ id: userId || matchId })
  console.log(tasks)

  const goBack = () => {
    history.push('/home')
  }
  return (
    <>
      <Button
        className={classes.button}
        color="primary"
        onClick={goBack}
        startIcon={<ArrowBackIcon />}
        variant="contained"
      >
        Atrás
      </Button>
      { loading
        ? <div className={classes.container} >
          {taskLoading.map(item =>
            <LoadingTask
              key={item}
              variant="text"
              width={322}
            />
          )}
        </div>
        : <div className={classes.container}>
          {tasks.map(item => (

            <Card className={classes.root} key={item.id}>
              <CardContent>
                <Typography className={classes.title} color="textSecondary" gutterBottom>
                  author: {users.name}
                </Typography>
                <Typography component="h2" variant="h5">
                  {item.title}
                </Typography>

                {
                  item.completed
                    ? <Typography color="primary" component="p" variant="body2">
                    Realizada
                    </Typography>
                    : <ThemeProvider theme={theme}>
                      <Typography className={classes.pos} color="textSecondary">
                    Pendiente
                      </Typography>
                    </ThemeProvider>
                }

              </CardContent>
              <CardActions>
                <Button size="small">Learn More</Button>
              </CardActions>
            </Card>

          ))}
        </div>
      }
    </>

  )
}
