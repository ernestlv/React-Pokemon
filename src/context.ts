import { createContext, Dispatch } from 'react';
import { appReducer, initialState } from './reducer';

const initialDispatcher:Dispatch<AppAction> = ( action:AppAction ) => {};
const initialContext:AppContext = { state:initialState, dispatch:initialDispatcher }; //see Provider in main
export const Context = createContext( initialContext );
