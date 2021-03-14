import firebase from 'firebase';
import { firebaseConfig } from '../../firebase.config';

firebase.initializeApp(firebaseConfig);

async function signIn(provider: firebase.auth.AuthProvider) {
  await firebase
    .auth()
    .signInWithPopup(provider)
    .then(() => {
      alert('認証に成功しました')
    })
    .catch(() => {
      alert('認証失敗しました');
    })
}

export async function googleSignIn() {
  await signIn(new firebase.auth.GoogleAuthProvider());
}

export async function gitHubSignIn() {
  await signIn(new firebase.auth.GithubAuthProvider());
}

export async function twitterSignIn() {
  await signIn(new firebase.auth.TwitterAuthProvider());
}
