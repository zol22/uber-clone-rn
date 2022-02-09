import { StyleSheet, Text, View, SafeAreaView , TouchableOpacity} from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch, useSelector } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';


const LocationInputs = () => {
    const dispatch = useDispatch();
    const navigation= useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>

        <View style={tw`p-3`}>
    
            {/* Pick up location*/}
            <GooglePlacesAutocomplete 
                styles={toInputBoxStylesOrigin}
                placeholder="Pickup Location"
                textInputProps={{
                    placeholderTextColor: 'black',
                    }}
                returnKeyType={"search"}
                keyboardShouldPersistTaps='always'
                listViewDisplayed={false} 
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                // When it's pressed, if there's not origin, push it into the redux store.
                onPress={(data,details = null)=> {
                  
                    dispatch(setOrigin({
                        location: details.geometry.location ,// gives a object with lat and lng
                        description: data.description
                        }))
                    }}
                fetchDetails={true}
                enablePoweredByContainer={false}
                query={{
                        key: GOOGLE_MAPS_APIKEY ,
                        language: 'en',
                    }}
            />

              {/* Destination location*/}
            <GooglePlacesAutocomplete 
                styles={toInputBoxStylesDestination}
                placeholder="Where to?"
                textInputProps={{
                    placeholderTextColor: 'black',
                    }}
                returnKeyType={"search"}
                keyboardShouldPersistTaps='always'
                listViewDisplayed={false} 
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                // When it's pressed, push into the redux store the destination(location and description) 
                onPress={(data,details = null)=> {
                    dispatch(setDestination({
                        location: details.geometry.location ,// gives a object with lat and lng
                        description: data.description
                        }))
                        navigation.navigate('MapScreen')
                       
                    }}
                fetchDetails={true}
                enablePoweredByContainer={false}
                query={{
                        key: GOOGLE_MAPS_APIKEY ,
                        language: 'en',
                    }}
            />

        </View>
        {/*<NavFavourites />*/}
        {/*<View style={tw`flex-row bg-white justify-evenly py-2 mt-auto border-t border-gray-100`}>
            <TouchableOpacity style={tw`flex-row justify-between bg-black w-24 px-4 py-3 rounded-full`}
                onPress={()=> navigation.navigate("RideOptionsCard")}
            >
                <Icon name="car" type="font-awesome" color="white" size={16}/>
                <Text style={tw`text-white text-center`}>Rides</Text>
            </TouchableOpacity>
            <TouchableOpacity style={tw`flex-row justify-between w-24 px-4 py-3 rounded-full`}>
                <Icon name="fast-food-outline" type="ionicon" color="black" size={16}/>
                <Text style={tw`text-center`}>Eats</Text>
            </TouchableOpacity>
        </View>*/}
    </SafeAreaView>
  );
};

export default LocationInputs;


const toInputBoxStylesOrigin = StyleSheet.create({
    // keys for style object GooglePlacesAutocomplete
    container: {
        paddingTop:30,
        flex: 0,
        paddingLeft:12,
        paddingRight:12
    },
    textInput: {
        backgroundColor: '#edf2f7',
        borderRadius: 0,
        fontSize: 16,
    },
    textInputContainer: {
        paddingHorizontal: 18,
        paddingBottom: 0,
    },
});
const toInputBoxStylesDestination = StyleSheet.create({
    // keys for style object GooglePlacesAutocomplete
    container: {
        flex: 0,
        paddingLeft:12,
        paddingRight:12
    },
    textInput: {
        backgroundColor: '#edf2f7',
        borderRadius: 0,
        fontSize: 16,
    },
    textInputContainer: {
        paddingHorizontal: 18,
        paddingBottom: 0,
    },
})
