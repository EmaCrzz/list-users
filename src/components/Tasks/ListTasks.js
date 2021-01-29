import React, { useContext } from 'react'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import ListSubheader from '@material-ui/core/ListSubheader'
import Typography from '@material-ui/core/Typography'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'

import UserSelectContext from 'context/UserIdContext'
import useListTasks from 'Hooks/useListTasks'
import useListUsers from 'Hooks/useListUsers'

import { LoadingTask } from './loadingTask'
import { useStyles } from './styles'

export default function ListTasks ({ history, match }) {
  const classes = useStyles()
  const taskLoading = [0, 1, 2, 3, 4, 5]
  const matchId = match && match.params.id
  const { userId } = useContext(UserSelectContext)
  const { users } = useListUsers({ id: userId || matchId })
  const { tasks, loading } = useListTasks({ id: userId || matchId })

  const goBack = () => {
    history.push('/home')
  }
  return (
    <>
      <ListSubheader className={classes.subheader}>
        <Button
          className={classes.button}
          color="primary"
          onClick={goBack}
          startIcon={<ArrowBackIcon />}
          variant="contained"
        >
        Atrás
        </Button>
      </ListSubheader>
      { loading && <div className={classes.container}>
        {taskLoading.map(item =>
          <LoadingTask
            key={item}
            variant="text"
            width={322}
          />
        )}
      </div>}
      { !loading && <div className={classes.container}>
        {tasks.map(item => (
          <Card className={classes.card} key={item.id}>
            <CardContent>
              <Typography className={classes.title} color="textSecondary" gutterBottom>
                author: {users.name}
              </Typography>
              <Typography component="h2" variant="h5">
                {item.title}
              </Typography>

              {item.completed &&
                <Typography color="primary" component="p" variant="body2">
                  Realizada
                </Typography>}
              {!item.completed &&
                <Typography className={classes.pending} >
                  Pendiente
                </Typography>}
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        ))}
      </div>}
    </>
  )
}
