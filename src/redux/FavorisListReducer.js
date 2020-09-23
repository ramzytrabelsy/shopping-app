// Action Types

export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'

/**
 * Initial state
 */

const initialState = []

/**
 * Reducer
 */

const FavorisListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...state, action.payload]
    case REMOVE_FROM_CART:
      return state.filter(FavorisListItems => FavorisListItems.id !== action.payload.id)
  }
  return state
}

export default FavorisListReducer