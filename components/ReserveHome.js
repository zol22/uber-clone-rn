import { StyleSheet, Text, TouchableOpacity, View,  ImageBackground  } from 'react-native';
import React from 'react';
import { Icon } from 'react-native-elements';
import tw from 'tailwind-react-native-classnames';
import { useNavigation } from '@react-navigation/native';



const datas = [
    {
        id: "001",
        icon:"briefcase-outline",
        text: "Choose your exact pickup time up to 30 days in advance."
    },
    {
        id: "002",
        icon:"briefcase-outline",
        text: "Choose your exact pickup time up to 30 days in advance."
    },
    {
        id: "003",
        icon:"briefcase-outline",
        text: "Choose your exact pickup time up to 30 days in advance."
    }
]

const ReserveHome = () => {

    const navigation = useNavigation();

  return (
    <View>
        <View style={tw`h-1/2`}>
         <ImageBackground style={{ width:400, height:400, resizeMode: "contain"}}
              source={{
                uri: 'https://learnenglishteens.britishcouncil.org/sites/teens/files/rs261_157781379-low.jpg'
              }}>
              </ImageBackground>

      </View>

      <View style={tw`h-1/2`}>
        <Text style={tw`text-center font-semibold text-4xl p-3`}>Uber Reserve</Text>

        {datas.map((data)=>
            <View key={data.id} style={tw`flex-row items-center`}>
                    <Icon
                            name={data.icon}
                            type="ionicon"
                            size={18}
                            color="black"
                            style={tw`p-2 ml-2`}
                            />
                    <Text style={tw`p-2 text-base font-light tracking-tighter`}>{data.text}</Text>
            </View>
            
        )}
            <View>
                <TouchableOpacity style={tw`bg-black py-3 m-4`}>
                <Text 
                style={tw`text-center text-white text-xl`}
                onPress={()=> navigation.navigate('ReservePickup')}>
                Reserve a ride
                </Text>
                </TouchableOpacity>
            </View>
      </View>

    </View>
  );
};

export default ReserveHome;

const styles = StyleSheet.create({});
