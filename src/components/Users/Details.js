import React, { useContext, useState, useEffect } from 'react'

import makeStyles from '@material-ui/core/styles/makeStyles'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import MuiAvatar from '@material-ui/core/Avatar'
import green from '@material-ui/core/colors/green'
import Skeleton from '@material-ui/lab/Skeleton'

import UserIcon from '@material-ui/icons/AccountCircle'
// import FaceIcon from '@material-ui/icons/Face'
// import CuitIcon from '@material-ui/icons/Subtitles'
// import EmailIcon from '@material-ui/icons/Email'
// import PhoneIcon from '@material-ui/icons/Phone'

import Avatar from 'components/Avatar'
import DetailEmpty from './DetailEmpty'
import UserSelectContext from 'context/UserIdContext'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    margin: theme.spacing(1)
  },
  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
    marginRight: theme.spacing(1),
    color: green[500],
    backgroundColor: 'transparent'
  },
  item: {
    display: 'flex',
    alignItems: 'center'
  },
  username: {
    fontSize: 'x-large',
    fontWeight: 'bolder'
  }
}))

// const LoadingAvatar = () => {
//   return <Skeleton animation="wave" variant="circle" width={24} height={24} />
// }

const LoadingText = ({ width }) => {
  return (
    <Skeleton
      animation="wave"
      height={30}
      width={width}
      style={{ marginLeft: 6 }}
    />
  )
}

export default function Details () {
  const classes = useStyles()
  const [loading, setLoading] = useState(false)

  const { userId } = useContext(UserSelectContext)
  const [userDetails, setUserDetails] = useState({})

  useEffect(() => {
    if (userId) {
      setLoading(true)
      fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(res => res.json())
        .then(dataUser => {
          setLoading(false)
          setUserDetails(dataUser)
        })
    }
  }, [userId])
  //  [] =>            el useEffect se va a ejecutar solo una vez cuando el componente se está montando
  //  [Dependencia] => el useEffect se va a ejecutar cada vez que "Dependencia" cambie (en este caso la dependencia es userId)

  if (!userId) {
    return <DetailEmpty />
  }

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <Avatar />
      </div>
      <MuiAvatar className={classes.small} alt="Username">
        <UserIcon />
      </MuiAvatar>
      <Typography component="span" className={classes.username}>
        {loading ? <LoadingText width={100} /> : userDetails.name}
      </Typography>
      <Typography component="span" variant="subtitle1" color="textSecondary">
        {loading ? <LoadingText width={100} /> : userDetails.email}
      </Typography>
    </Container>
  )
}
