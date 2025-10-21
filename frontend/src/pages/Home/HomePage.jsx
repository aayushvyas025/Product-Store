import { Container, Text, useToast, VStack } from "@chakra-ui/react";
import { MainLayout } from "../../layout";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useProductStore } from "../../store";
import { LoaderComponent } from "../../components";

function HomePage() {
const [loading, setLoading] = useState(false); 
const {products, fetchProducts} = useProductStore();
const toast = useToast(); 

  async function fetchAllProducts() { 
    setLoading(true);
    const {success , message} = await fetchProducts(); 
    if(!success) {
        toast({
            title:"Error",
            description:message, 
            status:"error",
            duration:5000,
            isClosable:true
        })        
    }else {
        toast({
            title:"Success",
            description:message,
            status:"success",
            duration:5000, 
            isClosable:true

        })
    }; 
    setLoading(false);
  }; 

  useEffect(() => {
      fetchAllProducts();
  }, []); 



  return (
    <MainLayout>
      <Container maxW={"container.xl"} py={12}>
        <VStack spacing={8}>
          <Text
            fontSize={30}
            fontWeight={"bold"}
            bgGradient={"linear(to-r, cyan.400 , blue.500)"}
            bgClip={"text"}
            textAlign={"center"}
          >
            Current Products 🚀
          </Text>
          {loading && <LoaderComponent/>}
          {products.length === 0 && !loading && (
            <Text
              fontSize={"xl"}
              textAlign={"center"}
              fontWeight={"bold"}
              color={"gray.500"}
            >
              No Products Found 😶
              <Link to={"/create"}>
                <Text
                  as={"span"}
                  color={"blue.500"}
                  _hover={{ textDecoration: "underline" }}
                >
                  Create a Product
                </Text>
              </Link>
            </Text>
          )}
        </VStack>
      </Container>
    </MainLayout>
  );
}

export default HomePage;
