import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Select,
  SelectProps as ChakraSelectProps,
} from '@chakra-ui/react';
import { forwardRef, ForwardRefRenderFunction } from 'react';
import { FieldError } from 'react-hook-form';

interface SelectInputProps extends ChakraSelectProps {
  name: string;
  label?: string;
  optSelect: string[];
  error?: FieldError;
}

const SelectInputBase: ForwardRefRenderFunction<
  HTMLSelectElement,
  SelectInputProps
> = ({ name, label, optSelect, error, ...rest }, ref) => {
  return (
    <FormControl isInvalid={!!error}>
      {!!label && (
        <FormLabel htmlFor={name} fontSize="sm">
          {label}
        </FormLabel>
      )}
      <Select
        name={name}
        id={name}
        focusBorderColor="orange.500"
        color="gray.300"
        bgColor="gray.700"
        variant="filled"
        _hover={{
          bgColor: 'gray.600',
        }}
        ref={ref}
        size="sm"
        placeholder={'Selecione'}
        _placeholder={{ bgColor: 'gray.700' }}
        {...rest}
      >
        {/* <option style={{ background: '#1A365D' }}>Selecione</option> */}
        {optSelect.map((opt, idx) => (
          <option key={idx} value={opt} style={{ background: '#4A5568' }}>
            {opt}
          </option>
        ))}
      </Select>

      {!!error && <FormErrorMessage>{error.message}</FormErrorMessage>}
    </FormControl>
  );
};

export const SelectInput = forwardRef(SelectInputBase);
