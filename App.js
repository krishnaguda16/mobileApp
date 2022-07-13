import React from 'react'
import { NativeBaseProvider, extendTheme} from 'native-base';
import AppStack from './src/navigation/appStack/index';
import store from './src/redux/store'
import { Provider } from 'react-redux';
import theme from './src/themes/nativeTheme'
import {StatusBar} from "react-native";
import GetLocation from 'react-native-get-location'


const App = () => {

  React.useEffect(() => {    
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
    .then(location => {
      console.log(location);
    })
    .catch(error => {
      const { code, message } = error;
      console.warn(code, message);
    })
  },[])

  return (
    <Provider store={store} theme={theme}>
      <StatusBar
          animated={true}
          backgroundColor="#eee"
      />
      <NativeBaseProvider>
          <AppStack />
      </NativeBaseProvider>
    </Provider>
  )
}

export default App;
