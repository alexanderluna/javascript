import { SIGN_IN, SIGN_OUT } from "./types";

export const onAuthChange = (isSignedIn) => async (dispatch) => {
    const auth = window.gapi.auth2.getAuthInstance();
    if (auth.isSignedIn.get())
        dispatch(signIn(auth.currentUser.get().getId()));
    else
        dispatch(signOut());
}

export const signIn = (userId) => {
    return {
        type: SIGN_IN,
        payload: userId
    }
}

export const signOut = () => {
    return {
        type: SIGN_OUT
    }
}