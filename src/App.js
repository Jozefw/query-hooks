import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import HomePage from './Components/HomePage';
import RQPage from './Components/RQPage';
import Test from './Components/Test';
import './App.css';

const browserRouter = createBrowserRouter([
{path:'/', element:<HomePage></HomePage>},
{path:'/rq-super-heroes',element:<RQPage></RQPage>},
{path:'/test', element:<Test></Test>}
])

function App() {
  return (
      <RouterProvider router={browserRouter}>
      </RouterProvider>
  );
}

export default App;
