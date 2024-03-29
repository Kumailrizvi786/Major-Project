//configure store
import {configureStore} from '@reduxjs/toolkit';
import authReducer from '../features/authSlice';
import { persistStore} from 'redux-persist';
import { persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from "redux-persist";
import storage from 'redux-persist/lib/storage';


const persistConfig = {
    key: 'root',
    storage,
    // whitelist: ['auth'],
  };
  
const persistedReducer = persistReducer(persistConfig,authReducer)
export const store = configureStore({ 
    reducer: persistedReducer,
    middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    })
    

    
});

export const persistor = persistStore(store)

export default store;