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
import ConditionalRendering from './components/ConditionalRendering';
import LifeCycle from './components/LifeCycle';
import LifeCycleClassComponent from './components/LifeCycleClassComponent';
import ParentComponent from './components/ParentComponent';
import ProductDetails from './components/ProductDetails';
import GetData from './components/crud/GetData';
import GetDataById from './components/crud/GetDataById';
import AddData from './components/crud/AddData';
import EditData from './components/crud/EditData';
import MaterialForm from './components/design/Form';
import Signin from './components/design/Signin';

function App() {
  return ( 
    <>
      <BrowserRouter>
        <div className="mainDiv">
          <div className="contentDiv">
            <Routes>
              <Route exact path="/"      element={ <Home /> }  />
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
              <Route path="/ConditionalRendering" element={ <ConditionalRendering /> }  />
              <Route path="/LifeCycle" element={ <LifeCycle /> }  />
              <Route path="/LifeCycleClassComponent" element={ <LifeCycleClassComponent /> }  />
              <Route path="/ParentComponent" element={ <ParentComponent /> }  />
              <Route path="/product-details/:id" element={ <ProductDetails /> }  />
              <Route path="/GetData" element={ <GetData /> }  />
              <Route path="/GetDataById/:id" element={ <GetDataById /> }  />
              <Route path="/AddData" element={ <AddData /> }  />
              <Route path="/EditData/:id" element={ <EditData /> }  />
              <Route path="/material-form" element={ <MaterialForm /> }  />
              <Route path="/signin" element={ <Signin /> }  />
            </Routes>
          </div>
          <div className="navigationDiv">
            <Navigation />
          </div>
        </div>
      </BrowserRouter>
    </>
    )
}

export default App;

