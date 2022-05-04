import { Button, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

export function Header() {
  return (
    <Flex
      position="fixed"
      zIndex="2"
      // borderColor="gray.200"
      bg="gray.800"
      // bg="black"
      w="100vw"
      justify="center"
    >
      <Flex
        justify="space-between"
        bg="blackAlpha.600"
        align="center"
        w="100vw"
        height={66}
        px="5rem"
        // border="1px"
        // borderColor="white"
      >
        <Flex align="center">
          <Image src="/logo.png" width="53" height="53" />
          <Text
            color="white"
            fontSize="lg"
            fontWeight="semibold"
            cursor="pointer"
            ml="1rem"
          >
            {/* <Icon as={telescopeIcon} fontSize="6xl" mr="1rem" /> */}
            Noite nas Estrelas
          </Text>
        </Flex>
        <Flex w={600} justify="space-between" pr="3" mr="-25rem">
          <Text
            cursor="pointer"
            _hover={{ color: 'highlighticons' }}
            fontWeight="bold"
            fontSize="0.93rem"
          >
            Início
          </Text>
          <Text
            cursor="pointer"
            _hover={{ color: 'highlighticons' }}
            fontWeight="bold"
            fontSize="0.93rem"
          >
            Sobre
          </Text>
          <Text
            cursor="pointer"
            _hover={{ color: 'highlighticons' }}
            fontWeight="bold"
            fontSize="0.93rem"
          >
            Cronograma
          </Text>
          <Text
            cursor="pointer"
            _hover={{ color: 'highlighticons' }}
            fontWeight="bold"
            fontSize="0.93rem"
          >
            FAQ
          </Text>
          <Text
            cursor="pointer"
            _hover={{ color: 'highlighticons' }}
            fontWeight="bold"
            fontSize="0.93rem"
          >
            Contato
          </Text>
        </Flex>
        {/* <Button
          cursor="pointer"
          // _hover={{ color: 'highlighticons' }}
          colorScheme="blue"
        >
          Inscrição
        </Button> */}
        <Link href="/inscricao" passHref>
          <a>
            <Button
              // as="a"
              // size="sm"
              // fontSize="sm"
              colorScheme="blue"
              // bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
            >
              Inscrição
            </Button>
          </a>
        </Link>
      </Flex>
    </Flex>
  );
}
