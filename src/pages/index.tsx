import { Box, Divider, Icon, Text } from '@chakra-ui/react';
import { Cronograma } from '../components/Cronograma';
import { Depoimentos } from '../components/Depoimentos/Index';
import { Faqs } from '../components/Faqs';
import { Footer } from '../components/Footer';
import { Header } from '../components/Header';
import { Inicio } from '../components/Inicio';
import { OQLevar } from '../components/OQueLevar';
import { Preco } from '../components/Preco';
import { Sobre } from '../components/Sobre';

export default function Home() {
  return (
    <Box overflowX="hidden">
      <Header />
      <Box mx="auto">
        <Inicio />
        <Sobre />
        <Cronograma />
        <Depoimentos />
        <Preco />
        <OQLevar />
        <Faqs />
        <Footer />
      </Box>
    </Box>
  );
}
