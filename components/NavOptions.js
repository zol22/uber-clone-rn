import {  FlatList, Image, Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { Icon } from 'react-native-elements';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';
import { selectOrigin } from '../slices/navSlice';


const data = [
  {
    id: "123",
    title: "Ride",
    image: "https://links.papareact.com/3pn",
    screen:"InputScreen",
  },
  {
    id: "456",
    title: "Food",
    image: "https://links.papareact.com/28w",
    screen:"EatsScreen"
  },
  {
    id: "789",
    title: "Reserve",
    image: "https://raw.githubusercontent.com/zol22/images/main/calendar.png",
    screen:"ReserveScreen"
  },
  {
    id: "901",
    title: "Reserve",
    image: "https://raw.githubusercontent.com/zol22/images/main/calendar.png",
    screen:"ReserveScreen"
  }
]

const NavOptions = () => {

  const navigation = useNavigation() // hooks 
  const origin = useSelector(selectOrigin) // pull "origin" from the redux store
  
  return (

    /* The images: Ride, Food, Reserve */
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      numColumns={3}
      horizontal={false} //by default, this Flatlist is vertical
      renderItem={({item}) => ( // for each item, what should we do?
        <TouchableOpacity
          onPress={()=> navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-200 m-2 w-24 h-3/4`}
          disable={!origin} // this is disable if there's no origin
        >
          {/*Only applies this tw if there's no origin style={tw`${!origin && "opacity-20"}`}*/}
          <View>
            <Image 
              style={{ width:60, height: 60}}
              source={{ uri: item.image}}
            />
          </View>
          <Text style={tw`mt-2 text-sm font-semibold`}>{item.title}</Text>
        </TouchableOpacity>
      )}
      />
    
  );
};

export default NavOptions;

