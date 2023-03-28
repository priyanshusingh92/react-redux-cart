import store from "./store";
import "./styles.css";
import { Provider } from "react-redux";
import Cart from "./Cart";

export default function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <Cart />
      </div>
    </Provider>
  );
}
