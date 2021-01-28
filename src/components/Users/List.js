import React, { useContext } from 'react'
import { useHistory } from 'react-router-dom'

import makeStyles from '@material-ui/core/styles/makeStyles'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import UserIcon from '@material-ui/icons/Person'
import DetailsIcon from '@material-ui/icons/NavigateNext'
import Skeleton from '@material-ui/lab/Skeleton'

import UserIdContext from 'context/UserIdContext'
import useListUsers from 'Hooks/useListUsers'

const useStyles = makeStyles(() => ({
  list: {
    height: 'calc(100vh - 64px)',
    overflow: 'auto'
  }
}))

export default function ListUsers ({ matches }) {
  const classes = useStyles()
  const { setUserId } = useContext(UserIdContext)
  const { users, loading } = useListUsers()
  const history = useHistory()

  const handleClick = id => {
    setUserId(id)
    !matches && history.push(`/user/details/${id}`)
  }

  return (
    <List className={classes.list}>
      {users.map(item => (
        <ListItem
          button
          key={item.id || item}
          onClick={() => handleClick(item.id)}
        >
          <ListItemAvatar>
            {loading
              ? <Skeleton height={40} variant="circle" width={40} />
              : (
                <Avatar>
                  <UserIcon />
                </Avatar>
              )}
          </ListItemAvatar>
          <ListItemText
            primary={loading ? <Skeleton variant="text" /> : item.name}
            secondary={loading ? <Skeleton variant="text" /> : item.email}
          />
          <ListItemSecondaryAction>
            {!loading && <DetailsIcon />}
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}
