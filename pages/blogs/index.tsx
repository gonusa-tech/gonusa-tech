import React from "react"
import { Flex, Heading, Stack, Image } from "@chakra-ui/react"

import { Header } from "../../components/header"

const BlogPage: React.FC = () => {
  return (
    <Flex flex="1" height="100vh" direction="column">
      <Header />
      <Flex flex="1" justify="center" align="center">
        <Stack align="center" spacing="8">
          <Image width="400px" src="/assets/gonusa.png" alt="Segun Adebayo" />
          <Heading>Work In Progress</Heading>
        </Stack>
      </Flex>
    </Flex>
  )
}

export default BlogPage
