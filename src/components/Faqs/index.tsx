import { Box, Flex, SimpleGrid, Text } from '@chakra-ui/react';
import { Perguntas } from './Perguntas';

export function Faqs() {
  return (
    <SimpleGrid h={[null, '43.75rem']} bg="bgGray" columns={[1, 2]}>
      <Flex direction="column">
        <Text
          mt={['3rem', '5rem']}
          mb={['2rem', null]}
          textAlign="center"
          fontSize={['2rem', '2.25rem']}
          fontWeight="bold"
        >
          Perguntas Frequentes
        </Text>
      </Flex>
      <Flex align="center">
        <Perguntas />
      </Flex>
    </SimpleGrid>
  );
}
