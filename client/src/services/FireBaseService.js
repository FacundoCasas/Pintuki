/*
import React, { useEffect, useState } from "react";
//import firebaseConfig from "../utils/FireBase";
//import * as firebase from "firebase/app";
//firebase.initializeApp(firebaseConfig);
import firebase from '../utils/FireBase'
import { v4 as uuid } from 'uuid';
//imports

const [urlFinal, setUrlFinal] = useState('');
//metods
const postImage = uri => {
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.onerror = reject;
        xhr.onreadystatechange = () => {
            if (xhr.readyState === 4) {
                resolve(xhr.response);
            }
        };

        xhr.open("GET", uri);
        xhr.responseType = "blob";
        xhr.send();
    });
};

const uploadImage = async (imageUri) => {
    //precisamos un id de imagen para la uri, se podra usar un Id de javascript para eso?
    //https://dev.to/salehmubashar/create-a-unique-id-in-react-js-3f75
    //haremos que la url sea images/unicId que sera el campo url que luego se almacenara en la base de datos
    //esta funcion debe retornar la url(Probar el Return)
    if (imageUri !== '') {
        setUrlFinal(`images/${uuid()}`)
        console.log("uploadImage", urlFinal)
        this.postImage(imageUri)
            .then(resolve => {
                let ref = firebase
                    .storage()
                    .ref()
                    .child(urlFinal);
                ref
                    .put(resolve)
                    .then(resolve => {
                        console.log("Imagen subida correctamente");
                        return urlFinal;
                    })
                    .catch(error => {
                        console.log("Error al subir la imagen");
                    });
            })
            .catch(error => {
                console.log(error);
            });
    }

};

const loadImage = async (imageUri) => {
    //quiero que retorne la imageFirebase y tiene que recibir por parametro el id de la imagen(Probar el Return)
    firebase
        .storage()
        .ref(imageUri)
        .getDownloadURL()
        .then(resolve => {
            console.log("loadImage", resolve)
            return resolve;
        })
        .catch(error => {
            console.log(error);
        });
};


//exports
export {
    uploadImage,
    loadImage
}

*/