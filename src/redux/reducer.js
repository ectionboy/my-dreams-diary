import storage from 'redux-persist/lib/storage'
import { diaryReducer } from "./diary/slice";
import { filtersReducer } from "./filter/slice";
import persistReducer from "redux-persist/es/persistReducer";
import { authReducer } from './auth/slice';

const persistConfig = {
	key: 'auth',
	storage,
}

const profilePersistedReducer = persistReducer(persistConfig, authReducer)


export const reducer = {
    diary: diaryReducer,
    filter: filtersReducer,
    profile: profilePersistedReducer,
}