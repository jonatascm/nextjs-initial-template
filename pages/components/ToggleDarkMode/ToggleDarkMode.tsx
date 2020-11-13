import { useColorMode, Button, Heading } from '@chakra-ui/core';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';

export default function ToggleDarkMode() {
  const { colorMode, toggleColorMode } = useColorMode();

  console.log(`${Math.random()}:${colorMode}`);

  return (
    <>
      <Button onClick={() => toggleColorMode()}>
        {colorMode === 'dark' ? (
          <SunIcon boxSize={8} />
        ) : (
          <MoonIcon boxSize={8} />
        )}
      </Button>
    </>
  );
}
