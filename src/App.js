import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/Navbar";
import { Container } from "react-bootstrap";
import { createBrowserRouter, RouterProvider } from "react-router";
import Store from "./pages/Store";
import Success from "./pages/Success";
import Cancel from "./pages/Cancel";
import { Provider } from "react-redux";
import store from "./Redux/store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Store />,
  },
  {
    path: "/success",
    element: <Success />,
  },
  {
    path: "/cancel",
    element: <Cancel />,
  },
]);

function App() {
  return (
    <>
      <Provider store={store}>
        <Container>
          <NavbarComponent></NavbarComponent>
          <RouterProvider router={router} />
        </Container>
      </Provider>
    </>
  );
}

export default App;
