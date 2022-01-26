// packages
import React, { useState, useEffect } from 'react'
// chakra
import { Box } from '@chakra-ui/react'

type TimeDisplayOpts = '2-digit' | 'numeric' | undefined

export const CurrentTime = () => {
  const formatOpts = {
    hour: '2-digit' as TimeDisplayOpts,
    minute: '2-digit' as TimeDisplayOpts,
  }
  const [dt, setDt] = useState(new Date().toLocaleTimeString('en-us', formatOpts))

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleTimeString('en-us', formatOpts))
    }, 1000)

    return () => clearInterval(secTimer)
  }, [])
  return <Box>{dt}</Box>
}
