import React from "react";
import { 
    StyleSheet, 
    SafeAreaView, 
    FlatList, 
    View 
} from "react-native";
import PublicacionFlatList from "../components/PublicacionFlatList.js";
import CategoriaFlatList from "../components/CategoriaFlatList.js";

const ButtonFlatList = ({ navigation, data, ruta, publicacion }) => {

    const goToPublicacion = (id) => {
        navigation.navigate(ruta, { itemId: id });
    }

    const goToCategoria = (categoriaTitulo) => {
        navigation.navigate(ruta, { categoriaTitulo });
    }

    const renderItem = ({ item }) => {
        return (
            <View>
                {publicacion ?
                    <PublicacionFlatList
                        item={item}
                        onPress={() => goToPublicacion(item.id)}
                    />
                    :
                    <CategoriaFlatList
                        item={item}
                        onPress={() => goToCategoria(item.titulo)}
                    />
                }
            </View>
        );
    };

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={data}
                renderItem={renderItem}
                keyExtractor={(item) => item.id}
                numColumns={2}
                initialNumToRender={10}
                ItemSeparatorComponent={() => <View style={{ height: 0 }} />}
            />
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
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
        width: "100%",
        marginBottom: 20,
    },
    image: {
        width: "80%",
        height: "50%",
    },
});

export default ButtonFlatList;