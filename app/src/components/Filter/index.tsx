import React from "react";

import { Input } from "./index.styles";

interface Props {
  type: string;
  value: string;
  onChange: (input: string) => void;
  onEnterPress: () => void;
  gridColumnStart?: any;
  gridColumnEnd?: any;
  gridRowStart?: any;
  gridRowEnd?: any;
  name?: string;
  isValid?: boolean;
}

const Filter: React.FC<Props> = ({
  type,
  value,
  onChange,
  onEnterPress,
  gridColumnStart,
  gridColumnEnd,
  gridRowStart,
  gridRowEnd,
  name,
  isValid,
}) => {
  const onKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      onEnterPress();
    }
  };

  return (
    <Input
      type={type}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      onKeyPress={onKeyPress}
      gridColumnStart={gridColumnStart}
      gridColumnEnd={gridColumnEnd}
      gridRowStart={gridRowStart}
      gridRowEnd={gridRowEnd}
      name={name}
      isValid={isValid}
    />
  );
};

export default Filter;
