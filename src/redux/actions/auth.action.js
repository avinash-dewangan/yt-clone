import firebase from "firebase/compat/app";
import auth from "../../firebase";
import {
  LOAD_PROFILE,
  LOGIN_FAIL,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOG_OUT,
} from "../actionType";

export const login = () => async (dispach) => {
  try {
    dispach({
      type: LOGIN_REQUEST,
    });

    const provider = new firebase.auth.GoogleAuthProvider();

    const res = await auth.signInWithPopup(provider);
    console.log(res);

    const accessToken = await res.credential.accessToken;

    const profile = {
      name: await res.additionalUserInfo.profile.name,
      photoURL: await res.additionalUserInfo.profile.picture,
    };

    sessionStorage.setItem("ytc-access-token",accessToken)
    sessionStorage.setItem("ytc-user",JSON.stringify(profile))




    dispach({
      type: LOGIN_SUCCESS,
      payload: accessToken,
    });

    dispach({
      type: LOAD_PROFILE,
      payload: profile,
    });
  } catch (error) {
    console.log(error.message);
    dispach({
      type: LOGIN_FAIL,
      payload: error.message,
    });
  }
};


export const logout =() => async(dispach)=>{
  await auth.signOut()
  dispach({
    type:LOG_OUT,
  })


  sessionStorage.removeItem("ytc-access-token")
  sessionStorage.removeItem("ytc-user")

}