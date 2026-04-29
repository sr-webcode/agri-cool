import { FormProvider, useForm } from 'react-hook-form';
import Button from '@/components/ui/button';
import { CloseButton, Drawer, Portal } from '@chakra-ui/react';

import { AddCropFormValues } from '../types';
import FormFields from './FormFields';
import { useEffect } from 'react';
import { buildInitials, buildMeta, buildTheme } from '../util';

interface AddCropsForm {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const AddCropsForm = (props: AddCropsForm) => {
  const { isOpen, onClose, onSubmit: formSubmit } = props;

  const form = useForm<AddCropFormValues>({
    defaultValues: {
      unit: 'kg',
      category: 'leafy',
    },
  });

  useEffect(() => {
    form.reset({ unit: 'kg', category: 'leafy' });
  }, [isOpen]);

  function onSubmit(values: AddCropFormValues) {
    const theme = buildTheme(values.category);
    const payload = {
      id: crypto.randomUUID(),
      name: values.name,
      meta: buildMeta(values.variety, values.quantity),
      initials: buildInitials(values.seller),
      price: values.price,
      unit: values.unit,
      seller: values.seller,
      km: values.km,
      ...theme,
    };
    formSubmit(payload);
    onClose();
  }

  return (
    <Drawer.Root open={isOpen} onInteractOutside={onClose}>
      <Portal>
        <Drawer.Backdrop />
        <Drawer.Positioner>
          <Drawer.Content>
            <Drawer.Header>
              <Drawer.Title>Add Crop Listing</Drawer.Title>
            </Drawer.Header>
            <Drawer.Body>
              <FormProvider {...form}>
                <FormFields />
              </FormProvider>
            </Drawer.Body>
            <Drawer.Footer>
              <Button variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button onClick={form.handleSubmit(onSubmit)}>Save</Button>
            </Drawer.Footer>
            <Drawer.CloseTrigger asChild>
              <CloseButton size="sm" onClick={onClose} />
            </Drawer.CloseTrigger>
          </Drawer.Content>
        </Drawer.Positioner>
      </Portal>
    </Drawer.Root>
  );
};

export default AddCropsForm;
