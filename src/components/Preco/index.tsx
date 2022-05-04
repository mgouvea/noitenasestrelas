import {
  Button,
  Divider,
  Flex,
  Link,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';

export function Preco() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex direction="column" h={[null, '465px']} bgImage="/fundoSobre.svg">
      <Flex
        direction="column"
        bg="bgFundoPreco"
        h={[null, '465px']}
        justify="center"
        align="center"
      >
        <Text
          fontSize={['2rem', '2.25rem']}
          mb={['1rem', '2.2rem']}
          mt={['2rem', null]}
          fontWeight="bold"
        >
          Quero Participar!
        </Text>

        {/* GRID 1 */}
        <SimpleGrid
          columns={[1, 3]}
          py={['1rem', null]}
          spacing={[5, 10]}
          w={['300px', '1118px']}
        >
          <Flex
            direction="column"
            color="highlighticons"
            bg="iceWhite"
            borderRadius="0.3rem"
            align="center"
            pt={['1.3rem', '1.7rem']}
            h={['160px', '180px']}
          >
            <Text fontWeight="bold" fontSize={['1.4rem', '1.625rem']}>
              Baby
            </Text>
            <Text fontWeight="400" fontSize={['0.85rem', '0.88rem']}>
              (Até 4 anos)
            </Text>
            <Divider w="12rem" mt="0.5rem" borderColor="highlighticons" />
            <Text
              fontSize={['1.7rem', '2rem']}
              color="orange.500"
              fontWeight="bold"
            >
              R$ Zero
            </Text>
          </Flex>
          <Flex
            direction="column"
            color="highlighticons"
            bg="iceWhite"
            borderRadius="0.3rem"
            align="center"
            pt={['1.3rem', '1.7rem']}
            h={['160px', '180px']}
          >
            <Text fontWeight="bold" fontSize={['1.4rem', '1.625rem']}>
              Criança
            </Text>
            <Text fontWeight="400" fontSize={['0.85rem', '0.88rem']}>
              (Entre 5 e 14 anos)
            </Text>
            <Divider w="12rem" mt="0.5rem" borderColor="highlighticons" />
            <Text
              fontSize={['1.7rem', '2rem']}
              color="orange.500"
              fontWeight="bold"
            >
              R$ 135,00
            </Text>
            <Text fontWeight="bold" fontSize={['1.1rem', '1.25rem']}>
              PIX
            </Text>
          </Flex>
          <Flex
            direction="column"
            color="highlighticons"
            bg="iceWhite"
            borderRadius="0.3rem"
            align="center"
            pt={['1.3rem', '1.7rem']}
            h={['160px', '180px']}
          >
            <Text fontWeight="bold" fontSize={['1.4rem', '1.625rem']}>
              Adulto
            </Text>
            <Text fontWeight="400" fontSize={['0.85rem', '0.88rem']}>
              (maior de 14 anos)
            </Text>
            <Divider w="12rem" mt="0.5rem" borderColor="highlighticons" />
            <Text
              fontSize={['1.7rem', '2rem']}
              color="orange.500"
              fontWeight="bold"
            >
              R$ 185,00
            </Text>
            <Text fontWeight="bold" fontSize={['1.1rem', '1.25rem']}>
              PIX
            </Text>
          </Flex>
        </SimpleGrid>

        {/* GRID 2 */}
        {isWideVersion ? (
          <SimpleGrid
            columns={[1, 3]}
            py={['1rem', null]}
            spacing={[5, 10]}
            w={['300px', '1118px']}
          >
            <Flex w="300px" align="center" ml="1.7rem">
              <Text
                fontSize="1.5rem"
                textAlign="center"
                fontWeight="bold"
                lineHeight="1.55rem"
              >
                Venha conhecer o universo com a gente!
              </Text>
            </Flex>
            <Flex w="300px" align="center" justify="center" ml="1.7rem">
              <Link
                href="https://docs.google.com/forms/d/e/1FAIpQLSc0r0j_suHnpDARrOl71udxz3x0pPqHgofZD5xM9xVX-F9bzg/viewform"
                isExternal
                _hover={{ textDecoration: 'none' }}
              >
                <Button colorScheme="blue" fontSize="3xl">
                  Inscreva-se
                </Button>
              </Link>
            </Flex>
            <Flex
              w="300px"
              align="center"
              justify="center"
              ml="1.7rem"
              direction="column"
            >
              <Text
                fontSize="1.25rem"
                textAlign="center"
                fontWeight="bold"
                lineHeight="1.55rem"
              >
                PROMOÇÃO
              </Text>
              <Text
                fontSize="1.25rem"
                textAlign="center"
                fontWeight="bold"
                lineHeight="1.55rem"
              >
                Forme um grupo de 10 pessoas e ganhe 1 cortesia
              </Text>
            </Flex>
          </SimpleGrid>
        ) : (
          <SimpleGrid
            columns={[1, 3]}
            py={['1rem', null]}
            spacing={[7, 10]}
            w={['300px', '1118px']}
          >
            <Flex w="300px" align="center">
              <Text
                fontSize="1.5rem"
                textAlign="center"
                fontWeight="bold"
                lineHeight="1.55rem"
              >
                Venha conhecer o universo com a gente!
              </Text>
            </Flex>

            <Flex w="300px" align="center" justify="center" direction="column">
              <Text
                fontSize="1.25rem"
                textAlign="center"
                fontWeight="bold"
                lineHeight="1.55rem"
              >
                PROMOÇÃO
              </Text>
              <Text
                fontSize="1.25rem"
                textAlign="center"
                fontWeight="bold"
                lineHeight="1.55rem"
              >
                Forme um grupo de 10 pessoas e ganhe 1 cortesia
              </Text>
            </Flex>
            <Flex w="300px" align="center" justify="center">
              <Button colorScheme="blue" fontSize="3xl">
                Inscreva-se
              </Button>
            </Flex>
          </SimpleGrid>
        )}
      </Flex>
    </Flex>
  );
}
