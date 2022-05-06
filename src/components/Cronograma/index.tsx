import {
  Divider,
  Flex,
  Heading,
  Icon,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import {
  barracaIcon,
  cameraIcon,
  campIcon,
  carroIcon,
  coffeeIcon,
  fazendaIcon,
  fogueiraIcon,
  foodIcon,
  moonIcon,
  planetIcon,
  sunriseIcon,
} from '../../utils/icons';
import { Gallery } from './Gallery';

export function Cronograma() {
  return (
    <Flex direction="column" h="100%" bg="iceWhite">
      <SimpleGrid columns={1}>
        <Flex direction="column" pl="1rem" pr="1rem" pt="1rem">
          <Gallery />
        </Flex>
        <Flex direction="column" align="center" color="titleContrast" pb="1rem">
          <Heading fontSize="2.25rem" fontWeight="bold">
            Cronograma
          </Heading>

          <SimpleGrid spacing="1" mt="2rem">
            {/* Dia 1 */}
            <SimpleGrid columns={[2, 8]} spacing={[3, 10]} mx="auto">
              <Flex
                direction="column"
                w="80px"
                h="70px"
                // border="1px"
                justify="center"
                mt={['2rem', null]}
                ml={['1rem', null]}
              >
                <Text fontWeight="bold" textAlign="center">
                  Dia 1
                </Text>
                <Text fontWeight="400" textAlign="center">
                  (Sábado)
                </Text>
              </Flex>

              {/* 1 */}
              <Flex
                direction="column"
                borderColor="black"
                w="130px"
                h="130px"
                mb="1rem"
                align="center"
              >
                <Icon as={carroIcon} fontSize="6xl" />
                <Flex direction="column" mt="0.3rem">
                  <Text textAlign="center" fontWeight="bold">
                    15H
                  </Text>
                  <Text fontSize={['0.875rem', '0.9rem']} textAlign="center">
                    Saída do ponto de encontro
                  </Text>
                  <Text fontSize={['0.875rem', '0.9rem']} textAlign="center">
                    (Posto Colorado)
                  </Text>
                </Flex>
              </Flex>

              {/* 2 */}
              <Flex
                direction="column"
                borderColor="black"
                w="130px"
                h="130px"
                align="center"
                mb="1rem"
              >
                <Icon as={fazendaIcon} fontSize="6xl" />
                <Flex direction="column" mt="0.3rem">
                  <Text textAlign="center" fontWeight="bold">
                    15:30H
                  </Text>
                  <Text fontSize={['0.875rem', '0.9rem']} textAlign="center">
                    Chegada ao local / recepção
                  </Text>
                </Flex>
              </Flex>
              {/* 3 */}
              <Flex
                direction="column"
                borderColor="black"
                w="130px"
                h="130px"
                align="center"
                mb="1rem"
              >
                <Icon as={barracaIcon} fontSize="6xl" />
                <Flex direction="column" mt="0.3rem">
                  <Text textAlign="center" fontWeight="bold">
                    16H
                  </Text>
                  <Text fontSize={['0.875rem', '0.9rem']} textAlign="center">
                    Lanche e montagem do acampamento
                  </Text>
                </Flex>
              </Flex>
              {/* 4 */}
              <Flex
                direction="column"
                borderColor="black"
                w="130px"
                h="130px"
                align="center"
                mb="1rem"
              >
                <Icon as={planetIcon} fontSize="6xl" />
                <Flex direction="column" mt="0.3rem">
                  <Text textAlign="center" fontWeight="bold">
                    18:45H
                  </Text>
                  <Text fontSize={['0.875rem', '0.9rem']} textAlign="center">
                    Atividade astronômica
                  </Text>
                  <Text fontSize={['0.875rem', '0.9rem']} textAlign="center">
                    Parte A
                  </Text>
                </Flex>
              </Flex>
              {/* 5 */}
              <Flex
                direction="column"
                borderColor="black"
                w="130px"
                h="130px"
                align="center"
                mb="1rem"
              >
                <Icon as={foodIcon} fontSize="6xl" />
                <Flex direction="column" mt="0.3rem">
                  <Text textAlign="center" fontWeight="bold">
                    20H
                  </Text>
                  <Text fontSize={['0.875rem', '0.9rem']} textAlign="center">
                    Jantar
                  </Text>
                </Flex>
              </Flex>
              {/* 6 */}
              <Flex
                direction="column"
                borderColor="black"
                w="130px"
                h="130px"
                align="center"
                mb="1rem"
              >
                <Icon as={moonIcon} fontSize="6xl" />
                <Flex direction="column" mt="0.3rem">
                  <Text textAlign="center" fontWeight="bold">
                    21H
                  </Text>
                  <Text fontSize={['0.875rem', '0.9rem']} textAlign="center">
                    Atividade astronômica
                  </Text>
                  <Text fontSize={['0.875rem', '0.9rem']} textAlign="center">
                    Parte B
                  </Text>
                </Flex>
              </Flex>
              {/* 7 */}
              <Flex
                direction="column"
                borderColor="black"
                w="130px"
                h="130px"
                align="center"
                mb="1rem"
              >
                <Icon as={fogueiraIcon} fontSize="6xl" />
                <Flex direction="column" mt="0.3rem">
                  <Text textAlign="center" fontWeight="bold">
                    22H
                  </Text>
                  <Text fontSize={['0.875rem', '0.9rem']} textAlign="center">
                    Fogueira com roda de conversas
                  </Text>
                </Flex>
              </Flex>
            </SimpleGrid>
            <Divider my="6" borderColor="black" />
            {/* Dia 2 */}
            <SimpleGrid columns={[2, 8]} spacing={[3, 10]}>
              <Flex
                direction="column"
                w="80px"
                h="70px"
                justify="center"
                ml={['1rem', null]}
                mt={['1rem', null]}
              >
                <Text fontWeight="bold" textAlign="center">
                  Dia 2
                </Text>
                <Text fontWeight="400" textAlign="center">
                  (Domingo)
                </Text>
              </Flex>
              <Flex
                direction="column"
                borderColor="black"
                w="130px"
                h="130px"
                align="center"
              >
                <Icon as={sunriseIcon} fontSize="6xl" />
                <Flex direction="column" mt="0.3rem">
                  <Text textAlign="center" fontWeight="bold">
                    7H
                  </Text>
                  <Text fontSize="0.9rem" textAlign="center">
                    Despertar
                  </Text>
                </Flex>
              </Flex>
              <Flex
                direction="column"
                borderColor="black"
                w="130px"
                h="130px"
                align="center"
              >
                <Icon as={coffeeIcon} fontSize="6xl" />
                <Flex direction="column" mt="0.3rem">
                  <Text textAlign="center" fontWeight="bold">
                    7:30H
                  </Text>
                  <Text fontSize="0.9rem" textAlign="center">
                    Café da manhã
                  </Text>
                </Flex>
              </Flex>
              <Flex
                direction="column"
                borderColor="black"
                w="130px"
                h="130px"
                align="center"
              >
                <Icon as={campIcon} fontSize="6xl" />
                <Flex direction="column" mt="0.3rem">
                  <Text textAlign="center" fontWeight="bold">
                    9:30H
                  </Text>
                  <Text fontSize="0.9rem" textAlign="center">
                    Desmontagem do acampamento
                  </Text>
                </Flex>
              </Flex>
              <Flex
                direction="column"
                borderColor="black"
                w="130px"
                h="130px"
                align="center"
              >
                <Icon as={cameraIcon} fontSize="6xl" />
                <Flex direction="column" mt="0.3rem">
                  <Text textAlign="center" fontWeight="bold">
                    10H
                  </Text>
                  <Text fontSize="0.9rem" textAlign="center">
                    Foto com todos os participantes
                  </Text>
                </Flex>
              </Flex>
              <Flex
                direction="column"
                borderColor="black"
                w="130px"
                h="130px"
                align="center"
              >
                <Icon as={carroIcon} fontSize="6xl" />
                <Flex direction="column" mt="0.3rem">
                  <Text textAlign="center" fontWeight="bold">
                    10:45H
                  </Text>
                  <Text fontSize="0.9rem" textAlign="center">
                    Conclusão
                  </Text>
                </Flex>
              </Flex>
            </SimpleGrid>
          </SimpleGrid>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
