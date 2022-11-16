import React from "react";
import { StyleSheet, View } from "react-native";
import { Button, Text, VStack } from "native-base";

const CategoriaFlatList = ({item,onPress}) => {

    const {id, titulo, color} = item

    return(
        <VStack space={3} /* paddingRight={5} */ p={2}>
            <Button onPress={onPress} colorScheme={color} style={styles.container} width="40" height="20">
                <Text style={styles.description}>{titulo}</Text>
            </Button>
        </VStack>
    )
}
//style={styles.container}
const styles = StyleSheet.create({
    container: {
      justifyContent: 'center',
      borderRadius: 10,
      padding:10,
      borderColor: "black",
    },
    description: {
        fontSize: 17,
        fontWeight: "bold",
        letterSpacing:1,
        color: "white",
        paddingBottom: "2%",
    },
});

export default CategoriaFlatList;