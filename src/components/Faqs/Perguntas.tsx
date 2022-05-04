import { Accordion } from '@chakra-ui/react';
import { Item } from './Item';

export function Perguntas() {
  return (
    <Accordion
      allowToggle
      w="46.25rem"
      px="1rem"
      colorScheme="gray"
      mb={['2rem', null]}
    >
      <Item
        title="1. Qual é a data do próximo acampamento?"
        answer="Nossos acampamentos acontecem nos meses de maio, junho, julho e agosto (que é o período de seca e céu limpo em Brasília. Porém, nosso cronograma atual não é divulgado com antecedência, pois marcamos os acampamentos de acordo com a demanda. Quando marcamos um novo acampamento divulgamos em nosso Instagram. Siga nosso perfil @noitenasestrelas para ficar atualizado das novidades!"
      />
      <Item
        title="2. Qual é a forma de pagamento?"
        answer="Nossa forma de pagamento é o PIX."
      />
      <Item
        title="3. Vocês alugam barracas?"
        answer="Atualmente não fazemos aluguel de barracas."
      />
      <Item
        title="4. Onde acontece o acampamento? O local é seguro?"
        answer="O acampamento acontece em uma chácara localizada no Núcleo Rural Lago Oeste – Brasília. O local é fechado e totalmente seguro."
      />
      <Item
        title="5. Os carros ficam estacionados próximos à area de camping?"
        answer="Sim, o local possui estacionamento localizado próximo à área de camping."
      />
      <Item
        title="6. Qual é a idade mínima indicada para participar?"
        answer="Esta atividade foi idealizada para a participação de pessoas com todas as idades. Leve toda sua família! Porém, a idade ideal para conseguir acompanhar 100% da atividade astronômica é de 7 anos em diante. Mas se o seu filho(a) tem uma idade menor tenha a certeza que ele aproveitará muito também!"
      />
      <Item
        title="7. A alimentação está inclusa no valor da inscrição?"
        answer="Fornecemos o jantar e o café da manhã. Porém, indicamos que cada participante leve um lanche para comer no período da tarde."
      />
      <Item
        title="8. O local possui banheiros?"
        answer="Sim, o local possui banheiros com lavatório e vaso sanitário."
      />
      <Item
        title="9. É possivel tomar banho no local?"
        answer="Pedimos aos participantes que tomem banho antes de sair de casa. O local possui 1 chuveiro frio na área externa e 1 chuveiro quente que pode ser utilizado apenas em caso de emergência."
      />
      <Item
        title="10. Onde é o “ponto de encontro”?"
        answer="O ponto de encontro é o Posto Colorado, localizado na saída norte de Brasília. Todos os participantes deverão se dirigir a este local para que possamos sair juntos às 15h para o local do acampamento."
      />
      <Item
        title="11. Crianças podem participar sem acompanhante?"
        answer="Não. Todas as crianças precisam estar acompanhadas por uma pessoa maior de 18 anos."
      />
      <Item
        title="12. Posso contratar uma Noite nas Estrelas VIP?"
        answer="Sim! Caso tenha interesse entre em contato para conversarmos."
      />
    </Accordion>
  );
}
