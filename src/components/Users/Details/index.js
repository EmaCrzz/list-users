import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import List from '@material-ui/core/List'

import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import EmailIcon from '@material-ui/icons/Email'
import PhoneIcon from '@material-ui/icons/Phone'
import PublicIcon from '@material-ui/icons/Public'
import LocationIcon from '@material-ui/icons/LocationOn'
import WorkIcon from '@material-ui/icons/Work'
import Button from '@material-ui/core/Button'
import ArrowBackIcon from '@material-ui/icons/ArrowBack'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import Avatar from 'components/Avatar'
import UserSelectContext from 'context/UserIdContext'
import DetailEmpty from './Empty'
import { useStyles, ListItem } from './styles.js'
import { LoadingText } from './LoadingText'
import useListUsers from 'Hooks/useListUsers'

const Details = ({ match }) => {
  const matchId = match && match.params.id
  const classes = useStyles()
  const history = useHistory()
  const matches = useMediaQuery('(min-width:800px)')
  const { userId } = useContext(UserSelectContext)
  const { loading, userDetails, location, company } = useListUsers({ id: userId || matchId })
  const userLoading = [0, 1, 2, 3]
  const items = [
    { icon: <EmailIcon />, key: 'email' },
    { icon: <PhoneIcon />, key: 'phone' },
    { icon: <LocationIcon />, key: location || 'loaction' },
    { icon: <WorkIcon />, key: company || 'company' },
    { icon: <PublicIcon />, key: 'website' }
  ]

  const goBack = () => {
    history.push('/home')
  }

  const handleOnClick = (id) => {
    history.push(`/tasks/user/${id}`)
  }

  if (!userId && !matchId) {
    return <DetailEmpty />
  }
  const userName = loading ? <LoadingText variant="text" width={100} /> : userDetails.name

  return (
    <Container maxWidth="xl">
      {!matches && (
        <Button
          className={classes.button}
          color="primary"
          onClick={goBack}
          startIcon={<ArrowBackIcon />}
          variant="contained"
        >
          Atrás
        </Button>
      )}
      <div className={classes.root}>
        <Avatar />
      </div>
      <Typography
        className={`${classes.username} ${classes.item}`}
        component="span"
        variant="h6"
      >
        {userName}
      </Typography>
      {loading && (
        <List>
          {userLoading.map(item => (
            <ListItem dense disableGutters key={item}>
              <ListItemIcon>
                <LoadingText variant="circle" width={30} />
              </ListItemIcon>
              <ListItemText
                primary={<LoadingText variant="text" width={300} />}
              />
            </ListItem>
          ))}
        </List>
      )}
      {!loading && (
        <>
          <List>
            {items.map(item => (
              <ListItem key={item.key}>
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText secondary={userDetails[item.key] || item.key} />
              </ListItem>
            ))}
          </List>
          <div className={classes.item}>
            <Button onClick={() => handleOnClick(userId)} variant="outlined">
              VER TAREAS
            </Button>
          </div>
        </>
      )}
    </Container>
  )
}

export default Details
export const MemoizedDetails = React.memo(Details)
