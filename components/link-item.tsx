import React from "react"
import {
  Box,
  Flex,
  HStack,
  Link,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"

import { IconType } from "react-icons"

export type LinkType = {
  label: string
  url: string
  icon: IconType
}

type Props = {
  link: LinkType
}

export const LinkItem: React.FC<Props> = ({ link }) => {
  return (
    <Link href={link.url} target="_blank">
      <HStack
        p="4"
        fontSize="xl"
        shadow="md"
        rounded="md"
        bg={useColorModeValue("white", "gray.700")}
      >
        <Box as={link.icon} />
        <Flex w="100%" justify="center">
          <Text>{link.label}</Text>
        </Flex>
      </HStack>
    </Link>
  )
}
