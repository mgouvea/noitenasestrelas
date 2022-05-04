import {
  Box,
  Button,
  Flex,
  Icon,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';
import { telescopeIcon } from '../../utils/icons';

export function NavbarInscricao() {
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });
  return (
    <Flex
      // position="fixed"
      // borderColor="gray.200"
      bg="blackAlpha.500"
      zIndex="2"
      w="100vw"
      justify="center"
    >
      <Flex
        justify="space-between"
        align="center"
        w="100vw"
        height={66}
        px="5rem"
        // border="1px"
        // borderColor="white"
      >
        <Box>
          <Link href="/" passHref>
            <a>
              <Button
                // as="a"
                // size="sm"
                mt="0.2rem"
                fontSize="lg"
                variant="link"
                _hover={{ textDecoration: 'none' }}
                colorScheme="white"
                // bgGradient="linear(to-r, teal.400, teal.500, teal.600)"
                leftIcon={
                  // <Icon
                  //   as={telescopeIcon}
                  //   fontSize={isWideVersion ? '6xl' : '3xl'}
                  // />
                  <Image src="/logo.png" width="53" height="53" />
                }
              >
                <Text ml="0.5rem">Noite nas Estrelas</Text>
              </Button>
            </a>
          </Link>
        </Box>
        {/* <Button
          cursor="pointer"
          // _hover={{ color: 'highlightDay' }}
          colorScheme="blue"
        >
          Inscrição
        </Button> */}
        <Link href="/inscricao" passHref>
          <a>
            <Button
              // as="a"
              size="sm"
              // fontSize="sm"
              colorScheme="blue"
              // bgGradient="linear(to-r, blue.400, blue.500, blue.600)"
            >
              Contato
            </Button>
          </a>
        </Link>
      </Flex>
    </Flex>
  );
}
