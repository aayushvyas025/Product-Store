import { Input } from "@chakra-ui/react";

function InputComponent({type, value, onChangeHandler, name, placeholder}) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChangeHandler}
    />
  );
}

export default InputComponent;
