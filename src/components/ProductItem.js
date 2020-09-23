import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'

// function component of product item
function ProductItem({ item, addItemToCart, removeItemFromCart, type = "Add" }) { // props used in this component

    return (
        <View style={styles.productItemContainer}>
            <Image source={{ uri: item.imgUrl }} style={styles.thumbnail} />
            <Text>{item.name}</Text>
            <Text>{item.author}</Text>
            <Text>{item.price}</Text>
            <TouchableOpacity style={type == "Add" ? styles.buttonContainer : styles.removeButtonContainer} onPress={() => type == "Add" ? addItemToCart(item) : removeItemFromCart(item)}>
                <Text style={styles.btntext}>{type == "Add" ? "Add to favoris list" : "Remove"}</Text>
            </TouchableOpacity>
            { type == "Add" ?
                (
                    <TouchableOpacity style={type == "Add" ? styles.buttonContainer : styles.removeButtonContainer}>
                        <Text style={styles.btntext}>Add to panier list</Text>
                    </TouchableOpacity>
                ) : null
            }
        </View>
    );
}

const styles = StyleSheet.create({

    productItemContainer: {
        flex: 1,
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    thumbnail: {
        width: 100,
        height: 150,
        borderRadius: 5
    },
    buttonContainer: {
        height: 30,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        backgroundColor: "#536dfe",
        justifyContent: "center",
    },
    removeButtonContainer: {
        height: 30,
        borderRadius: 5,
        marginTop: 10,
        marginBottom: 10,
        padding: 5,
        backgroundColor: "red",
        justifyContent: "center",
    },
    btntext: {
    color: "#ffffff"
    }
})
export default ProductItem  