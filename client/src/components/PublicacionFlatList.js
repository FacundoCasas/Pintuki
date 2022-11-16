import React from "react";
import { StyleSheet, View, TouchableOpacity } from "react-native";
import { HStack, Center, Image, Box, AspectRatio, Button, Text, Heading } from "native-base";

const PublicacionFlatList = ({ item, onPress }) => {

    const { titulo, url, id } = item

    return (
        /*         <TouchableOpacity onPress={onPress} style={styles.container}>
                    <Image source={{ uri: url }} style={styles.thumbnail} />
                </TouchableOpacity> */

        <Box maxW="175" m="1" /* overflow="hidden" */ borderColor="coolGray.200" borderWidth="1" /* _dark={{
            borderColor: "coolGray.600",
            backgroundColor: "gray.700"
        }} _web={{
            shadow: 2,
            borderWidth: 0
        }} _light={{
            backgroundColor: "gray.50"
        }} */>
            <TouchableOpacity  onPress={onPress}  /* _dark={{
                borderColor: "coolGray.600",
                backgroundColor: "gray.700"
            }} _light={{
                backgroundColor: "gray.50"
            }} */>
                <AspectRatio w="100%" ratio={16 / 16}>
                    <Image rounded="sm" source={{
                        uri: url
                    }} alt="image" />
                </AspectRatio>
            </TouchableOpacity>
        </Box>

    )
}

const styles = StyleSheet.create({
    container: {
        width: '50%',
        height: '50%',
        backgroundColor: "gainsboro",
        borderRadius: 10,
        padding: 10,
    },
    thumbnail: {
        width: 300,
        height: 300,
        //resizeMode: 'contain',
    },
});

export default PublicacionFlatList;