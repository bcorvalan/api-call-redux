import FeaturePymes from "./pages/FeaturePymes";
import { Provider } from "react-redux";
import store from "./redux/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <FeaturePymes />
      </Provider>
    </div>
  );
}

export default App;
