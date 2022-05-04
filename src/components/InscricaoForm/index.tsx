import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  HStack,
  SimpleGrid,
  Text,
  useBoolean,
  useBreakpointValue,
  useToast,
  VStack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Icon,
  IconButton,
} from '@chakra-ui/react';
import { GetServerSideProps } from 'next';
import * as yup from 'yup';
import { SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Link from 'next/link';
import { Input } from '../Forms/Input';
import { TextAreaInput } from '../Forms/TextAreaInput';
import { useState } from 'react';
import { SelectInput } from '../Forms/SelectInput';
import { AiOutlinePlus as plus } from 'react-icons/ai';

const createInscricaoFormSchema = yup.object().shape({
  nome: yup.string().required('Nome obrigatório'),
  email: yup.string().email().required('Email obrigatório'),
  idade: yup.string().required('Idade obrigatória'),
  cpf: yup.string().required('CPF obrigatório'),
  ddd: yup.string().required('DDD obrigatório'),
  celular: yup.string().required('Celular (Whatsapp) obrigatório'),
  participacao: yup.string().required('Selecione uma opção'),
  meioComunica: yup.string().required('Selecione uma opção'),
});

type CreateInscricaoForm = {
  nome: string;
  email: string;
  idade: number;
  cpf: string;
  celular: string;
  nome2?: string;
  idade2?: number;
  nome3?: string;
  idade3?: number;
  nome4?: string;
  idade4?: number;
  nome5?: string;
  idade5?: number;
  nome6?: string;
  idade6?: number;
  nome7?: string;
  idade7?: number;
  nome8?: string;
  idade8?: number;
  nome9?: string;
  idade9?: number;
  nome10?: string;
  idade10?: number;
  nome11?: string;
  idade11?: number;
  nome12?: string;
  idade12?: number;
  nome13?: string;
  idade13?: number;
  nome14?: string;
  idade14?: number;
  nome15?: string;
  idade15?: number;
  nome16?: string;
  idade16?: number;
  nome17?: string;
  idade17?: number;
  nome18?: string;
  idade18?: number;
  nome19?: string;
  idade19?: number;
  nome20?: string;
  idade20?: number;
  comunicacao: string;
  meioComunicacao: string;
  obs?: string;
};

const participacaoPlural = [
  'Sim, todos nós já participamos',
  'Alguns de nós já participaram',
  'Não, nenhum de nós participou',
];
const participacaoSing = ['Sim, já participei', 'Não, primeira vez'];
const meioComunica = ['Roteiro Baby', 'Um amigo(a) me falou', 'Instagram'];

export function InscricaoForm({
  setPropsValue,
  setPropsQtd,
  setPropsKid,
  setPropsAdult,
  setPropsPagando,
  valueProps,
  qtdProps,
  kidProps,
  adultProps,
  pagandoProps,
}) {
  const [counter, setCounter] = useState(1);
  const [newUser, setNewUser] = useState([]);
  const [value, setValue] = useState();
  const [qtd, setQtd] = useState();
  const [valueAge, setValueAge] = useState(0);
  const [kid, setKid] = useState(0);
  const [adult, setAdult] = useState(0);
  const [pagando, setPagando] = useState(false);

  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(createInscricaoFormSchema),
  });

  const { errors } = formState;

  const handleCreateInscricao: SubmitHandler<CreateInscricaoForm> = async (
    values
  ) => {
    // console.log(values);
    setPagando(pagandoProps);
    setPropsPagando(true);
    // await new Promise((resolve) => setTimeout(resolve, 1000));
    // const formatterValues = {
    //   // cod: Number(values.cod),
    //   // tipoMariri: values.tipoMariri,
    //   // tipoChacrona: values.tipoChacrona,
    //   // qtd: Number(values.qtd),
    //   // dataPreparo: new Date(values.dataPreparo),
    //   // dataEntrada: new Date(values.dataEntrada),
    //   // npreparo: values.npreparo,
    //   // mpreparo: values.mpreparo,
    //   // origemMariri: values.origemMariri,
    //   // origemChacrona: values.origemChacrona,
    //   // obs: values.obs,
    //   // qtdAtual: Number(values.qtd),
    // };
    // try {
    //   // console.log(values);
    //   // if (data.map((i) => i.cod).includes(formatterValues.cod)) {
    //   //   toast({
    //   //     title: `ID ${formatterValues.cod} já cadastrado!`,
    //   //     status: 'error',
    //   //     isClosable: true,
    //   //   });
    //   // }
    //   // else {
    //   //   await createVegetal.mutateAsync(formatterValues);
    //   //   toast({
    //   //     title: `Vegetal ${formatterValues.cod} cadastrado com sucesso!`,
    //   //     status: 'success',
    //   //     isClosable: true,
    //   //   });
    //   //   routes.push('/vegetal');
    //   // }
    // } catch (err) {
    //   console.log('error', err.message);
    // }
  };

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  function handleMinusCounter() {
    if (counter === 1) {
      return;
    }
    setCounter(1);
    setNewUser([]);
    setValue(valueProps);

    setPropsValue(185);
    setPropsQtd(1);
    setPropsKid(0);
    setPropsAdult(1);
  }
  // function handlePlusCounter() {
  //   console.log('object', valueAge);
  //   setCounter(counter + 1);
  //   setNewUser([...newUser, '']);
  //   setValue(valueProps);
  //   setPropsValue(valueProps + valueAge);
  // }

  return (
    <Flex w="100%">
      <Box
        as="form"
        flex="1"
        borderRadius={8}
        // bg="blue.800"
        p={['6', '8']}
        onSubmit={handleSubmit(handleCreateInscricao)}
      >
        <Heading size="sm" fontWeight="normal">
          {isWideVersion ? (
            <HStack justify="space-between">
              <Text>Participantes</Text>
              <Flex>
                <Button
                  colorScheme="red"
                  size="sm"
                  onClick={handleMinusCounter}
                >
                  Limpar
                </Button>
                <Text fontSize="md" p="0.5rem">
                  {counter}
                </Text>
                {/* <Button
                  colorScheme="orange"
                  size="sm"
                  onClick={handlePlusCounter}
                >
                  +
                </Button> */}
                <Menu autoSelect={false}>
                  <MenuButton
                    colorScheme="orange"
                    as={IconButton}
                    aria-label="Options"
                    icon={<Icon as={plus} />}
                    variant="solid"
                    size="sm"
                  />
                  <MenuList bg="gray.700">
                    <MenuItem
                      _hover={{ bg: 'gray.600' }}
                      onClick={() => {
                        setValueAge(0);
                        setCounter(counter + 1);
                        setNewUser([...newUser, '']);
                        setValue(valueProps);
                        setPropsValue(valueProps + 0);
                        setQtd(qtdProps);
                        setPropsQtd(qtdProps + 1);
                      }}
                    >
                      Criança (0 a 4 anos)
                    </MenuItem>
                    <MenuItem
                      _hover={{ bg: 'gray.600' }}
                      onClick={() => {
                        setValueAge(135);
                        setCounter(counter + 1);
                        setNewUser([...newUser, '']);
                        setValue(valueProps);
                        setPropsValue(valueProps + 135);
                        setQtd(qtdProps);
                        setPropsQtd(qtdProps + 1);
                        setKid(kidProps);
                        setPropsKid(kidProps + 1);
                      }}
                    >
                      Criança (5 a 15 anos)
                    </MenuItem>
                    <MenuItem
                      _hover={{ bg: 'gray.600' }}
                      onClick={() => {
                        setCounter(counter + 1);
                        setNewUser([...newUser, '']);
                        setValue(valueProps);
                        setPropsValue(valueProps + 185);
                        setQtd(qtdProps);
                        setPropsQtd(qtdProps + 1);
                        setAdult(adultProps);
                        setPropsAdult(adultProps + 1);
                      }}
                    >
                      Adulto
                    </MenuItem>
                  </MenuList>
                </Menu>
              </Flex>
            </HStack>
          ) : (
            <Text>Participantes</Text>
          )}
        </Heading>
        <Divider my="6" borderColor="white" />
        <VStack>
          <SimpleGrid minChildWidth="200px" spacing={['6', '8']} w="100%">
            <Input
              name="nome"
              label="Nome Completo"
              {...register('nome')}
              error={errors.nome}
            />
            <Input
              name="Email"
              type="email"
              label="Email"
              {...register('email')}
              error={errors.email}
            />
          </SimpleGrid>

          <SimpleGrid minChildWidth="240px" spacing={['6', '8']} w="100%">
            <Input
              name="idade"
              label="Idade"
              type="number"
              step="1"
              min="0"
              // width="7rem"
              {...register('idade')}
              error={errors.idade}
            />
            <Input
              name="cpf"
              label="CPF"
              {...register('cpf')}
              error={errors.cpf}
            />
            <Flex>
              <Input
                name="ddd"
                label="DDD"
                width="4rem"
                {...register('ddd')}
                error={errors.ddd}
              />
              <Input
                name="celular"
                label="Celular (Whatsapp)"
                width="13rem"
                {...register('celular')}
                error={errors.celular}
              />
            </Flex>
          </SimpleGrid>
          {newUser.map((i, idx) => (
            <>
              <Flex width="100%" pt="1rem">
                <Text fontSize="sm">{`Participante ${idx + 2}`}</Text>
              </Flex>
              <Divider my="6" borderColor="white" />
              <SimpleGrid minChildWidth="200px" spacing={['6', '8']} w="100%">
                <Input
                  name="nome"
                  label="Nome Completo"
                  {...register(`nome${idx + 2}`)}
                  error={errors.nome}
                />
                <Input
                  name="idade"
                  label="Idade"
                  type="number"
                  step="1"
                  min="0"
                  // width="7rem"
                  {...register(`idade${idx + 2}`)}
                  error={errors.idade2}
                />
              </SimpleGrid>
            </>
          ))}
        </VStack>
        <Flex direction="column" mt="2rem">
          <Text>Perguntas Gerais</Text>
          <Divider my="6" borderColor="white" />
          <VStack>
            <SimpleGrid minChildWidth="200px" spacing={['6', '8']} w="100%">
              <SelectInput
                name="participacao"
                label={
                  counter > 1
                    ? 'Vocês já participaram da Noite nas Estrelas'
                    : 'Você já participou da Noite nas Estrelas'
                }
                optSelect={counter > 1 ? participacaoPlural : participacaoSing}
                {...register(`participacao`)}
                error={errors.participacao}
              />
              <SelectInput
                name="meioComunica"
                label={
                  counter > 1
                    ? 'Como vocês ficaram sabendo do Noite nas Estrelas'
                    : 'Como você ficou sabendo do Noite nas Estrelas'
                }
                optSelect={meioComunica}
                {...register(`meioComunica`)}
                error={errors.meioComunica}
              />
            </SimpleGrid>
            <SimpleGrid minChildWidth="200px" spacing={['6', '8']} w="100%">
              <TextAreaInput name="obs" label="Alguma observação importante?" />
            </SimpleGrid>
          </VStack>
        </Flex>
        <Flex mt="8" pb="3rem" justify="flex-end">
          <HStack spacing="4">
            <Button
              type="submit"
              isLoading={formState.isSubmitting}
              colorScheme="blue"
            >
              Gerar Pix
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Flex>
  );
}

// export const getServerSideProps: GetServerSideProps = async () => {
//   return {
//     props: {
//       name: 'Mateus',
//     },
//   };
// };
