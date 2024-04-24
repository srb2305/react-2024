import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import List from './components/List';
import List2 from './components/List2';
import Events from './components/Events';
import Navigation from './common/Navigation';
import StateHook from './components/StateHook';
import Array from './components/Array';
import Form from './components/Form';
import FormCommonFunction from './components/FormCommonFunction';
import FormUseRef from './components/FormUseRef';

function App() {
  return ( 
    <>
      <BrowserRouter>

        <Navigation />  
      
        <Routes>
          <Route path="/"      element={ <Home /> }  />
          <Route path="/about" element={ <About /> }  />
          <Route path="/contact" element={ <Contact /> }  />
          <Route path="/list" element={ <List /> }  />
          <Route path="/list2" element={ <List2 /> }  />
          <Route path="/events" element={ <Events /> }  />
          <Route path="/stateHook" element={ <StateHook /> }  />
          <Route path="/Array" element={ <Array /> }  />
          <Route path="/form" element={ <Form /> }  />
          <Route path="/form2" element={ <FormCommonFunction /> }  />
          <Route path="/FormUseRef" element={ <FormUseRef /> }  />
        </Routes>
      </BrowserRouter>
    </>
    )
}

export default App;
