import React from 'react'
import {
    View,
    Text,
    FlatList,
    StyleSheet
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_FROM_CART } from '../redux/FavorisListReducer'
import PanierItem from "../components/PanierItem"

function PanierList() {
    // get PanierList from store
    const PanierListItems = useSelector((state) => state.PanierList);
    const dispatch = useDispatch()

    // action to remove item from panier
    const removeItemFromCart = item =>
        dispatch({
            type: REMOVE_FROM_CART, // type of action to dispatch
            payload: item           // item to removed
        })
    return (
        <View
            style={{
                flex: 1
            }}>
            <Text style={styles.panierText}>Panier</Text>

            {PanierListItems.length !== 0 ? (
                // render flatlist 
                <FlatList
                    data={PanierListItems}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <PanierItem item={item}/> // use component created in file components
                    )}
                />
            ) : (
                    <View style={styles.emptyCartContainer}>
                        <Text style={styles.emptyCartMessage}>Your Panier List is empty :'(</Text>
                    </View>
                )}
        </View>
    )
}

//  object of StyleSheet
const styles = StyleSheet.create({
    container: {
        flex: 1, alignItems: 'center', justifyContent: 'center'
    },
    panierText: {
        textAlign: "center", fontSize: 20, paddingTop: 10, paddingBottom: 10
    },
    emptyCartContainer: {
        marginTop: 250,
        justifyContent: 'center',
        alignItems: 'center'
    },
    emptyCartMessage: {
        fontSize: 28
    }
})

export default PanierList