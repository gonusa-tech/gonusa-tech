import React from "react"
import { Flex, Heading, Stack, Image } from "@chakra-ui/react"

import { Header } from "../components/header"

const IndexPage: React.FC = () => {
  return (
    <Flex flex="1" height="100vh" direction="column">
      <Header />
      <Flex flex="1" justify="center" align="center">
        <Stack align="center" spacing="8">
          <Image width="400px" src="/assets/gonusa.png" alt="Segun Adebayo" />
          <Heading>Halo Nusantara</Heading>
        </Stack>
      </Flex>
    </Flex>
  )
}

export default IndexPage
