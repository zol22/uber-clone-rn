import { StyleSheet, Text, View, SafeAreaView, TouchableOpacity, Image, FlatList } from 'react-native';
import React, { useState } from 'react';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectTravelTimeInformation } from '../slices/navSlice';
import { Icon } from 'react-native-elements';

//import LocationInputs from './LocationInputs';

const data = [
  {
    id: "Uber-X-123",
    title: "UberX",
    multiplier: 1,
    image: "https://links.papareact.com/3pn"
  },
  {
    id: "Uber-XL-456",
    title: "Uber Xl",
    multiplier: 1.2,
    image: "https://links.papareact.com/5w8"
  },
  {
    id: "Uber-LUX-789",
    title: "Uber LUX",
    multiplier: 1.75,
    image: "https://links.papareact.com/7pf"
  }
]

const SURGE_CHARGE_RATE = 1.5;

const RideOptionsCard = () => {
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null); 
  const travelTimeInformation = useSelector(selectTravelTimeInformation);

  return (
    <SafeAreaView style={tw`bg-white flex-grow`}>
      <View>
        <Text style={tw`text-center py-3 text-xl`}>Select a Ride - {travelTimeInformation?.distance?.text}</Text>
      </View>

      <FlatList data={data}
   
      keyExtractor={(item)=> item.id}
      renderItem={({ item : {id, image, title, multiplier}, item }) => (
        <TouchableOpacity 
          onPress={()=> setSelected(item)}
          //if the uber ride was selected
          style={tw`flex-row justify-between items-center px-10 ${id === selected?.id && "bg-gray-200"}`}> 
          <Image 
            style={{
              width: 89,
              height: 89,
              resizeMode: "contain",
            }}
            source={{ uri: image}}
          />
          <View style={tw`-ml-6`}>
            <Text style={tw`text-xl font-semibold`} >{title}</Text>
            <Text>{travelTimeInformation?.duration?.text} </Text>
          </View>
          <Text style={tw`text-xl`}>
            { new Intl.NumberFormat('en-US', {
              style: 'currency',
              currency: 'USD'
            }).format(
              (travelTimeInformation?.duration.value * SURGE_CHARGE_RATE * multiplier) / 100
            )
            }
          </Text>
        </TouchableOpacity>
      )}
      />
      <View>
        <TouchableOpacity style={tw`bg-black py-3 m-3`}>
          <Text style={tw`text-center text-white text-xl`}>Choose {selected?.title}</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({});
