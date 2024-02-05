import storage from 'redux-persist/lib/storage'
import { contactsReducer } from "./contacts/slice";
import { filtersReducer } from "./filter/slice";
import { authReducer } from "./auth/slice";
import persistReducer from "redux-persist/es/persistReducer";

const persistConfig = {
	key: 'auth',
	storage,
}

const profilePersistedReducer = persistReducer(persistConfig, authReducer)


export const reducer = {
    contacts: contactsReducer,
    filter: filtersReducer,
    profile: profilePersistedReducer,
}