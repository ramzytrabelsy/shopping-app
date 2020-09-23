import React from 'react'
import {
    View,
    Text,
    Image,
    TouchableOpacity,
    StyleSheet
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons';

// function component of panier item

function PanierItem({ item }) { //props

    return (
        <View style={styles.container}>


            <View style={styles.itemContainer}>
                <Image resizeMode={"contain"} style={styles.thumbnail} source={{ uri: item.imgUrl }} />
                <View style={styles.itemMetaContainer}>
                    <View>
                        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{item.name}</Text>
                        <Text>{item.author}</Text>
                    </View>
                    <View style={styles.priceContainer}>
                        <Text style={styles.textPrice}>{item.price}</Text>
                        <View style={styles.buttonPlusMinusContainer}>
                            <TouchableOpacity>
                                <Icon name="ios-remove-circle" size={30} color={"#536dfe"} />
                            </TouchableOpacity>
                            <Text style={styles.counterText}>0</Text>
                            <TouchableOpacity>
                                <Icon name="ios-add-circle" size={30} color={"#536dfe"} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </View>

        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    itemContainer: {
        margin: 10, backgroundColor: 'transparent', flexDirection: 'row', borderBottomWidth: 2, borderColor: "#cccccc", paddingBottom: 10
    },
    thumbnail: {
        width: 100,
        height: 150,
        borderRadius: 5
    },
    itemMetaContainer: {
        flex: 1, backgroundColor: 'transparent', padding: 10, justifyContent: "space-between"
    },
    priceContainer: {
        flexDirection: 'row', justifyContent: 'space-between'
    },
    textPrice: {
        fontWeight: 'bold', color: "#536dfe", fontSize: 20
    },
    buttonPlusMinusContainer: {
        flexDirection: 'row', alignItems: 'center'
    },
    counterText: {
        paddingHorizontal: 8, fontWeight: 'bold'
    },
})
export default PanierItem  