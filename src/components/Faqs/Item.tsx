import {
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
} from '@chakra-ui/react';

interface ItemProps {
  title: string;
  answer: string;
}

export function Item({ title, answer }: ItemProps) {
  return (
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box
            flex="1"
            textAlign="left"
            fontWeight="bold"
            fontSize={['lg', null]}
          >
            {title}
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel
        pb={4}
        bgImage="/fundoSobre.svg"
        color="gray.200"
        borderRadius="0.3rem"
      >
        <Flex m="-1rem" bg="bgFundoSobre2" p="1rem" borderRadius="0.3rem">
          {answer}
        </Flex>
      </AccordionPanel>
    </AccordionItem>
  );
}
