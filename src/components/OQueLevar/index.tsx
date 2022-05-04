import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { List } from './List';

export function OQLevar() {
  return (
    <Flex h="91vh" bgImage="/fundoSobre.svg">
      <Flex bg="bgFundoSobre2" w="100%">
        <SimpleGrid columns={[1, 2]} w="100%">
          <Flex direction="column" align="center" justify="center">
            <Text
              mb="1rem"
              fontWeight="bold"
              fontSize="1.9rem"
              w="26rem"
              textAlign="center"
            >
              O que eu preciso levar para o acampamento?
            </Text>
            <Flex
              w="28.44rem"
              h="28.75rem"
              borderRadius="0.3rem"
              bg="bgFundoPreco"
            >
              <Box
                h="60px"
                bg="highlighticons"
                w="100%"
                borderTopRadius="0.3rem"
              >
                <Text
                  fontSize="1.25rem"
                  fontWeight="bold"
                  ml="2rem"
                  pt="1.3rem"
                >
                  ITENS:
                </Text>
                <Flex mt="2rem" align="center" justify="center" px="3rem">
                  <List />
                </Flex>
              </Box>
            </Flex>
          </Flex>
          <Flex direction="column" align="center" justify="center">
            <Text
              mb="1rem"
              fontWeight="bold"
              fontSize="2rem"
              w="27rem"
              textAlign="center"
            >
              Imagens obtidas com nosso super telescópio!
            </Text>
            <SimpleGrid
              columns={[1, 2]}
              spacing={10}
              w="28rem"
              h="28rem"
              mb="2rem"
            >
              <Flex direction="column" w="12rem" h="12rem" borderRadius="100%">
                <Image src="/Jupiter.svg" borderRadius="100%" border="1px" />
                <Text
                  fontSize="1rem"
                  fontWeight="bold"
                  textAlign="center"
                  mt="0.5rem"
                >
                  Jupiter e suas luas
                </Text>
              </Flex>
              <Flex direction="column" w="12rem" h="12rem" borderRadius="100%">
                <Image src="/Saturno.svg" borderRadius="100%" border="1px" />
                <Text
                  fontSize="1rem"
                  fontWeight="bold"
                  textAlign="center"
                  mt="0.5rem"
                >
                  Saturno
                </Text>
              </Flex>
              <Flex direction="column" w="12rem" h="12rem" borderRadius="100%">
                <Image src="/Pleiades.svg" borderRadius="100%" border="1px" />
                <Text
                  fontSize="1rem"
                  fontWeight="bold"
                  textAlign="center"
                  mt="0.5rem"
                >
                  Aglomerado das Pleiades
                </Text>
              </Flex>
              <Flex direction="column" w="12rem" h="12rem" borderRadius="100%">
                <Image src="/Lua.svg" borderRadius="100%" border="1px" />
                <Text
                  fontSize="1rem"
                  fontWeight="bold"
                  textAlign="center"
                  mt="0.5rem"
                >
                  Lua Crescente
                </Text>
              </Flex>
            </SimpleGrid>
          </Flex>
        </SimpleGrid>
      </Flex>
    </Flex>
  );
}
