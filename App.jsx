import { SafeAreaView } from "react-native-safe-area-context";
import AppRouters from "./src/routers/AppRouters";
import { theme } from "./src/themes/thems";
import AppProvider from "./src/contexts/AppProvider";
import { ThemeProvider } from "@rneui/themed";
export default function App() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ThemeProvider theme={theme}>
        <AppProvider>
          <AppRouters />
        </AppProvider>
      </ThemeProvider>
    </SafeAreaView>
  );
}
