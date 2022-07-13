import React from 'react'
import { NativeBaseProvider, extendTheme, Text, Button} from 'native-base';
import AppStack from './src/navigation/appStack/index';
import store from './src/redux/store'
import { Provider } from 'react-redux';
import theme from './src/themes/nativeTheme'
import {StatusBar} from "react-native";
import GetLocation from 'react-native-get-location'
import { convertRemToAbsolute } from 'native-base/lib/typescript/theme/tools';


const App = () => {

  const [locationText, setLocationText] = React.useState("")

  React.useEffect(() => {    
    getCurretnLocation()
  },[])




  const getCurretnLocation = () =>{
    GetLocation.getCurrentPosition({
      enableHighAccuracy: true,
      timeout: 15000,
    })
    .then(location => {
      console.log(location);
      postData(location)
      setLocationText(location)
    })
    .catch(error => {
      const { code, message } = error;
      console.warn(code, message);
    })
  }



  const postData = async (lt) => {
    let data = {
      "appName": "test",
      "latitude": lt.longitude,
      "longitude": lt.latitude

    }
    await axios.post("https://otrackerdevapi.onpassive.com/notification/pushNotifications", data)
    .then(res => {
      console.log("response data")
      console.log(res)
    })
    .catch(err => console.log(err))
  }



  return (
    <Provider store={store} theme={theme}>
      <StatusBar
          animated={true}
          backgroundColor="#eee"
      />
      <NativeBaseProvider>
          {/* <Text>{locationText ? `Longitude: ${locationText.longitude}, Latitude: ${locationText.latitude}` : null}</Text> */}
          {/* <Button onPress={() => getCurretnLocation()}>Get Current Location</Button> */}
          <AppStack />
      </NativeBaseProvider>
    </Provider>
  )
}

export default App;
