import { StyleSheet, Text, View, SafeAreaView, Image } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../components/NavOptions';
import NavFavourites from '../components/NavFavourites';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';


const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation= useNavigation();
  return (
    <SafeAreaView style={tw`bg-white h-full`}>
    <View style={tw`p-5`}>
        <Image 
            style={{
                width:100,
                height: 100,
                resizeMode: 'contain',

            }}
            source={{
                uri: "https://www.amcham.hr/storage/upload/members/uber_500x400_12274.jpg.axd?width=300&height=240&scale=both&quality=80"
            }}
        />

      {/* Input from the user, Where to ?, must enable location to the device */}
      
      {/*<GooglePlacesAutocomplete 
        placeholder="Where to?"
        textInputProps={{
        placeholderTextColor: 'black',
          }}
        styles={{
          container: {
            flex:0,
          },
          textInput: {
            fontSize:18,
            backgroundColor: '#edf2f7',
          }
        }}
        // When it's pressed, push the origin into the redux store the origin(location and description) and make sure destination is null first
        onPress={(data,details = null)=> {
          navigation.navigate('InputScreen');
          dispatch(setOrigin({
            location: details.geometry.location ,// gives a object with lat and lng
            description: data.description
          }))
      
          dispatch(setDestination(null))

        }}

        fetchDetails={true}
        returnKeyType={"search"}
        minLength={2}
        enablePoweredByContainer={false}
        query={{
        key: GOOGLE_MAPS_APIKEY ,
        language: 'en',
      }}
        nearbyPlacesAPI="GooglePlacesSearch"
        debounce={400}
      />*/}
        <NavOptions />
        <NavFavourites />
    </View>
     
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
