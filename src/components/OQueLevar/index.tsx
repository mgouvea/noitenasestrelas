import { Box, Flex, Image, SimpleGrid, Text } from '@chakra-ui/react';
import { List } from './List';

export function OQLevar() {
  return (
    <Flex h={[null, '93vh']} bgImage="/fundoSobre.svg">
      <Flex bg="bgFundoSobre2" w="100%">
        <SimpleGrid columns={[1, 2]} w="100%">
          <Flex
            direction="column"
            align="center"
            justify="center"
            my={['1.5rem', null]}
          >
            <Text
              mb="1rem"
              fontWeight="bold"
              fontSize={['1.5rem', '1.9rem']}
              w={['20rem', '26rem']}
              textAlign="center"
            >
              O que eu preciso levar para o acampamento?
            </Text>
            <Flex
              w={['25rem', '28.44rem']}
              h={['36rem', '28.75rem']}
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
              textAlign="center"
              fontSize={['1.5rem', '2rem']}
              w={['20rem', '27rem']}
            >
              Imagens obtidas com nosso super telescópio!
            </Text>
            <SimpleGrid
              columns={[2, 2]}
              spacing={10}
              w={['23rem', '28rem']}
              h={['30rem', '28rem']}
              mb="2rem"
              ml={['2rem', null]}
            >
              <Flex
                direction="column"
                w={['9rem', '12rem']}
                h="12rem"
                borderRadius="100%"
              >
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
              <Flex
                direction="column"
                w={['9rem', '12rem']}
                h="12rem"
                borderRadius="100%"
              >
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
              <Flex
                direction="column"
                w={['9rem', '12rem']}
                h="12rem"
                borderRadius="100%"
              >
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
              <Flex
                direction="column"
                w={['9rem', '12rem']}
                h="12rem"
                borderRadius="100%"
              >
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
