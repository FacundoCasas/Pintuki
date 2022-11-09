import React from "react";
import { StyleSheet, SafeAreaView, FlatList } from "react-native";
import PublicacionFlatList from "../components/PublicacionFlatList.js";
const ButtonFlatList = ({ navigation, data, ruta, publicacion }) => {

    const goToPublicacion = (id) => {
        navigation.navigate(ruta, { itemId: id });
    }

    const renderItem = ({ item }) => {
        if (publicacion) {
            return (
                <PublicacionFlatList
                    item={item}
                    onPress={() => goToPublicacion(item.id)}
                />
            );
        } else {
            return (
                <PublicacionFlatList
                    item={item}
                    onPress={() => goToPublicacion(item.id)}
                />
            );
        }
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        marginHorizontal: "5%",
        margin: 20,
    },
    title: {
        fontWeight: "bold",
        fontSize: 25,
        color: "teal",
        padding: 20,
    },
    description: {
        fontSize: 18,
        color: "gray",
        paddingBottom: "2%",
    },
    buttonContainer: {
        width: "90%",
        marginBottom: 20,
    },
    image: {
        width: "80%",
        height: "50%",
    },
});

export default ButtonFlatList;