import { grey } from "@mui/material/colors";
import { red } from '@mui/material/colors';
import { createTheme } from '@mui/material/styles';

// can't inline export default a variable!?!
const theme = createTheme({
  cssVariables: true,
  palette: {
    primary: {
      main: <string>grey[700]
    },
    secondary: {
      main: <string>grey[100]
    },
    error: {
      main: red.A200
    },
  },
});

export default theme;
