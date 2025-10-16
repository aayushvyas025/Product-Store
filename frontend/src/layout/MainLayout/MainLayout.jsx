import { Box } from "@chakra-ui/react";
import { Navbar } from "../../components";

function MainLayout({ children }) {
  return (
    <Box>
      <Navbar />
      {children}
    </Box>
  );
}

export default MainLayout;
