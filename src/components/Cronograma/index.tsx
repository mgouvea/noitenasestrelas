import {
  Box,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import { Gallery } from './Gallery';

export function Cronograma() {
  return (
    <Flex direction="column" h="44rem" bg="iceWhite">
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
            <SimpleGrid columns={8} spacing={10}>
              <Flex direction="column" w="80px" h="70px" justify="center">
                <Text fontWeight="bold" textAlign="center">
                  Dia 1
                </Text>
                <Text fontWeight="400" textAlign="center">
                  (Sábado)
                </Text>
              </Flex>
              <Box border="1px" borderColor="black" w="75px" h="75px"></Box>
              <Box border="1px" borderColor="black" w="75px" h="75px"></Box>
              <Box border="1px" borderColor="black" w="75px" h="75px"></Box>
              <Box border="1px" borderColor="black" w="75px" h="75px"></Box>
              <Box border="1px" borderColor="black" w="75px" h="75px"></Box>
              <Box border="1px" borderColor="black" w="75px" h="75px"></Box>
              <Box border="1px" borderColor="black" w="75px" h="75px"></Box>
            </SimpleGrid>
            <Divider my="6" borderColor="black" />
            {/* Dia 2 */}
            <SimpleGrid columns={8} spacing={10}>
              <Flex direction="column" w="80px" h="70px" justify="center">
                <Text fontWeight="bold" textAlign="center">
                  Dia 2
                </Text>
                <Text fontWeight="400" textAlign="center">
                  (Domingo)
                </Text>
              </Flex>
              <Box border="1px" borderColor="black" w="70px" h="70px"></Box>
              <Box border="1px" borderColor="black" w="70px" h="70px"></Box>
              <Box border="1px" borderColor="black" w="70px" h="70px"></Box>
              <Box border="1px" borderColor="black" w="70px" h="70px"></Box>
              <Box border="1px" borderColor="black" w="70px" h="70px"></Box>
              <Box border="1px" borderColor="black" w="70px" h="70px"></Box>
              <Box border="1px" borderColor="black" w="70px" h="70px"></Box>
            </SimpleGrid>
          </SimpleGrid>
        </Flex>
      </SimpleGrid>
    </Flex>
  );
}
