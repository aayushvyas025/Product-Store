import { Button } from "@chakra-ui/react";

function ButtonComponent({ btnText, btnIcon, onClickHandler }) {
  return <Button onClick={onClickHandler}>{btnText || btnIcon}</Button>;
}

export default ButtonComponent;
