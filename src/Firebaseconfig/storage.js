
import {storage ,ref,uploadBytes} from "firebase/storage"
import {format} from 'date-fns';

const BUCKET_URL = "https://console.firebase.google.com/project/hisab-kitab-1bbd9/storage/hisab-kitab-1bbd9.appspot.com/files"

export async function uploadImage(image,uid){
    const formattedDate = format(new Date(),"yyyy-MM-dd'T'HH:mm:ss'Z'");
    const bucket = `${BUCKET_URL}/${uid}/${formattedDate}.jpg`;
    const storageRef = ref(storage,bucket);
    await uploadBytes(storageRef,image);
    return bucket;
}

