import { Stack, Button, useColorMode, Checkbox } from '@chakra-ui/react';

function App() {
  const { toggleColorMode } = useColorMode();
  return (
    <>
      <h1>ANT Design</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab
        exercitationem ipsum beatae inventore, ullam, nihil temporibus maiores
        at dolor velit debitis magnam animi mollitia eligendi est. Dolore labore
        odio laudantium.
      </p>
      <Stack spacing={4} direction="row" align="center">
        <Button size="xl" variant="secondary" onClick={toggleColorMode}>
          Toggle color mode
        </Button>
        <Button size="xl" variant="primary">
          Save
        </Button>
        <Checkbox size="lg" defaultChecked>
          Checkbox1
        </Checkbox>
      </Stack>
    </>
  );
}

export default App;
