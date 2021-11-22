import { ChakraProvider, Heading } from "@chakra-ui/react";

function App() {
  return (
    <ChakraProvider>
      <div>
        <header>
          <Heading as="h1">Aitor Alejandro Portfolio</Heading>
        </header>
      </div>
    </ChakraProvider>
  );
}

export default App;
