import { collection } from 'firebase/firestore';
import {useState, useEffect, useReducer} from 'react';
import {db} from '../firebase/config';
import {collection, addDoc, Timestamp} from 'firebase/firestore';

const initialState = {
    loading: null,
    error: null
}

const insertReducer = (state, action) =>{

}
export const useInserDocument = (docCollection) => {
    const [response, dispatch] = useReducer(insertReducer, initialState)

    // deal with memory leak
    const [cancelled, setCancelled] = useState(false)
    const checkCancelBeforeDispatch = (action) =>{
        if(!cancelled){
            dispatch(action)
        }
    }

    
}