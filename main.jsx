
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import New from './New.jsx'
import Counter from './Counter.jsx'
import Form from './Form.jsx'

import ControlledForm from './ControlledForm.jsx'



createRoot(document.getElementById('root')).render(
  <>
    {/* <App name="Abhishek" age={23} />
    <New name="Rahul" age={44} />
    <Counter />
    <Form /> */}
    <ControlledForm />
  </>
)
