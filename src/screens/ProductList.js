import React from 'react'
import {
  View,
  FlatList,
  StyleSheet,Text
} from 'react-native'
import { useDispatch,useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native';
import { ADD_TO_CART } from '../redux/FavorisListReducer';
import ProductItem from "../components/ProductItem"
import { productLict } from '../utils/Data'

function ProductList() {
  // get FavorisList from store
  const FavorisListItems = useSelector((state) => state.FavorisList);
  const navigation = useNavigation();
  const dispatch = useDispatch()
  // action to add item from FavorisList 
  const addItemToCart = item => dispatch({ type: ADD_TO_CART, payload: item })


  // function to verify if item selected to save in FavorisList already exist or not
  const addItemToCartt= (item)=> {
    let index = FavorisListItems.findIndex(favorisItem => favorisItem == item )
    if(index == -1){
      addItemToCart(item)
    }
  }


  return (
    
    <View style={styles.container}>
       {/* render FlatList with productLict */}
      <FlatList
        numColumns={2}
        data={productLict}
        keyExtractor={(item, index) => index}
        renderItem={({ item }) => (
          <ProductItem item={item} addItemToCart={()=>addItemToCartt(item)}/> // use component created in file components
        )}
      />
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
    height: 150
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
    backgroundColor: '#24a0ed',
    padding: 5
  },
  buttonText: {
    fontSize: 22,
    color: '#fff'
  }
})

export default ProductList