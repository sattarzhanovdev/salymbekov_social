import * as firebase from 'firebase/app'
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signOut, 
  updateProfile 
} from 'firebase/auth'


export const firebaseConfig = {
  apiKey: "AIzaSyBj8I87JdtcIm5Pz0wKfbujZCZkQzoPAHI",
  authDomain: "salymbekov-social.firebaseapp.com",
  projectId: "salymbekov-social",
  storageBucket: "salymbekov-social.appspot.com",
  messagingSenderId: "126423460952",
  appId: "1:126423460952:web:461b176afef033b0edae2d"
};



export const app = firebase.initializeApp(firebaseConfig)

export const auth = getAuth(app)

const provider = new GoogleAuthProvider()




// LOGIN WITH GOOGLE

export const handleLoginWithGoogle = () => signInWithPopup(auth, provider)


// CHANGE PROFILE PHOTO

export const changeAva = async (useremail, avatar) => {
  try {
    const res = await signInWithPopup(auth, provider)
    updateProfile(res.user, {
      photoURL: avatar
    })
  } catch {
  }
}


// SIGN-OUT

export const handleSignOut = () => signOut(auth)
