import React from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField } from "@material-ui/core";

interface Props {
  id: string;
  data: any;
  dataLabel: any;
  style: any;
  onSelect: any;
  value: any;
}

const Search: React.FC<Props> = ({
  id,
  data,
  dataLabel,
  style,
  onSelect,
  value,
}) => {
  return (
    <Autocomplete
      id={id}
      options={data}
      getOptionLabel={dataLabel}
      style={style}
      renderInput={(params) => (
        <TextField {...params} label="Combo box" variant="outlined" />
      )}
      onChange={onSelect}
      value={value}
    />
  );
};

export default Search;
