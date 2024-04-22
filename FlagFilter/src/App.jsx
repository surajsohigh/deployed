// import './App.css';;
import Counter from './counter/Counter'
import Todo from './todo/Todo'
import FindMap from './findMap/FindMap';
import {createBrowserRouter, RouterProvider} from "react-router-dom";

const router = createBrowserRouter([{
  path: "/",
  element: <FindMap/>
  },
  {
    path: '/counter',
    element: <Counter/>
  },
  {
    path: '/todo',
    element: <Todo/>
  }
])

function App() {

  return (
    <div className="App m-5">
      <RouterProvider router={router}/>

    </div>
  );
}

export default App;
