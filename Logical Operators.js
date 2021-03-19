// if statements

const password = '';

if (password.length >= 12 && password.includes('@')) {
    console.log('That password is might strong!')
} else if (password.length >= 8 || password.includes('@') && password.length > 5) {
    console.log('That password is strong enough!');
} else {
    console.log('That password is too weak!')
}
