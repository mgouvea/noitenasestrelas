import {
  // List,
  ListItem,
  UnorderedList,
} from '@chakra-ui/react';

export function List() {
  return (
    <UnorderedList fontSize="1rem" fontWeight="400">
      <ListItem
        _hover={{
          color: 'highlighticons',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Barraca
      </ListItem>
      <ListItem
        _hover={{
          color: 'highlighticons',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Colchão/colchonete ou saco de dormir
      </ListItem>
      <ListItem
        _hover={{
          color: 'highlighticons',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Isolante térmico (opcional)
      </ListItem>
      <ListItem
        _hover={{
          color: 'highlighticons',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Cobertor, roupas de cama e travesseiro
      </ListItem>
      <ListItem
        _hover={{
          color: 'highlighticons',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Roupas de frio
      </ListItem>
      <ListItem
        _hover={{
          color: 'highlighticons',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Lanterna (pode ser a do celular)
      </ListItem>
      <ListItem
        _hover={{
          color: 'highlighticons',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Higiene pessoal
      </ListItem>
      <ListItem
        _hover={{
          color: 'highlighticons',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        1 toalha de mão por família
      </ListItem>
      <ListItem
        _hover={{
          color: 'highlighticons',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Repelente (opcional)
      </ListItem>
      <ListItem
        _hover={{
          color: 'highlighticons',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Garrafa dágua
      </ListItem>
      <ListItem
        _hover={{
          color: 'highlighticons',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Cadeira ou banquinho (essencial para a atividade astronômica e para o
        jantar)
      </ListItem>
      <ListItem
        _hover={{
          color: 'highlighticons',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        Utensílios de alimentação: prato/cumbuca, talheres, copo/caneca...
      </ListItem>
    </UnorderedList>
  );
}
