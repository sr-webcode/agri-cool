'use client';

import {
  ChakraProvider,
  createSystem,
  defaultConfig,
  defineConfig,
  Theme,
} from '@chakra-ui/react';
import { PropsWithChildren } from 'react';

const system = createSystem(
  defaultConfig,
  defineConfig({
    preflight: false, // disables Chakra's CSS reset
    cssVarsRoot: ':root',
  })
);

export function Provider({ children }: PropsWithChildren) {
  return (
    <ChakraProvider value={system}>
      <Theme appearance="light">{children}</Theme>
    </ChakraProvider>
  );
}
