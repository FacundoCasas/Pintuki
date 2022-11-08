import React from "react";
import { StyleSheet, View, Text,Image,TouchableOpacity } from "react-native";

const PublicacionFlatList = ({item,onPress}) => {

    const {titulo, url, id} = item

    return(
        <TouchableOpacity onPress={onPress} style={styles.container}>
            <Image source={{ uri: url }} style={styles.thumbnail}/>
            <Text>{titulo}</Text>
        </TouchableOpacity>
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