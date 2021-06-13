import React from "react"
import { Flex, Stack, useColorModeValue } from "@chakra-ui/react"

import {
  AiOutlineGithub,
  AiOutlineInstagram,
  AiOutlineYoutube,
} from "react-icons/ai"

import { Header } from "../components/header"
import { LinkItem, LinkType } from "../components/link-item"

const links: LinkType[] = [
  {
    label: "Github",
    url: "http://github.com/gonusa-tech",
    icon: AiOutlineGithub,
  },
  {
    label: "Instagram",
    url: "http://instagram.com/gonusa.tech",
    icon: AiOutlineInstagram,
  },
  {
    label: "YouTube",
    url: "https://www.youtube.com/channel/UCck6V2MUKJScX10p3GLqWsg",
    icon: AiOutlineYoutube,
  },
]

const LinkPage: React.FC = () => {
  return (
    <Flex flex="1" height="100vh" direction="column">
      <Header />
      <Flex
        flex="1"
        justify="center"
        align="center"
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack p="1" spacing="4" w={["90%", "80%"]}>
          {links.map((e) => (
            <LinkItem key={e.label} link={e} />
          ))}
        </Stack>
      </Flex>
    </Flex>
  )
}

export default LinkPage
