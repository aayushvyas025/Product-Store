import { Box, useColorModeValue } from "@chakra-ui/react"
import { MainRoute } from "./routes"

function App() {

  return (
    <Box minH={"100vh"} bg={useColorModeValue("grey.100","grey.900")}>
     <MainRoute/>
    </Box>
  )
}

export default App
