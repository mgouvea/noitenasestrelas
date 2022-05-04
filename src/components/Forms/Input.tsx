import { forwardRef, ForwardRefRenderFunction } from 'react';

import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as ChakraInput,
  InputProps as ChakraInputProps,
} from '@chakra-ui/react';

import { FieldError } from 'react-hook-form';

interface InputProps extends ChakraInputProps {
  name: string;
  label?: string;
  width?: string;
  error?: FieldError;
}
const InputBase: ForwardRefRenderFunction<HTMLInputElement, InputProps> = (
  { name, label, width, error, ...rest },
  ref
) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel htmlFor={name} fontSize="sm">
          {label}
        </FormLabel>
      )}
      <ChakraInput
        name={name}
        id={name}
        focusBorderColor="orange.500"
        color="gray.300"
        bgColor="gray.700"
        variant="filled"
        _hover={{
          bgColor: 'gray.600',
        }}
        size="md"
        w={width}
        ref={ref}
        {...rest}
      />

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const Input = forwardRef(InputBase);
