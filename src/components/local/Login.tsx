import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';

import { Field, Fieldset, HStack, Input, Text } from '@chakra-ui/react';
import Modal from '../modal';
import Button from '../ui/button';
import { useAuth } from '@/context/AuthProvider';

type LoginProps = {
  isOpen: boolean;
  onClose: () => void;
};

type FormValues = {
  email: string;
  password: string;
};

const Login = ({ isOpen, onClose }: LoginProps) => {
  const { login } = useAuth();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = (data: FormValues) => {
    onClose();
    login(data);
    navigate('/dashboard/marketplace');
  };

  return (
    <Modal
      maxW={360}
      onClose={onClose}
      placement="center"
      title="Login"
      isOpen={isOpen}
    >
      <form onSubmit={handleSubmit(onSubmit)}>
        <Fieldset.Root size="lg" maxW="md">
          <Fieldset.Content>
            {/* Email */}
            <Field.Root>
              <Field.Label>
                <Text>Email address</Text>
              </Field.Label>
              <Input
                color="text.primary"
                type="email"
                placeholder="Email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email',
                  },
                })}
              />
              {errors.email && (
                <Text fontSize="sm" color="red.400">
                  {errors.email.message}
                </Text>
              )}
            </Field.Root>

            {/* Password */}
            <Field.Root>
              <Field.Label>
                <Text>Password</Text>
              </Field.Label>
              <Input
                color="text.primary"
                type="password"
                placeholder="Password"
                {...register('password', {
                  required: 'Password is required',
                  minLength: {
                    value: 4,
                    message: 'Minimum 4 characters',
                  },
                })}
              />
              {errors.password && (
                <Text fontSize="sm" color="red.400">
                  {errors.password.message}
                </Text>
              )}
            </Field.Root>

            <HStack>
              <Button width="100%" type="submit">
                Login
              </Button>
            </HStack>
          </Fieldset.Content>
        </Fieldset.Root>
      </form>
    </Modal>
  );
};

export default Login;
