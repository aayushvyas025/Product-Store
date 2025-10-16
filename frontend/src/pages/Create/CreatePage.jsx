import {
  Box,
  Container,
  Heading,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { MainLayout } from "../../layout";
import { useState } from "react";
import { ButtonComponent, InputComponent } from "../../components";

function CreatePage() {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });

  function handleAddProduct() {

  }

  return (
    <MainLayout>
      <Container maxW={"container.sm"}>
        <VStack spacing={8}>
          <Heading as={"h1"} size={"xl"} textAlign={"center"} mb={8}>
            Create New Product
          </Heading>

          <Box
            w={"full"}
            bg={useColorModeValue("grey.100", "grey.800")}
            p={"6"}
            rounded={"lg"}
            shadow={"md"}
          >
            <VStack spacing={4}>
              <InputComponent
                placeholder={"Product Name"}
                type="text"
                name="name"
                value={newProduct.name}
                onChangeHandler={(event) =>
                  setNewProduct({ ...newProduct, name: event.target.value })
                }
              />
              <InputComponent
                placeholder={"Product Price"}
                type={"number"}
                name="price"
                value={newProduct.price}
                onChangeHandler={(event) =>
                  setNewProduct({ ...newProduct, price: event.target.value })
                }
              />
              <InputComponent
                placeholder={"Product Image"}
                type={"string"}
                name="image"
                value={newProduct.image}
                onChangeHandler={(event) =>
                  setNewProduct({ ...newProduct, image: event.target.value })
                }
              />
              <ButtonComponent
                width={"full"}
                btnColor={"blue"}
                onClickHandler={handleAddProduct}
                btnText={"Add Product"}
              />
            </VStack>
          </Box>
        </VStack>
      </Container>
    </MainLayout>
  );
}

export default CreatePage;
