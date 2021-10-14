import React from "react";

import { ThemeProvider } from "@material-ui/styles";
import TabView from "./view/TabScreen";
import theme from "./styles/ColorTheme";
import "./App.css";
// import SearchAppBar from "./SearchAppBar";

function App() {
  return (
    <React.Fragment>
      <ThemeProvider theme={theme}>
        {/* <SearchAppBar title="Oscarchoi's Blogs" /> */}
        <TabView />
      </ThemeProvider>
    </React.Fragment>
  );
}

export default App;
