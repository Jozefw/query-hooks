import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { QueryClientProvider,QueryClient } from 'react-query';
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
    <QueryClientProvider>
      <RouterProvider router={browserRouter}>
      </RouterProvider>
    </QueryClientProvider>
  );
}

export default App;
