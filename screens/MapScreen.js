import { StyleSheet, Text, View, TouchableOpacity  } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import Map from '../components/Map';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RideOptionsCard from '../components/RideOptionsCard';
import { useNavigation } from '@react-navigation/native';
import { Icon } from 'react-native-elements';




const MapScreen = () => {
  
  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      {/* Go back icon to go back to InputScreen */}
      <TouchableOpacity 
          onPress={() => navigation.navigate("InputScreen")}
          style={tw` absolute top-16 left-3 z-50 p-1 pt-0 `}>
          <Icon name="arrow-back-outline" type="ionicon" size={30}/>
      </TouchableOpacity>

      <View style={tw`h-1/2`}>
         <Map />
      </View>
      <View style={tw`h-1/2`}>
        <Stack.Navigator>
  
            <Stack.Screen 
            name="RideOptionsCard"
            component={RideOptionsCard}
            options={{
              headerShown:false,
            }}
          />

        </Stack.Navigator>
      </View>
    </View>
  );
};

export default MapScreen;

const styles = StyleSheet.create({});
