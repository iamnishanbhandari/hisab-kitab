import firebase from 'firebase/compat/app';
import 'firebase/storage';
import { format } from 'date-fns';

const BUCKET_URL = "https://console.firebase.google.com/project/hisab-kitab-1bbd9/storage/hisab-kitab-1bbd9.appspot.com/files"

export async function uploadImage(image, uid) {
  const formattedDate = format(new Date(), 'yyyy-MM-dd\'T\'HH:mm:ss\'Z\'');
  const bucket = `${uid}/${formattedDate}.jpg`;
  const storageRef = firebase.storage().ref().child(bucket);
  await storageRef.put(image);
  const downloadURL = await storageRef.getDownloadURL();
  return downloadURL;
}





