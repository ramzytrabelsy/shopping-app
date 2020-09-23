import React from 'react'
import {
  View,
  Text,
  FlatList,
  StyleSheet
} from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { REMOVE_FROM_CART } from '../redux/FavorisListReducer'
import ProductItem from "../components/ProductItem"


function FavorisList() {
  // get FavorisList from store
  const FavorisListItems = useSelector((state) => state.FavorisList);
  const dispatch = useDispatch()

  // action to remove item from FavorisList
  const removeItemFromCart = item =>
    dispatch({
      type: REMOVE_FROM_CART,
      payload: item
    })
  return (
    <View
      style={{
        flex: 1
      }}>
      {FavorisListItems.length !== 0 ? (
        // render FlatList with FavorisList 
        <FlatList
        numColumns={2}
        data={FavorisListItems}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <ProductItem item={item} type={"remove"} removeItemFromCart={()=>removeItemFromCart(item)}/> // use component created in file components
        )}
      />
      ) : (
        // render this component if FavorisList is empty
        <View style={styles.emptyCartContainer}>
          <Text style={styles.emptyCartMessage}>Your Favoris List is empty :'(</Text>
        </View>
      )}
    </View>
  )
}

//  object of StyleSheet
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  bookItemContainer: {
    flexDirection: 'row',
    padding: 10
  },
  thumbnail: {
    width: 100,
    height: 150,
    borderRadius: 5
  },
  bookItemMetaContainer: {
    padding: 5,
    paddingLeft: 10
  },
  textTitle: {
    fontSize: 22,
    fontWeight: '400'
  },
  textAuthor: {
    fontSize: 18,
    fontWeight: '200'
  },
  buttonContainer: {
    position: 'absolute',
    top: 110,
    left: 10
  },
  button: {
    borderRadius: 8,
    backgroundColor: '#ff333390',
    padding: 5
  },
  buttonText: {
    fontSize: 22,
    color: '#fff'
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

export default FavorisList