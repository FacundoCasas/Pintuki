import React from "react";
import { StyleSheet, View, Text } from "react-native";

const PublicacionFlatList = ({item}) => {

    //const {nombre, url, id} = item

    return (
        <View style = {styles.container}>
            <Text>HOla </Text>
        </View> 
    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: "gainsboro",
      borderRadius: 10,
      padding: 10,
    }
});

export default PublicacionFlatList;