import { StyleSheet, View, TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import ReserveHome from '../components/ReserveHome';
import ReservePickup from '../components/ReservePickup';
import ReserveToGo from '../components/ReserveToGo';
import ReserveCalendar from '../components/ReserveToGo';


const ReserveScreen = () => {

  const Stack = createNativeStackNavigator();
  const navigation = useNavigation();

  return (
    <View>
      <TouchableOpacity 
        onPress={()=> navigation.navigate("HomeScreen")}
        style={tw` absolute top-16 left-3 z-50 p-1 pt-0 `}>
        <Icon name="arrow-back-outline" type="ionicon" size={30}/>
      </TouchableOpacity>
      <View style={tw`h-full`}>
        <Stack.Navigator>
            <Stack.Screen 
            name="ReserveHome"
            component={ReserveHome}
            options={{
              headerShown:false,
            }}
          />
            <Stack.Screen 
            name="ReservePickup"
            component={ReservePickup}
            options={{
              headerShown:false,
            }}
          />
            <Stack.Screen 
            name="ReserveToGo"
            component={ReserveToGo}
            options={{
              headerShown:false,
            }}
          />
           <Stack.Screen 
            name="ReserveCalendar"
            component={ReserveCalendar}
            options={{
              headerShown:false,
            }}
          />
        </Stack.Navigator>
      </View>
    </View>
  );
};

export default ReserveScreen;

const styles = StyleSheet.create({});
