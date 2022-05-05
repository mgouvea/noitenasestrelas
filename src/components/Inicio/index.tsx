import {
  Box,
  Button,
  Flex,
  Heading,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';

export function Inicio() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex
      // border="1px"
      // borderColor="white"
      // h="63vh"
      h={[null, '43.25rem']}
      mt="4.1rem"
      // bgImage="/wallpaperflare.svg"
      bgImage="url('https://images.unsplash.com/photo-1651707910327-b8cd0b093ee1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1007&q=80')"
      bgSize="cover"
      bgRepeat="no-repeat"
      bgPosition="center"
      align="center"
      justify="flex-start"
      borderBottom="2px"
      borderColor="orange.500"
    >
      {isWideVersion ? (
        <Flex ml={[null, '7rem']} mb="10rem">
          <Box w="157px" h="157px">
            <Image src="/logo.png" width="157px" height="157px" />
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSc0r0j_suHnpDARrOl71udxz3x0pPqHgofZD5xM9xVX-F9bzg/viewform"
              isExternal
              _hover={{ textDecoration: 'none' }}
            >
              <Button
                mt="4rem"
                ml="0.5rem"
                fontSize="xl"
                size="lg"
                colorScheme="blue"
              >
                Inscreva-se
              </Button>
            </Link>
          </Box>
          <Box ml="1rem" mt="0.8rem">
            <Heading fontSize="5xl">Noite nas Estrelas</Heading>
            <Text
              fontSize="1.4rem"
              lineHeight="1.7rem"
              fontWeight="400"
              fontFamily="ABeeZee"
              w="27rem"
              mt="0.5rem"
            >
              Um acampamento astronômico inesquecível para toda a família
            </Text>
          </Box>
        </Flex>
      ) : (
        <SimpleGrid column={1}>
          <Flex justify="center">
            <Image src="/logo.png" width="100px" height="100px" />
          </Flex>
          <Flex direction="column" mt="0.8rem">
            <Text fontWeight="bold" fontSize="2.5rem" textAlign="center">
              Noite nas Estrelas
            </Text>
            <Text
              fontSize="1.4rem"
              lineHeight="1.7rem"
              fontWeight="400"
              fontFamily="ABeeZee"
              // w="27rem"
              textAlign="center"
              mt="0.5rem"
              mb="1rem"
            >
              Um acampamento astronômico inesquecível para toda a família
            </Text>
          </Flex>
        </SimpleGrid>
      )}
    </Flex>
  );
}
