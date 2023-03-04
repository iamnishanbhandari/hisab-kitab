import { addDoc,collection,deleteDoc,doc,onSnapshot,orderBy,query,setDoc,where } from "firebase/firestore";
import { db } from "./Firebase";
import { getDownloadURL } from "firebase/storage";

const RECEIPTS_COLLECTION = 'receipts'

export function addReceipt(uid,date,locationName,address,items,amount,imageBucket){
    addDoc(collection(db,RECEIPTS_COLLECTION),{uid,date,locationName,address,items,amount,imageBucket})
}