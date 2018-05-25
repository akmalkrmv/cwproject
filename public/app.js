$(function () {

    //const app = firebase.app();

    firebase.auth().onAuthStateChanged(firebaseUser => {
        if (firebaseUser) {
            $('#username').text(firebaseUser.displayName || firebaseUser.email);
            $('#btnSignOut').show();
        } else {
            $('#username').text("");
            $('#btnSignOut').hide();
        }
    })

});


function googleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider();

    firebase.auth().signInWithPopup(provider)
        .then(result => {})
        .catch(console.log);
}


function simpleLogin() {
    const email = $('#inputEmail').val();
    const password = $('#inputPassword').val();

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then(result => {})
        .catch(console.log);
}

function signOut() {
    firebase.auth().signOut();
}


////////////////////////////
function fetchRoles() {
    const db = firebase.firestore();
    db.settings({
        timestampsInSnapshots: true
    });

    const roles = db.collection('roles');

    roles.get().then(collection => {
        console.log(collection.data());
    })
}