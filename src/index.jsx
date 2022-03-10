import ReactDOM from 'react-dom';
import App from './App';
import { Provider } from './context/context';
import './index.css';

const rootElement = document.getElementById('root');

ReactDOM.render(
   <Provider>
      <App />
   </Provider>,
   rootElement
);
