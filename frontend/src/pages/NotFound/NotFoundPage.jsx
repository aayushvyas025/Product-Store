import { MainLayout } from "../../layout";
import { Box, Heading, Text, VStack, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";


function NoteFoundPage(){
    return <MainLayout>
          <VStack spacing={4} justify="center" m={10}>
          <Heading as="h1" size="2xl">
            404
          </Heading>
          <Text fontSize="xl">Page Not Found</Text>
          <Text>The page you are looking for does not exist.</Text>
          <Link to="/">
            <Button colorScheme="teal">Go to Homepage</Button>
          </Link>
        </VStack>
    </MainLayout>
}

export default NoteFoundPage; 