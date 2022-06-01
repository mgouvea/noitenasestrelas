import {
  Box,
  chakra,
  Container,
  Flex,
  Link,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from '@chakra-ui/react';
import { FaInstagram } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { BsWhatsapp } from 'react-icons/bs';

import { ReactNode } from 'react';
import Image from 'next/image';

const SocialButton = ({
  children,
  label,
  href,
}: {
  children: ReactNode;
  label: string;
  href: string;
}) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}
    >
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  );
};

export function Footer() {
  const currentTime = new Date();
  const anoAtual = currentTime.getFullYear();
  return (
    <Box bg="blackAlpha.700" color="iceWhite" fontWeight="500">
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        spacing={4}
        justify={'center'}
        align={'center'}
      >
        <Flex align="center" px="1rem" justify="space-between">
          <Image src="/logo.png" width="50" height="50" />
          <Text ml="1rem">Noite nas Estrelas</Text>
        </Flex>
        <Stack direction={'row'} spacing={6}>
          <Link href={'#'} _hover={{ color: 'highlighticons' }}>
            Início
          </Link>
          <Link href={'#'} _hover={{ color: 'highlighticons' }}>
            Sobre
          </Link>
          <Link href={'#'} _hover={{ color: 'highlighticons' }}>
            Cronograma
          </Link>
          <Link href={'#'} _hover={{ color: 'highlighticons' }}>
            FAQ
          </Link>
          <Link href={'#'} _hover={{ color: 'highlighticons' }}>
            Contato
          </Link>
        </Stack>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}
      >
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ base: 'center', md: 'space-between' }}
          align={{ base: 'center', md: 'center' }}
        >
          <Flex fontWeight="400">
            <Text mr="0.2rem">©</Text>
            {anoAtual}
            <Text ml="0.3rem">Noite nas Estrelas. All rights reserved</Text>
          </Flex>
          <Stack direction={'row'} spacing={6}>
            <Link
              href={'https://www.instagram.com/noitenasestrelas/'}
              isExternal
            >
              <FaInstagram />
            </Link>
            {/* <Link href={'#'} isExternal>
              <MdEmail />
            </Link> */}
            <Link
              href={
                'https://api.whatsapp.com/send?phone=5561998568926&text=Ol%C3%A1%2C%20quero%20saber%20mais%20informa%C3%A7%C3%B5es%20sobre%20a%20Noite%20nas%20Estrelas!'
              }
              isExternal
            >
              <BsWhatsapp />
            </Link>
          </Stack>
        </Container>
      </Box>
    </Box>
  );
}
