import {QueryClientProvider,QueryClient} from 'react-query';
import {createBrowserRouter,RouterProvider} from 'react-router-dom';
import { ReactQueryDevtools } from 'react-query/devtools';
import { QueryClientProvider,QueryClient } from 'react-query';
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

const queryClient = new QueryClient();

function App() {
  return (
      <RouterProvider router={browserRouter}>
      </RouterProvider>
  );
}

export default App;
