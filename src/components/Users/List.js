import React, { useState, useEffect } from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import UserIcon from '@material-ui/icons/Person'
import DetailsIcon from '@material-ui/icons/NavigateNext'
import Skeleton from '@material-ui/lab/Skeleton'

export default function ListUsers () {
  const [users, setUsers] = useState([0, 1, 3, 4])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(dataUser => {
        setLoading(false)
        setUsers(dataUser)
      })
  }, [])

  return (
    <List>
      {users.map(item => (
        <ListItem button key={item}>
          <ListItemAvatar>
            {loading && <Skeleton variant="circle" width={40} height={40} />}
            {!loading &&
            <Avatar>
              <UserIcon />
            </Avatar>}
          </ListItemAvatar>
          <ListItemText
            primary={loading ? <Skeleton variant="text" /> : item.name}
            secondary={loading ? <Skeleton variant="text" /> : item.email}
          />
          <ListItemSecondaryAction>
            {!loading &&
            <IconButton edge="end" aria-label="details">
              <DetailsIcon />
            </IconButton>}
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}
