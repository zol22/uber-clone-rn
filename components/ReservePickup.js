import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch} from 'react-redux';
import { reserveOrigin } from '../slices/reserveSlice';
import { useNavigation } from '@react-navigation/native';



const ReservePickup = () => {
    const dispatch = useDispatch();
    const navigation= useNavigation();
  return (
<SafeAreaView style={tw`bg-white flex-1`}>
    <View style={tw`p-3`}>
      <Text style={tw`font-medium mt-10 text-center text-3xl p-5`}>Where would you like to be pickup up?</Text>
               
               {/* Pick up location*/}
               <GooglePlacesAutocomplete 
                styles={toInputBoxStylesOrigin}
                placeholder="Pickup Location"
                textInputProps={{
                    placeholderTextColor: 'grey',
                    }}
                returnKeyType={"search"}
                keyboardShouldPersistTaps='always'
                listViewDisplayed={false} 
                nearbyPlacesAPI="GooglePlacesSearch"
                debounce={400}
                // When it's pressed, if there's not origin, push it into the redux store.
                onPress={(data,details = null)=> {
                  
                    dispatch(reserveOrigin({
                        location: details.geometry.location ,// gives a object with lat and lng
                        description: data.description
                        }))
                        navigation.navigate('ReserveToGo')
                    }}
                fetchDetails={true}
                enablePoweredByContainer={false}
                query={{
                        key: GOOGLE_MAPS_APIKEY ,
                        language: 'en',
                    }}
            />

    </View>
</SafeAreaView>
  );
};

export default ReservePickup;

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
