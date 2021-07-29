import React from "react";

import { Menu } from "./index.styles";

interface Props {
  gridColumnStart?: any;
  gridColumnEnd?: any;
  gridRowStart?: any;
  gridRowEnd?: any;

  Options: string[];
  value: string;
  onChange: (input: string) => void;
}

const DropDown: React.FC<Props> = ({
  gridColumnStart,
  gridColumnEnd,
  gridRowStart,
  gridRowEnd,
  Options,
  value,
  onChange,
}) => {
  return (
    <Menu
      gridColumnStart={gridColumnStart}
      gridColumnEnd={gridColumnEnd}
      gridRowStart={gridRowStart}
      gridRowEnd={gridRowEnd}
      value={value}
      onChange={(e) => onChange(e.target.value)}
    >
      <option value="" disabled selected>
        Select an option
      </option>
      {Options.map((option) => (
        <option>{option}</option>
      ))}
    </Menu>
  );
};

export default DropDown;
