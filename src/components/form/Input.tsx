import * as React from 'react';
import { get, RegisterOptions, useFormContext } from 'react-hook-form';
import { FiAlertCircle, FiCheck } from 'react-icons/fi';

import Typography, { TypographyColor } from '@/components/Typography';
import clsxm from '@/lib/clsxm';

type InputProps = {
  id: string;
  label: string;
  color?: keyof typeof TypographyColor;
  placeholder?: string;
  validate?: RegisterOptions;
  showValid?: boolean;
  labelColor?: keyof typeof TypographyColor;
  helperText?: string;
} & React.ComponentPropsWithRef<'input'>;

const Input = ({
  id,
  validate,
  label,
  placeholder,
  showValid = false,
  labelColor = 'white',
  helperText,
  type = 'text',
}: InputProps) => {
  const {
    register,
    formState: { errors, isValid },
  } = useFormContext();

  const error = get(errors, id);
  return (
    <div className='mt-1'>
      <Typography as='label' className='block' color={labelColor}>
        {label}
      </Typography>
      <div className='relative'>
        <input
          type={type}
          {...register(id, validate)}
          className={clsxm(
            'rounded-md border-none bg-[#F9FAFB]',
            error && 'border-red-500 focus:outline-none',
            showValid && isValid && 'border-green-500',
            'px-4 py-2 block w-full'
          )}
          placeholder={placeholder}
        />
        {error && (
          <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
            <FiAlertCircle
              className='h-5 w-5 text-red-500'
              aria-hidden='true'
            />
          </div>
        )}
        {showValid && isValid && (
          <div className='absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none'>
            <FiCheck className='h-5 w-5 text-green-500' aria-hidden='true' />
          </div>
        )}
      </div>
      {helperText && (
        <Typography variant='l3' className='pl-1 text-gray-500 '>
          {helperText}
        </Typography>
      )}
      {error && (
        <Typography color='danger' variant='l2' className='pl-1 '>
          {error.message}
        </Typography>
      )}
    </div>
  );
};

export default Input;
