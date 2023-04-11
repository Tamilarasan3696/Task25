import './App.css';
import Dashboard from './pages/Dashboard';
import Sidebar from './components/Sidebar';
import Topbar from './components/Topbar';
import {
  Switch,
  Route
} from "react-router-dom";
import Products from './pages/Products';
import Users from './pages/Users';
import CreateUser from './components/CreateUser';
import Editusers from './components/EditUser';
import { UserProvider } from './context/UsersContext';
import { ProductProvider } from './context/ProductsContext';
import CreateProducts from './components/CreateProducts';
import Editproducts from './components/Editproducts';
import Charts from './components/cards.js';


function App() {
  return (

    <div className="App wrapper">
      <Sidebar />
      <div className="content-wrapper d-flex flex-column">
        <div className="content">
          <Topbar />
          <Switch>

            <Route path="/users" exact >
              <UserProvider>
                <Users />
              </UserProvider>
            </Route>

            <Route path="/products" exact >
              <ProductProvider>
                <Products />
              </ProductProvider>
            </Route>

            <Route path="/" component={Dashboard} exact />

            <Route path="/createuser" exact >
              <UserProvider>
                <CreateUser />
              </UserProvider>
            </Route>

            <Route path="/createproducts" exact >
              <ProductProvider>
                <CreateProducts />
              </ProductProvider>
            </Route>

            <>
              <UserProvider>
                <Route path="/users/edit/:id" component={Editusers}>
                </Route>
              </UserProvider>

              <ProductProvider>
                <Route path="/products/edit/:id" component={Editproducts} >
                </Route>
              </ProductProvider>
              <Route path="/cards" element={<Charts/>}/>
            </>
          </Switch>
        </div>
      </div>
    </div >
  );
}

export default App;
