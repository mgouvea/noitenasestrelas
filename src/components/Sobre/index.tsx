import {
  Box,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import {
  barracaIcon,
  fogueiraIcon,
  fogueiraIcon1,
  jantaIcon,
  natureIcon,
  saturnoIcon,
  superTelescopeIcon,
} from '../../utils/icons';

export function Sobre() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box
      // h="100%"
      bgImage="/fundoSobre.svg"
      borderTop="1px"
      borderColor="orange.500"
    >
      <Box bg="rgba(33,80,116,0.5)" pb="0.5rem">
        {/* imagem e texto */}

        <Flex justify="center" pt="2rem">
          <SimpleGrid columns={[1, null, 2]}>
            {isWideVersion ? (
              <Box>
                <Image src="/imgSobre.png" width="570px" height="355px" />
              </Box>
            ) : (
              <Box px="1.5rem">
                <Image src="/imgSobre.png" width="370px" height="255px" />
              </Box>
            )}
            <Flex
              direction="column"
              w={['22rem', '28.4rem']}
              ml={['1.2rem', '5rem']}
              align="center"
              mt="1rem"
            >
              <Heading
                mt="1rem"
                fontWeight="bold"
                fontSize={['1.5rem', '2.125rem']}
              >
                Uma experiência incrível
              </Heading>
              <Text
                textAlign="justify"
                mt={['0.5rem', '1rem']}
                fontSize="1rem"
                px={['1rem', null]}
              >
                Imagine um lugar afastado das luzes da cidade, onde pais, mãs e
                suas crianças possam observar as belezas de um céu super
                estrelado! A Noite nas Estrelas é um acampamento astronômico que
                acontece todos os anos na cidade de Brasília - DF. A atividade
                tem marcado o coração de muitas famílias, nesse magnifico
                momento de contato com a natureza celeste. Oportunidade única
                para quem quer aproveitar um final de semana de paz e
                tranquilidade e aprender um pouco mais sobre o universo!
              </Text>
            </Flex>
          </SimpleGrid>
        </Flex>

        {/* oque oferece */}
        <Box>
          <Flex justify="center" align="center" direction="column" mb="1rem">
            <Text
              mt={['3rem', '1rem']}
              mb="1rem"
              textAlign={['center', null]}
              fontSize={['1.5rem', '2.125rem']}
              fontWeight="bold"
            >
              O que a Noite nas estrelas oferece?
            </Text>
            <SimpleGrid
              columns={[1, null, 3]}
              spacing="1.5rem"
              color="blue.500"
            >
              <Box bg="iceWhite" w="280px" h="140px" borderRadius="0.3rem">
                <Flex justify="center">
                  <Icon as={barracaIcon} color="#B0BE5F" fontSize="6xl" />
                </Flex>
                <Flex direction="column" align="center">
                  <Text fontWeight="bold" fontSize="1rem">
                    Camping
                  </Text>
                  <Text
                    textAlign="center"
                    fontSize="0.875rem"
                    mx="1rem"
                    fontWeight="400"
                    lineHeight="1rem"
                  >
                    Área gramada com banheiros, estacionamento etc.
                  </Text>
                </Flex>
              </Box>
              <Box bg="iceWhite" w="280px" h="140px" borderRadius="0.3rem">
                <Flex justify="center">
                  <Icon as={saturnoIcon} fontSize="6xl" />
                </Flex>
                <Flex direction="column" align="center">
                  <Text fontWeight="bold" fontSize="1rem">
                    Atividade Astronômica
                  </Text>
                  <Text
                    textAlign="center"
                    fontSize="xs"
                    mx="0.2rem"
                    fontWeight="400"
                    lineHeight="1rem"
                  >
                    Momento simplesmente inesquecível! Observação celeste guiada
                    pelo instrutuor.
                  </Text>
                </Flex>
              </Box>
              <Box bg="iceWhite" w="280px" h="140px" borderRadius="0.3rem">
                <Flex justify="center">
                  <Icon as={superTelescopeIcon} fontSize="6xl" />
                </Flex>
                <Flex direction="column" align="center">
                  <Text fontWeight="bold" fontSize="1rem">
                    Super Telescópio
                  </Text>
                  <Text
                    textAlign="center"
                    fontSize="xs"
                    mx="0.2rem"
                    fontWeight="400"
                    lineHeight="1rem"
                  >
                    Telescópios de altíssima qualidade, para a observação da
                    Lua, Júpiter, Saturno etc.
                  </Text>
                </Flex>
              </Box>
              <Box bg="iceWhite" w="280px" h="140px" borderRadius="0.3rem">
                <Flex justify="center">
                  <Icon as={jantaIcon} fontSize="6xl" />
                </Flex>
                <Flex direction="column" align="center">
                  <Text fontWeight="bold" fontSize="1rem">
                    Alimentação
                  </Text>
                  <Text
                    textAlign="center"
                    fontSize="xs"
                    mx="1rem"
                    fontWeight="400"
                    lineHeight="1rem"
                  >
                    Jantar e café da manhã feitos com muito amor e carinho.
                  </Text>
                </Flex>
              </Box>
              <Box bg="iceWhite" w="280px" h="140px" borderRadius="0.3rem">
                <Flex justify="center">
                  <Icon as={natureIcon} fontSize="6xl" />
                </Flex>
                <Flex direction="column" align="center">
                  <Text fontWeight="bold" fontSize="1rem">
                    Natureza
                  </Text>
                  <Text
                    textAlign="center"
                    fontSize="xs"
                    mx="0.1rem"
                    fontWeight="400"
                    lineHeight="1rem"
                  >
                    Belíssima chácara com cerrado nativo. Local de paz,
                    tranquilidade e um céu super estrelado.
                  </Text>
                </Flex>
              </Box>
              <Box bg="iceWhite" w="280px" h="140px" borderRadius="0.3rem">
                <Flex justify="center">
                  <Icon as={fogueiraIcon1} fontSize="6xl" />
                </Flex>
                <Flex direction="column" align="center">
                  <Text fontWeight="bold" fontSize="1rem">
                    Fogueira
                  </Text>
                  <Text
                    textAlign="center"
                    fontSize="xs"
                    mx="0.2rem"
                    fontWeight="400"
                    lineHeight="1rem"
                  >
                    Momento especial para se aquecer ao calor do fogo, assar
                    batatas e marshmallows.
                  </Text>
                </Flex>
              </Box>
            </SimpleGrid>
          </Flex>
        </Box>
      </Box>
    </Box>
  );
}
