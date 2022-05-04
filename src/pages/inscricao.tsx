import { Box, Divider, Flex, Text } from '@chakra-ui/react';
import Image from 'next/image';
import { useState } from 'react';
import { NavbarInscricao } from '../components/Header/NavbarInscricao';
import { InscricaoForm } from '../components/InscricaoForm';

export default function Inscricao() {
  const [valuePix, setValuePix] = useState(185);
  const [qtd, setQtd] = useState(1);
  const [kid, setKid] = useState(0);
  const [adult, setAdult] = useState(1);
  const [pagando, setPagando] = useState(false);

  // async function fetchData() {
  //   if (pagando) {
  //     const response = await api.post('/inscricao');
  //   }
  // }

  // useEffect(() => {
  //   fetchData();
  // }, [pagando]);
  return (
    <Box overflowX="hidden">
      <NavbarInscricao />
      <Flex h="91vh">
        <Flex
          // align="center"
          // justify="center"
          w="100vw"
          // border="1px"
          // borderColor="white"
        >
          <InscricaoForm
            setPropsValue={setValuePix}
            setPropsQtd={setQtd}
            setPropsKid={setKid}
            setPropsAdult={setAdult}
            setPropsPagando={setPagando}
            valueProps={valuePix}
            qtdProps={qtd}
            kidProps={kid}
            adultProps={adult}
            pagandoProps={pagando}
          />
        </Flex>
        <Box w="55vw">
          <Box
            bg="gray.700"
            w="30vw"
            h="91vh"
            borderRadius="0.3rem"
            position="fixed"
          >
            <Flex direction="column" align="center">
              <Box mt="1rem">
                <Image src="/logo.png" width="57" height="57" />
              </Box>
              <Text fontWeight="bold">Noite nas Estrelas</Text>
              <Text fontSize="sm" color="gray.400" mt="0.7rem">
                Inscrições: {qtd}
              </Text>
            </Flex>
            <Divider mt="2rem" w="23rem" mx="auto" />

            <Flex direction="column" mt="1rem" w="21rem" ml="3.7rem">
              <Flex justify="space-between">
                <Text fontSize="xs" color="gray.400">
                  Criança (0 a 4 anos)
                </Text>
                <Text fontSize="xs" color="gray.400">
                  R$ 0,00
                </Text>
              </Flex>
              <Flex justify="space-between">
                <Text fontSize="xs" color="gray.400">
                  Criança/Jovem (5 a 15 anos)
                </Text>
                <Text fontSize="xs" color="gray.400">
                  R$ {kid * 135},00
                </Text>
              </Flex>
              <Flex justify="space-between">
                <Text fontSize="xs" color="gray.400">
                  Adulto
                </Text>
                <Text fontSize="xs" color="gray.400">
                  R$ {adult * 185},00
                </Text>
              </Flex>
            </Flex>
            <Flex justify="space-between">
              <Text fontSize="lg" mt="1.3rem" ml="3rem" fontWeight="bold">
                Você Pagará:
              </Text>
              <Text
                fontSize="xl"
                mt="1.3rem"
                mr="3rem"
                color="orange.400"
                fontWeight="bold"
              >
                R$ {valuePix},00
              </Text>
            </Flex>
            <Divider mt="1.5rem" w="23rem" mx="auto" />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
}
