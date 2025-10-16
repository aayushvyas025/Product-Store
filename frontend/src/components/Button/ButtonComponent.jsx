import { Button } from "@chakra-ui/react";

function ButtonComponent({
  btnText,
  btnIcon,
  onClickHandler,
  width,
  btnColor,
}) {
  return (
    <Button w={width} onClick={onClickHandler} colorScheme={btnColor}>
      {btnText || btnIcon}
    </Button>
  );
}

export default ButtonComponent;
