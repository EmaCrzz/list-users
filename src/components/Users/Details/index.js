import React, { useContext } from 'react'

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

import Avatar from 'components/Avatar'
import UserSelectContext from 'context/UserIdContext'
import DetailEmpty from './Empty'
import { useStyles, ListItem } from './styles.js'
import { LoadingText } from './LoadingText'
import useListUsers from 'Hooks/useListUsers'

export default function Details () {
  const classes = useStyles()

  const { userId } = useContext(UserSelectContext)
  const { loading, userDetails, location, company } = useListUsers({ id: userId })

  const userLoading = [0, 1, 2, 3]
  const items = [
    { icon: <EmailIcon />, key: 'email' },
    { icon: <PhoneIcon />, key: 'phone' },
    { icon: <LocationIcon />, key: location },
    { icon: <WorkIcon />, key: company },
    { icon: <PublicIcon />, key: 'website' }
  ]

  if (!userId) {
    return <DetailEmpty />
  }

  console.log(items)

  return (
    <Container maxWidth="sm">
      <div className={classes.root}>
        <Avatar />
      </div>

      <Typography className={`${classes.username} ${classes.item}`} component="span" variant="h6">
        {loading ? <LoadingText variant="text" width={100} /> : userDetails.name}
      </Typography>
      {loading
        ? userLoading.map(item => (
          <div className={classes.itemLoading} key={item}>
            <LoadingText
              variant="circle"
              width={30}
            />
            <LoadingText
              variant="text"
              width={200}
            />
          </div>
        ))
        : (
          <>
            <List>
              {items.map(item => (
                <ListItem key={item.key}>
                  <ListItemIcon>
                    {item.icon}
                  </ListItemIcon>
                  <ListItemText secondary={userDetails[item.key] || item.key} />
                </ListItem>
              ))}

            </List>
            <div className={classes.item}>
              <Button variant="outlined">VER TAREAS</Button>
            </div>
          </>
        )}

    </Container>
  )
}
