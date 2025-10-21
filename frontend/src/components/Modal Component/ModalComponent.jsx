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
} from "@chakra-ui/react";
import InputComponent from "../Input/InputComponent";
import { useState } from "react";

function ModalComponent({ isOpen, onClose, product }) {
  const [updateProduct, setUpdateProduct] = useState(product);
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalBody>
        <ModalContent>
          <ModalHeader>Update Product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <VStack spacing={4}>
              <InputComponent
                placeholder={"Product Name"}
                name="name"
                type={"text"}
                value={product.name}
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
                value={product.price}
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
                value={product.image}
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
            <Button colorScheme="blue" mr={3}>
              Update
            </Button>
            <Button variant="ghost" onClick={onClose}>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </ModalBody>
    </Modal>
  );
}

export default ModalComponent;
