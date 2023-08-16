import { createTheme } from "@rneui/themed";

export const theme = createTheme({
  lightColors: {
    primary: "#41AE63",
    secondary: "red",
  },
  darkColors: {
    primary: "blue",
  },
  components: {
    //custom Button chung
    Button: (props, theme) => ({
      containerStyle: {
        // backgroundColor: theme.colors.primary,
      },
    }),
    //custom Text chung
    Text: (props, theme) => ({
      style: {
        // color: theme.colors.error,
        // fontSize: 16,
      },
    }),
  },
  //mặc định
  mode: "light", // or 'dark'
});
