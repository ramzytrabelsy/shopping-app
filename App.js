import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from "./src/navigation/navigation";
import { Provider as StoreProvider } from 'react-redux'
import store from './src/redux/store'


const App = () => {
 return (
  <StoreProvider store={store}>
  <NavigationContainer>
   <AppNavigator />
  </NavigationContainer>
  </StoreProvider>
 );
}

export default App;
