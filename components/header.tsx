import { Button } from "@chakra-ui/button"
import { Box, Flex, Heading, HStack, Text } from "@chakra-ui/layout"
import { chakra, HTMLChakraProps, useColorModeValue } from "@chakra-ui/system"
import { useViewportScroll } from "framer-motion"
import React from "react"
import { ThemeButton } from "./theme-button"

export const Header: React.FC<HTMLChakraProps<"header">> = (props) => {
  const bg = useColorModeValue("white", "gray.800")
  const ref = React.useRef<HTMLHeadingElement>()
  const [y, setY] = React.useState(0)
  const { height = 0 } = ref.current?.getBoundingClientRect() ?? {}

  const { scrollY } = useViewportScroll()
  React.useEffect(() => {
    return scrollY.onChange(() => setY(scrollY.get()))
  }, [scrollY])

  return (
    <chakra.header
      ref={ref}
      shadow={y > height ? "sm" : undefined}
      transition="box-shadow 0.2s, background-color 0.2s"
      pos="sticky"
      top="0"
      zIndex="3"
      bg={bg}
      left="0"
      right="0"
      width="full"
      {...props}
    >
      <chakra.div mx="auto" maxW="8xl">
        <Flex
          px="4"
          py="2"
          flex="1"
          justify="space-between"
          alignItems="center"
        >
          <HStack>
            <Button>About</Button>
            <Button>Blog</Button>
          </HStack>
          <Box>
            <ThemeButton />
          </Box>
        </Flex>
      </chakra.div>
    </chakra.header>
  )
}
