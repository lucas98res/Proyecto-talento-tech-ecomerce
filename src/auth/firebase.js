// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB6QGeIEmPYzXhiS43ZAXBCPQxsIjAYJ-U",
    authDomain: "maluecomerce-52f01.firebaseapp.com",
    projectId: "maluecomerce-52f01",
    storageBucket: "maluecomerce-52f01.firebasestorage.app",
    messagingSenderId: "852800725372",
    appId: "1:852800725372:web:e4b3fdb7e84e44792b84f9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//////////////////////////////////////////////////////////////////////
///////////////// AUTENTICACIÓN DE USUARIOS FIREBASE//////////////////////////
//////////////////////////////////////////////////////////////////////
const provider = new GoogleAuthProvider();
const auth = getAuth();

export function crearUsuario(email, password) {
    return createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed up 
            const user = userCredential.user;
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            // ..
        });
}

export function loginEmailPass(email, password) {
    return (
        new Promise((res, rej) => {
            signInWithEmailAndPassword(auth, email, password)
                .then((userCredential) => {
                    const user = userCredential.user;
                    res(user)
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    //console.error(error.code);
                    //console.error(error.message);
                    rej(error);
                })

        })
    )
}
/////////////////////////////////////////////////////////////////
///////////////////// BASE DE DATOS FIRESTORE  //////// ////////
////////////////////////////////////////////////////////////////

import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";

const db = getFirestore(app);

export function crearProducto(name, imagen, price, description) {
    return new Promise(async (res, rej) => {
        try {
            const docRef = await addDoc(collection(db, "productos"), {
                name: name,
                imagen: imagen,
                price: price,
                description: description
            });

            console.log("Document written with ID: ", docRef.id);
            res(docRef)

        } catch (e) {
            console.error("Error adding document: ", e);
            rej(e)
        }
    });
}

export function obtenerProductos() {
    return (
        new Promise(async (res, rej) => {
            try {
                const querySnapshot = await getDocs(collection(db, "users"));

                const resultados = querySnapshot.docs.map(doc => {
                    const data = doc.data();
                    return {
                        id: doc.id,
                        name: data.name,
                        imagen: data.imagen,
                        price: data.price,
                        description: data.description
                    };
                });

                res(resultados);
            } catch (error) {
                console.error("Error al obtener los usuarios:", error);
                rej(error);
            }
        })
    )
}

/*crearProducto("test", "url", 23, "klasjdklsajdsaldkklasdljka").then(() => {
    console.log("si")
}).catch((error) => {
    console.log(error)
})*/

/*obtenerProductos().then((prod) => {
    console.log(prod)
}).catch((error) => {
    console.log(error)
})*/