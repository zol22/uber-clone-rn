import { KeyboardAvoidingView, Platform } from 'react-native';
import { Provider } from "react-redux"
import HomeScreen from './screens/HomeScreen';
import { store } from './store'
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MapScreen from './screens/MapScreen';
import ReserveScreen from './screens/ReserveScreen';
import InputScreen from './screens/InputScreen';


export default function App() {

  const Stack = createNativeStackNavigator();

  return (
    <Provider store={store}>
      <NavigationContainer>
        <SafeAreaProvider>
          <KeyboardAvoidingView // move out of the way of the virtual keyboard in the iphone or android
            behavior={Platform.OS === 'IOS' ? "padding" : "height"}
            style={{ flex: 1}}
            keyboardVerticalOffse={Platform.OS === 'ios' ? -64 : 0}
            >
            <Stack.Navigator>
              <Stack.Screen name="HomeScreen" component={HomeScreen} 
                options={{
                  headerShown: false,
                }}
              />
               <Stack.Screen name="InputScreen" component={InputScreen} 
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen name="MapScreen" component={MapScreen} 
                options={{
                  headerShown: false,
                }}
              />
              <Stack.Screen name="ReserveScreen" component={ReserveScreen} 
                options={{
                  headerShown: false,
                }}
              />
            </Stack.Navigator>
          </KeyboardAvoidingView>

      
        </SafeAreaProvider>
      </NavigationContainer>
    </Provider>
  );
}

/* 
  When using react native, flexbox default is to a column
  (in phone devices!!)
*/
