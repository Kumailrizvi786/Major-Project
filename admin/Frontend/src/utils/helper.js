export default function getUser() {
    return JSON.parse(localStorage.getItem('user'));
}

// chekcing if the user is logged in
export function isLoggedIn() {
    return localStorage.getItem('user') !== null;
}