import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import {} from 'react-query';
import HomePage from './Components/HomePage';
import RQPage from './Components/RQPage';
import Root from './Components/Root';
import './App.css';

const browserRouter = createBrowserRouter([
{path:'/', element:<Root></Root>,children:[
  {path:'/', element:<HomePage></HomePage>},
  {path:'/rq-super-heroes',element:<RQPage></RQPage>}
]
},
])

function App() {
  return (
      <RouterProvider router={browserRouter}>
      </RouterProvider>
  );
}

export default App;
