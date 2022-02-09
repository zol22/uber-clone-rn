import React from 'react';
import { Text, View, TouchableOpacity  } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LocationInputs from '../components/LocationInputs';
//import RideOptionsCard from '../components/RideOptionsCard';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';

/* 
  It has locationInputs 
*/


const InputScreen = () => {

    const Stack = createNativeStackNavigator();
    const navigation = useNavigation();

  return (
    <View>
     {/* Go back icon to go back to HomeScreen */}
      <TouchableOpacity 
        onPress={()=> navigation.navigate("HomeScreen")}
        style={tw` absolute top-16 left-3 z-50 p-1 pt-0 `}>
        <Icon name="arrow-back-outline" type="ionicon" size={30}/>
      </TouchableOpacity>

      <View style={tw`h-full`}>
        <Stack.Navigator>
          <Stack.Screen 
            name="LocationInputs"
            component={LocationInputs}
            options={{
              headerShown:false,
            }}
          />
            {/*<Stack.Screen 
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown:false,
            }}
          /> */}

        </Stack.Navigator>
      </View>
    </View>
  );
};

export default InputScreen;

