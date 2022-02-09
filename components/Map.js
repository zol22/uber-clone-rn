import { StyleSheet, Text, View } from 'react-native';
import React, { useEffect, useRef } from 'react';
import MapView, { Marker } from 'react-native-maps';
import tw from 'tailwind-react-native-classnames';
import { useDispatch, useSelector } from 'react-redux';
import { selectOrigin, selectDestination, setTravelTimeInformation } from '../slices/navSlice';
import MapViewDirections from 'react-native-maps-directions';
import { GOOGLE_MAPS_APIKEY } from "@env";


/* This is the actual Map */

const Map = () => {

    const origin = useSelector(selectOrigin) // pull "origin" from the redux store
    const destination = useSelector(selectDestination)
    const mapRef = useRef(null); // Create a reference to the map
    const dispatch = useDispatch();

    // Auto zoom out into markers
    useEffect(()=> {
        if (!origin || !destination) return;
        mapRef.current.fitToSuppliedMarkers(['origin', 'destination'], {
            eggePadding: { top:50, right:50, bottom: 50, left:50}
        })
    },[origin,destination])

    useEffect(()=> {

        if (!origin || !destination) return;

        const getTravelTime = async() => {
            fetch(`https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=${origin.description}&destinations=${destination.description}&key=${GOOGLE_MAPS_APIKEY}`)
            .then(res => res.json())
            .then(data => {
                dispatch(setTravelTimeInformation(data.rows[0].elements[0]));
            })
        }

        getTravelTime();

    },[origin, destination, GOOGLE_MAPS_APIKEY])


    return (
    <MapView
        ref={mapRef}
        mapType="mutedStandard" // delete unnecessary things on the map, less busy
        style={tw`flex-1`}
        initialRegion={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
            latitudeDelta: 0.005,
            longitudeDelta: 0.005,
        }} >

        {/* If there are origin and destination render MapViewDirections */}
        { origin && destination && (
            <MapViewDirections 
                origin={origin.description}
                destination={destination.description}
                apikey={GOOGLE_MAPS_APIKEY}
                strokeWidth={3}
                strokeColor="black"
            />
            
        )}

    {/************************ Markers ******************************/}

        {/* OPTIONAL: if there is origin.location, render marker*/}    
        {origin?.location && (
            // a little pin drop 
            <Marker 
                coordinate={{
                    latitude: origin.location.lat,
                    longitude: origin.location.lng
                }}
                title="Origin"
                description={origin.description}
                identifier="origin"
            />
        )}


        {/* OPTIONAL: if there is destination.location, render marker*/}    
        {destination?.location && (
            // a little pin drop 
            <Marker 
                coordinate={{
                    latitude: destination.location.lat,
                    longitude: destination.location.lng
                }}
                title="Destination"
                description={destination.description}
                identifier="destination"
            />
        )}


    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
