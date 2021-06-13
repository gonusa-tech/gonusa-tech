import React from "react"
import { IconButton } from "@chakra-ui/button"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"
import { useColorMode, useColorModeValue } from "@chakra-ui/color-mode"

export const ThemeButton: React.FC = () => {
  const { toggleColorMode } = useColorMode()

  const icon = useColorModeValue(<MoonIcon />, <SunIcon />)

  return (
    <IconButton
      aria-label="toogle theme"
      icon={icon}
      onClick={toggleColorMode}
    />
  )
}
