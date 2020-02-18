
import { createStore } from 'redux'
import combineReducers from './rootReducer'
import { persistStore, persistReducer } from 'redux-persist';
import storageSession from 'redux-persist/lib/storage/session'
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';
const persistConfig = {
    key: 'root',
    storage: storageSession,
    stateReconciler: autoMergeLevel2 // see "Merge Process" section for details.
   };
   
const pReducer = persistReducer(persistConfig, combineReducers);

export const store = createStore(pReducer)
export const persistor = persistStore(store);
