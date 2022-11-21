import React from "react";
import {
    StyleSheet,
    TouchableOpacity
} from "react-native";
import {
    Image,
    Box,
    AspectRatio
} from "native-base";

const PublicacionFlatList = ({ item, onPress }) => {
    const { url } = item

    return (
        <Box maxW="175" m="1" borderColor="coolGray.200" borderWidth="1" >
            <TouchableOpacity onPress={onPress}>
                <AspectRatio w="100%" ratio={16 / 16}>
                    <Image rounded="sm" source={{
                        uri: url
                    }} alt="image" />
                </AspectRatio>
            </TouchableOpacity>
        </Box>
    )
}

export default PublicacionFlatList;