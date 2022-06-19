import React from "react";

import {useAuthentication} from '../hooks/useAuthentication';

function Profile(){
    const {auth} = useAuthentication();
    return (
        <>
            <h2>Perfil</h2>
            <p>Nome: {auth.currentUser.displayName}</p>
            <p>Email: {auth.currentUser.email}</p>
        </>
    )
}
export default Profile