import { createBrowserRouter } from "react-router-dom";
import RootView from '../views/RootView';
import Ejercicio1 from "../components/Ejercicio1/Ejercicio1";
import Ejercicio2 from "../components/Ejercicio2/Ejercicio2";
import Ejercicio3 from "../components/Ejercicio3/Ejercicio3";
import Ejercicio4 from "../components/Ejercicio4/Ejercicio4";
import Ejercicio5 from "../components/Ejercicio5/Ejercicio5";
import Ejercicio7 from "../components/Ejercicio7/Ejercicio7";
import Ejercicio8 from "../components/Ejercicio8/Ejercicio8";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootView />,
    children: [
      {
        path: "ejercicio1",
        element: <Ejercicio1 />,
      },
      {
        path: "ejercicio2",
        element: <Ejercicio2 persona="my friend" />,
      },
      {
        path: "ejercicio3",
        element: <Ejercicio3 persona="my friend" />,
      },
      {
        path: "ejercicio4",
        element: <Ejercicio4 />,
      },
      {
        path: "ejercicio5",
        element: <Ejercicio5 />,
      },
      {
        path: "ejercicio7",
        element: <Ejercicio7 />,
       },
       {
        path: "ejercicio8",
        element: <Ejercicio8 />,
        }, 
    ],
  },
]);
