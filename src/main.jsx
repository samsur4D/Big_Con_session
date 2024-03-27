
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { router } from './routes/Routes';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';




 




ReactDOM.createRoot(document.getElementById('root')).render(
  <>
      <RouterProvider router={router} />
      <ToastContainer></ToastContainer>
  </>
)
