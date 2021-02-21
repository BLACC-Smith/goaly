import AppContainer from "./components/organisms/AppContainer";
import { DataProvider } from "./hooks/useData";

function App() {
  return (
    <DataProvider>
      <AppContainer />
    </DataProvider>
  );
}

export default App;
