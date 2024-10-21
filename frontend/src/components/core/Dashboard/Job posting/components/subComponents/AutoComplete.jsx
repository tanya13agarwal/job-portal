import * as React from "react";
import TextField from "@mui/material/TextField";

import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

const filter = createFilterOptions();

export default function AutoComplete({
  options,
  onFormChange,
  formData,
  label,
  onChange,
  value
}) {
  const [inputValue, setInputValue] = React.useState(formData?.organization?.name);

  // const handleChanges = (event, newValue) => {
  //   if (typeof newValue === "string") {
  //     setInputValue(newValue);
  //     onChange(newValue); // Notify parent component about the new value
  //   } else if (newValue && newValue.inputValue) {
  //     setInputValue(newValue.inputValue);
  //     onChange(newValue.inputValue); // Notify parent component about the new value
  //   } else {
  //     setInputValue(newValue || "");
  //     onChange(newValue); // Notify parent component about the cleared value
  //   }
  // };

  return (
    <Autocomplete
      required
      // value={formData.organization.name}
      value={value}
      // onChange={handleChanges}
      inputValue={inputValue}
      onInputChange={(event, newInputValue) => {
        setInputValue(newInputValue);
        onFormChange("organization.name", newInputValue);
      }}
      filterOptions={(options, params) => {
        const filtered = filter(options, params);

        const { inputValue } = params;
        // Suggest the creation of a new value
        const isExisting = options.some((option) => inputValue === option);
        if (inputValue !== "" && !isExisting) {
          filtered.push({
            inputValue,
            title: `+ Add "${inputValue}"`,
          });
        }

        return filtered;
      }}
      handleHomeEndKeys
      id="free-solo-with-text-demo"
      options={options} // Receive options as props from the parent component
      getOptionLabel={(option) => {
        // Value selected with enter, right from the input
        if (typeof option === "string") {
          return option;
        }
        // Add "xxx" option created dynamically
        if (option && option.inputValue) {
          return option.inputValue;
        }
        // Regular option
        return option;
      }}
      renderOption={(props, option) => (
        <li {...props}>{typeof option === "string" ? option : option.title}</li>
      )}
      sx={{
        width: "100%",
        backgroundColor: "white",
        "& .MuiOutlinedInput-root": {
          padding: "2px",
          borderRadius: "8px",
        },
      }}
      freeSolo
      renderInput={(params) => (
        <TextField {...params} placeholder="Select company" />
      )}
    />
  );
}