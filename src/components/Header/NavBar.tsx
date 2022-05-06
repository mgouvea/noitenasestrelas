import { ReactNode } from 'react';
import Scroll from 'react-scroll';
const ScrollLink = Scroll.ScrollLink;
import {
  Box,
  Flex,
  HStack,
  Link as ChakraLink,
  IconButton,
  Button,
  useDisclosure,
  Stack,
  Image,
  Text,
  useBreakpointValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';
import Link from 'next/link';
// import Link from 'next/link';

const Links = ['Início', 'Sobre', 'Cronograma', 'FAQ', 'Contato'];
const ids = ['inicio', 'sobre', 'cronograma', 'faq', 'contato'];

const NavLink = ({ children }: { children: ReactNode }) => (
  <ChakraLink
    px={2}
    py={1}
    rounded={'md'}
    _hover={{
      textDecoration: 'none',
      bg: 'highlighticons',
    }}
    fontSize="0.93rem"
    href={'#'}
  >
    {children}
  </ChakraLink>
);

export function NavBar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Box bg={'blackAlpha.600'} px={4}>
      <Flex h={16} alignItems={'center'} justifyContent={'space-between'}>
        <IconButton
          size={'md'}
          icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
          aria-label={'Open Menu'}
          colorScheme="blue"
          display={{ md: 'none' }}
          onClick={isOpen ? onClose : onOpen}
        />
        {isWideVersion ? (
          <HStack spacing={8} alignItems={'center'} ml="5rem">
            <Flex align="center">
              <Image src="/logo.png" width="53" height="53" />
              <Text
                color="white"
                fontSize="lg"
                fontWeight="semibold"
                cursor="pointer"
                ml="1rem"
              >
                Noite nas Estrelas
              </Text>
            </Flex>
          </HStack>
        ) : null}

        <Flex alignItems={'center'}>
          <HStack
            mr="1rem"
            as={'nav'}
            spacing={10}
            display={{ base: 'none', md: 'flex' }}
            // border="1px"
          >
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </HStack>
          {isWideVersion ? (
            <Link
              href="https://docs.google.com/forms/d/e/1FAIpQLSc0r0j_suHnpDARrOl71udxz3x0pPqHgofZD5xM9xVX-F9bzg/viewform"
              passHref
            >
              <a target="_blank">
                <Button
                  as="a"
                  variant={'solid'}
                  colorScheme={'blue'}
                  size={'sm'}
                  mr={4}
                  // leftIcon={<AddIcon />}
                >
                  Inscrição
                </Button>
              </a>
            </Link>
          ) : (
            <HStack spacing={8} alignItems={'center'}>
              <Flex align="center">
                <Image src="/logo.png" width="49" height="49" />
              </Flex>
            </HStack>
          )}
        </Flex>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>
            {Links.map((link) => (
              <NavLink key={link}>{link}</NavLink>
            ))}
          </Stack>
        </Box>
      ) : null}
    </Box>
  );
}
