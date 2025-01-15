import {intializeApp} from 'firebase/app'
import {getAuth, onAuthStateChanged} from 'firebase/auth'
import { collection, getFirestore } from 'firebase/firestore'


const firebaseApp = intializeApp({


    //need to fill in 
    
});
const auth = getAuth(firebase);
const db = getFirestore(firebaseApp);
db.collection('todos'),getDocs();
const todosCol = collection(db, 'todos');
const snapshot = await getDocs(todosCol);

// detect auth state 
auth.onAuthStateChanged(user => {

});





// why does firebase configureation is not happen!!!!!!!!!!!!!!!!!!!
const firebase = intializeApp({
    
})

