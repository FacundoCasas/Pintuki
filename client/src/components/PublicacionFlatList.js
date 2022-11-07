import React from "react";
import { StyleSheet, View, Text,Image } from "react-native";

const PublicacionFlatList = ({item}) => {

    const {titulo, url, id} = item

    return (
        <View style = {styles.container}>
            <Image source={{ uri: url }} style={styles.thumbnail}/>
            <Text>{titulo}</Text>
            <Text>{url}</Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "gainsboro",
      borderRadius: 10,
      padding: 10,
    },
    thumbnail: {
        width: 300,
        height: 300,
        resizeMode: 'contain',
    },
});

export default PublicacionFlatList;