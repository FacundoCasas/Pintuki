import { initializeApp } from "firebase/app";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { v4 as uuid } from 'uuid';

const firebaseConfig = {
  apiKey: "AIzaSyCm1aeHwD5idtYLpTGV9zB-HLPlFeDPIkQ",
  authDomain: "pintuki-c18f6.firebaseapp.com",
  projectId: "pintuki-c18f6",
  storageBucket: "pintuki-c18f6.appspot.com",
  messagingSenderId: "1080261081086",
  appId: "1:1080261081086:web:de264c60fd02a843cd32af"
};

const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

//Verificar si el uploadBytes es lo que necesitamos con expo u otra funcion
export async function uploadFile(file) {
  const storageRef = ref(storage, uuid());
  const blob = await fileToBlob(file.localUri)
  //const blob = await addBlob(file)
  await uploadBytes(storageRef, blob);
  const url = await getDownloadURL(storageRef);
  console.log("Link Imagen:", url)
  return url;
}

export const fileToBlob = async(path)=>{

  const file = await fetch(path)

  const blob = await file.blob()

  return blob

}
