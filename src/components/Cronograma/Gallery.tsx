import { Flex } from '@chakra-ui/react';
import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

const responsive = {
  0: { items: 2 },
  568: { items: 3 },
  1024: { items: 5 },
};

const handleDragStart = (e) => e.preventDefault();
const items = [
  <img
    key={1}
    src="https://a-static.mlcdn.com.br/618x463/bicicleta-sport-gold-aro-29-mountain-bike-21-marchas-kls/rideshop/25/d3265ba997570c7e6c6b4a953fb2b6c8.jpg"
    role="presentation"
    onDragStart={handleDragStart}
    width="290px"
  />,
  <img
    key={2}
    src="https://a-static.mlcdn.com.br/618x463/bicicleta-sport-gold-aro-29-mountain-bike-21-marchas-kls/rideshop/25/d3265ba997570c7e6c6b4a953fb2b6c8.jpg"
    role="presentation"
    onDragStart={handleDragStart}
    width="290px"
  />,
  <img
    key={3}
    src="https://a-static.mlcdn.com.br/618x463/bicicleta-sport-gold-aro-29-mountain-bike-21-marchas-kls/rideshop/25/d3265ba997570c7e6c6b4a953fb2b6c8.jpg"
    role="presentation"
    onDragStart={handleDragStart}
    width="290px"
  />,
  <img
    key={4}
    src="https://a-static.mlcdn.com.br/618x463/bicicleta-sport-gold-aro-29-mountain-bike-21-marchas-kls/rideshop/25/d3265ba997570c7e6c6b4a953fb2b6c8.jpg"
    role="presentation"
    onDragStart={handleDragStart}
    width="290px"
  />,
  <img
    key={5}
    src="https://a-static.mlcdn.com.br/618x463/bicicleta-sport-gold-aro-29-mountain-bike-21-marchas-kls/rideshop/25/d3265ba997570c7e6c6b4a953fb2b6c8.jpg"
    role="presentation"
    onDragStart={handleDragStart}
    width="290px"
  />,
  <img
    key={6}
    src="https://a-static.mlcdn.com.br/618x463/bicicleta-sport-gold-aro-29-mountain-bike-21-marchas-kls/rideshop/25/d3265ba997570c7e6c6b4a953fb2b6c8.jpg"
    role="presentation"
    onDragStart={handleDragStart}
    width="290px"
  />,
  <img
    key={7}
    src="https://a-static.mlcdn.com.br/618x463/bicicleta-sport-gold-aro-29-mountain-bike-21-marchas-kls/rideshop/25/d3265ba997570c7e6c6b4a953fb2b6c8.jpg"
    role="presentation"
    onDragStart={handleDragStart}
    width="290px"
  />,
  <img
    key={8}
    src="https://a-static.mlcdn.com.br/618x463/bicicleta-sport-gold-aro-29-mountain-bike-21-marchas-kls/rideshop/25/d3265ba997570c7e6c6b4a953fb2b6c8.jpg"
    role="presentation"
    onDragStart={handleDragStart}
    width="290px"
  />,
  <img
    key={9}
    src="https://a-static.mlcdn.com.br/618x463/bicicleta-sport-gold-aro-29-mountain-bike-21-marchas-kls/rideshop/25/d3265ba997570c7e6c6b4a953fb2b6c8.jpg"
    role="presentation"
    onDragStart={handleDragStart}
    width="290px"
  />,
  <img
    key={10}
    src="https://a-static.mlcdn.com.br/618x463/bicicleta-sport-gold-aro-29-mountain-bike-21-marchas-kls/rideshop/25/d3265ba997570c7e6c6b4a953fb2b6c8.jpg"
    role="presentation"
    onDragStart={handleDragStart}
    width="290px"
  />,
];

export function Gallery() {
  return (
    <Flex>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
      />
    </Flex>
  );
}
