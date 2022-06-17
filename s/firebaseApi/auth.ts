import Firebase from "@react-native-firebase/app";
import firestore from '@react-native-firebase/firestore';
import firebaseAuth from '@react-native-firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyAqW5tht_dhCf7Bgbl--4dVXefLpN6E978",
  authDomain: "csgocases-85eab.firebaseapp.com",
  projectId: "csgocases-85eab",
  storageBucket: "csgocases-85eab.appspot.com",
  messagingSenderId: "434988569004",
  appId: "1:434988569004:web:c08a65dade8d932b62aa09",
	measurementId: "G-KRM2SHZJNW",
	databaseURL: ''
};

const app = Firebase.initializeApp(firebaseConfig);
const db = firestore();
const auth = firebaseAuth();


interface UserData {
	email: string,
	password: string
}

interface signUserInfo {
	userData: UserData
	userStore: any,
	setLoadingIndicator?: any
}

function createUser({ userData, userStore }: signUserInfo) {
	const email:string = userData.email
	const password: string = userData.password
  auth.createUserWithEmailAndPassword(email, password).then(
    (cred: any) => {
      const user = cred.user;
      if (user) {
        userStore.Logged();
        userStore.setUserUID(user.uid);
			}
		
      return 	db.doc(`users/${cred.user.uid}`).set({
				 first: 'Ada',
        last: 'Lovelace',
			})
    }
  );
}

function signUser (
		{userData,
    userStore,
    setLoadingIndicator}: signUserInfo
) {
	const email:string = userData.email
	const password:string = userData.password
console.log(email,password)
  auth.signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
			if (user) {
				console.log('zalogowany')
        userStore.Logged();
        userStore.setUserUID(user.uid);
        // setLoadingIndicator(false);
        // SetPr(email.value, password.value);
        // databaseData(userStore);
      }
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
      if (errorMessage) {
        console.log('wrong credentials');
      }
    });
}

function logout(userStore: any, pageStore: any) {
  auth.signOut()
    .then(() => {
      pageStore.makeDashboardNotVisible();
      userStore.NotLogged();
    })
    .catch((error) => {
      // An error happened.
      console.log(error);
    });
}


export { signUser, createUser, logout };