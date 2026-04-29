import {
  Box,
  Field,
  HStack,
  Input,
  NativeSelect,
  Text,
  VStack,
} from '@chakra-ui/react';
import { CATEGORY_THEME, UNIT_OPTIONS } from '../types';
import { useFormContext } from 'react-hook-form';

const FormFields = () => {
  const { formState, register } = useFormContext();
  const errors = formState.errors;

  return (
    <Box as="div" w="full">
      <VStack gap={4} align="start">
        {/* Crop name */}
        <Field.Root invalid={!!errors.name}>
          <Field.Label fontSize="sm" fontWeight="500">
            Crop name{' '}
            <Text as="span" color="red.500">
              *
            </Text>
          </Field.Label>
          <Input
            placeholder="e.g. Pechay, Kamatis"
            {...register('name', {
              required: 'Crop name is required',
              minLength: {
                value: 2,
                message: 'At least 2 characters',
              },
              maxLength: { value: 40, message: 'Too long' },
            })}
          />
          <Field.ErrorText>{errors.name?.message as string}</Field.ErrorText>
        </Field.Root>

        {/* Category — drives card color theme */}
        <Field.Root invalid={!!errors.category}>
          <Field.Label fontSize="sm" fontWeight="500">
            Category{' '}
            <Text as="span" color="red.500">
              *
            </Text>
          </Field.Label>
          <NativeSelect.Root>
            <NativeSelect.Field
              {...register('category', {
                required: 'Pick a category',
              })}
            >
              {Object.entries(CATEGORY_THEME).map(([key, val]) => (
                <option key={key} value={key}>
                  {val.emoji} {val.label}
                </option>
              ))}
            </NativeSelect.Field>
            <NativeSelect.Indicator />
          </NativeSelect.Root>
          <Field.ErrorText>
            {errors.category?.message as string}
          </Field.ErrorText>
        </Field.Root>

        {/* Variety + Quantity → builds meta string */}
        <Field.Root flex={1} invalid={!!errors.variety}>
          <Field.Label fontSize="sm" fontWeight="500">
            Variety
            <Text as="span" color="red.500">
              *
            </Text>
          </Field.Label>
          <Input
            placeholder="e.g. Fresh harvest, Bicolano"
            {...register('variety', {
              required: 'Required',
              maxLength: { value: 30, message: 'Too long' },
            })}
          />
          <Field.ErrorText>{errors.variety?.message as string}</Field.ErrorText>
        </Field.Root>

        <Field.Root flex={1} invalid={!!errors.quantity}>
          <Field.Label fontSize="sm" fontWeight="500">
            Quantity{' '}
            <Text as="span" color="red.500">
              *
            </Text>
          </Field.Label>
          <Input
            placeholder="e.g. 5kg, 20pcs"
            {...register('quantity', {
              required: 'Required',
              maxLength: { value: 20, message: 'Too long' },
            })}
          />
          <Field.ErrorText>
            {errors.quantity?.message as string}
          </Field.ErrorText>
        </Field.Root>

        <Text fontSize="xs" color="gray.400" mt={-2}>
          These combine into the card subtitle — e.g. "Fresh harvest · 5kg"
        </Text>

        {/* Price + Unit */}
        <HStack gap={3} align="flex-start">
          <Field.Root flex={1} invalid={!!errors.price}>
            <Field.Label fontSize="sm" fontWeight="500">
              Price (₱){' '}
              <Text as="span" color="red.500">
                *
              </Text>
            </Field.Label>
            <Input
              type="number"
              placeholder="e.g. 45"
              {...register('price', {
                required: 'Price is required',
                valueAsNumber: true,
                min: { value: 1, message: 'Must be at least ₱1' },
                max: { value: 99999, message: 'Too high' },
              })}
            />
            <Field.ErrorText>{errors.price?.message as string}</Field.ErrorText>
          </Field.Root>

          <Field.Root flex={1} invalid={!!errors.unit}>
            <Field.Label fontSize="sm" fontWeight="500">
              Per unit{' '}
              <Text as="span" color="red.500">
                *
              </Text>
            </Field.Label>
            <NativeSelect.Root>
              <NativeSelect.Field
                {...register('unit', { required: 'Pick a unit' })}
              >
                {UNIT_OPTIONS.map((u) => (
                  <option key={u} value={u}>
                    {u}
                  </option>
                ))}
              </NativeSelect.Field>
              <NativeSelect.Indicator />
            </NativeSelect.Root>
            <Field.ErrorText>{errors.unit?.message as string}</Field.ErrorText>
          </Field.Root>
        </HStack>

        {/* Seller name */}
        <Field.Root invalid={!!errors.seller}>
          <Field.Label fontSize="sm" fontWeight="500">
            Your name{' '}
            <Text as="span" color="red.500">
              *
            </Text>
          </Field.Label>
          <Input
            placeholder="e.g. Rosa L., Mang Roel"
            {...register('seller', {
              required: 'Seller name is required',
              minLength: {
                value: 2,
                message: 'At least 2 characters',
              },
              maxLength: { value: 30, message: 'Too long' },
            })}
          />
          <Field.ErrorText>{errors.seller?.message as string}</Field.ErrorText>
        </Field.Root>

        {/* Distance */}
        <Field.Root invalid={!!errors.km}>
          <Field.Label fontSize="sm" fontWeight="500">
            Distance from market (km){' '}
            <Text as="span" color="red.500">
              *
            </Text>
          </Field.Label>
          <Input
            type="number"
            step="0.1"
            placeholder="e.g. 1.2"
            {...register('km', {
              required: 'Distance is required',
              valueAsNumber: true,
              min: { value: 0.1, message: 'Minimum 0.1 km' },
              max: { value: 50, message: 'Must be within 50 km' },
            })}
          />
          <Field.ErrorText>{errors.km?.message as string}</Field.ErrorText>
        </Field.Root>
      </VStack>
    </Box>
  );
};

export default FormFields;
