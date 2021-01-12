import React, { useState, useEffect, useContext } from 'react'

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

const useStyles = makeStyles(() => ({
  list: {
    height: 'calc(100vh - 64px)',
    overflow: 'auto'
  }
}))

export default function ListUsers () {
  const classes = useStyles()
  const [users, setUsers] = useState([0, 1, 3, 4])
  const [loading, setLoading] = useState(true)
  const { setUserId } = useContext(UserIdContext)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(dataUser => {
        setLoading(false)
        setUsers(dataUser)
      })
  }, [])

  const handleClick = id => setUserId(id)

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
              ? <Skeleton variant="circle" width={40} height={40} />
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
