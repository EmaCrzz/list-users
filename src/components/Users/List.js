import React from 'react'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction'
import ListItemText from '@material-ui/core/ListItemText'
import Avatar from '@material-ui/core/Avatar'
import IconButton from '@material-ui/core/IconButton'
import UserIcon from '@material-ui/icons/Person'
import DetailsIcon from '@material-ui/icons/NavigateNext'

export default function ListUsers () {
  const arr = [0, 1, 2, 3]
  return (
    <List>
      {arr.map(item => (
        <ListItem button key={item}>
          <ListItemAvatar>
            <Avatar>
              <UserIcon />
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={<Nombre />} secondary="Secondary text" />
          <ListItemSecondaryAction>
            <IconButton edge="end" aria-label="details">
              <DetailsIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      ))}
    </List>
  )
}

const Nombre = () => (
  <span>Emanuel <strong>Villanueva</strong></span>
)
