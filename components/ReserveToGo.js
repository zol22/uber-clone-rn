import { StyleSheet, Text, View,SafeAreaView } from 'react-native';
import React from 'react';
import tw from 'tailwind-react-native-classnames';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch, useSelector} from 'react-redux';
import { reserveDestination, selectReserveOrigin} from '../slices/reserveSlice';
import { useNavigation } from '@react-navigation/native';


const ReserveToGo = () => {
  const dispatch = useDispatch();
  const navigation= useNavigation();
  const selectOriginReserved = useSelector(selectReserveOrigin);
  console.log(selectOriginReserved)

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`p-2`}>
          <Text style={tw`text-justify  font-medium mt-16  text-4xl p-3`}>Where would you like to go?</Text>
          <Text style={tw`text-left p-3 `}>From <Text style={tw`underline`}>{selectOriginReserved.description}</Text></Text>
         
          {/* Pick up location*/}
          <GooglePlacesAutocomplete 
                styles={toInputBoxStylesDestination}
                placeholder="Destination"
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
                    
                      dispatch(reserveDest({
                          location: details.geometry.location ,// gives a object with lat and lng
                          description: data.description
                          }))
                          navigation.navigate('ReserveCalendar')
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

export default ReserveToGo;

const toInputBoxStylesDestination = StyleSheet.create({
  // keys for style object GooglePlacesAutocomplete
  container: {
    marginTop: 30,
    paddingTop:30 ,
      flex: 0
  },
  textInput: {
      backgroundColor: '#edf2f7',
      borderRadius: 0,
      fontSize: 16,
  },
  textInputContainer: {
      paddingHorizontal: 0,
      paddingBottom: 0,
  },
})
