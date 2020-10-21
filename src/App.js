import React from "react";
import { SafeAreaView } from "react-native";
import styled from "@emotion/native";

import ThemeProvider from "./theme/ThemeProvider";
import InfiniteList from "./components/InfiniteList";

export default function App() {
  return (
    <ThemeProvider>
      <MainContent>
        <InfiniteList />
      </MainContent>
    </ThemeProvider>
  );
}

const MainContent = styled(SafeAreaView)`
  height: 100vh;
  background-color: goldenrod;
`;
