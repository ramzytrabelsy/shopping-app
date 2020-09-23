/**
 * State
 *
 * This module is for state definition
 */

import { createStore , combineReducers } from 'redux'
import FavorisListReducer from './FavorisListReducer'
import PanierListReducer from './PanierListReducer'


// combining two reducers into a single reducer
const reducer = combineReducers({
    FavorisList: FavorisListReducer,  // FavorisList Reducer
    PanierList: PanierListReducer     // PanierListR educer
})

/**
* create store
*/
const store = createStore(reducer)

export default store