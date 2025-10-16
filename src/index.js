import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import RouterCustom from './router';
import './styles/style.scss';
import Homepage from "./pages/users/homepage";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
<BrowserRouter>
  <RouterCustom />

</BrowserRouter>);

