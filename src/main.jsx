import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ProductsProvider } from './context/ProductsContext.jsx'
import { CartProvider } from './context/CartContext.jsx'
import { FilterProvider } from './context/FilterContext.jsx'
import { Auth0Provider } from '@auth0/auth0-react'
import { UserProvider } from './context/UserContext.jsx'

// dev-jtexi7myq7etjnac.us.auth0.com
// Q5AyHxTm9tbFn5ERjwXfpHPUnCeSEvG1


ReactDOM.createRoot(document.getElementById('root')).render(
  <Auth0Provider
    domain="dev-jtexi7myq7etjnac.us.auth0.com"
    clientId="Q5AyHxTm9tbFn5ERjwXfpHPUnCeSEvG1"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
    cacheLocation='localstorage'
  >
    <UserProvider>
      <ProductsProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </ProductsProvider>
    </UserProvider>
  </Auth0Provider>
)
