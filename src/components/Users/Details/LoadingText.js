import React from 'react'
import Skeleton from '@material-ui/lab/Skeleton'

export const LoadingText = ({ width, variant }) => {
  return (
    <Skeleton
      animation="wave"
      height={30}
      style={{
        marginLeft: 6,
        marginBottom: 20
      }}
      variant={variant}
      width={width}
    />
  )
}
