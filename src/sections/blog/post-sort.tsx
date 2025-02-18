import PropTypes from "prop-types";

import MenuItem from "@mui/material/MenuItem";
import TextField from "@mui/material/TextField";

// ----------------------------------------------------------------------

PostSort.propTypes = {
  options: PropTypes.array,
  onSort: PropTypes.func,
};

export default function PostSort({ options, onSort }: any) {
  return (
    <TextField select size="small" value="latest" onChange={onSort}>
      {options.map((option: any) => (
        <MenuItem key={option.value} value={option.value}>
          {option.label}
        </MenuItem>
      ))}
    </TextField>
  );
}
