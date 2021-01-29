import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import usersReducer from './Users/usersReducer';

const persistConfig = {
    key: 'root',
    storage,
    debug: true
}

const rootReducer = combineReducers({
    user: usersReducer,
});
// const rootReducer = usersReducer;

const persistedReducer = persistReducer(persistConfig, rootReducer);

// const persistedReducer = rootReducer;

export default persistedReducer;
