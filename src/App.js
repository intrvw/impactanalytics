import { ThemeProvider } from "@material-ui/core";
import "./App.css";
import HomeAnimeList from "./Screens/HomeCandidateList";
import theme from "./theme";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Navigations />
    </ThemeProvider>
  );
}

function Navigations() {
  return (
    <Switch>
      <Route exact path="/">
        <HomeAnimeList />
      </Route>
    </Switch>
  );
}

export default App;
