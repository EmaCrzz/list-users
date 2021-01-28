import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

export const LoadingTask = ({ width, variant }) => {
  return (
    <Skeleton
      animation="wave"
      height='304px'
      style={{
        marginLeft: 6,
        marginBottom: 20
      }}
      variant={variant}
      width={width}
    />
  )
}
