import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  VStack,
  Button,
  useToast,
} from "@chakra-ui/react";
import InputComponent from "../Input/InputComponent";
import { useState } from "react";
import { useProductStore } from "../../store";

function ModalComponent({ isOpen, onClose, product }) {
  const [updateProduct, setUpdateProduct] = useState(product);
  const { updateProducts } = useProductStore();
  const toast = useToast();

  async function updateProductHandler(pid, product) {
    const { success, message } = await updateProducts(pid, product);
    if (!success) {
      toast({
        title: "Error",
        description: message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    } else {
      toast({
        title: "Success",
        description: message,
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    }
    onClose();
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <InputComponent
                placeholder={"Product Name"}
                name="name"
                type={"text"}
                value={updateProduct.name}
                onChangeHandler={(event) =>
                  setUpdateProduct({
                    ...updateProduct,
                    name: event.target.value,
                  })
                }
              />
              <InputComponent
                placeholder={"Product Price"}
                name="price"
                type={"number"}
                value={updateProduct.price}
                onChangeHandler={(event) =>
                  setUpdateProduct({
                    ...updateProduct,
                    price: event.target.value,
                  })
                }
              />
              <InputComponent
                placeholder={"Product Image"}
                name="image"
                type={"text"}
                value={updateProduct.image}
                onChangeHandler={(event) =>
                  setUpdateProduct({
                    ...updateProduct,
                    image: event.target.value,
                  })
                }
              />
            </VStack>
          </ModalBody>
          <ModalFooter>
            <Button
              colorScheme="blue"
              mr={3}
              onClick={() =>
                updateProductHandler(updateProduct._id, updateProduct)
              }
            >
              Update
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
    </Modal>
  );
}

export default ModalComponent;
