// Write a function that checks if a given password is valid. Password validations are:
// The length should be 6 - 10 characters (inclusive)
//  It should consists only of letters and digits
//  It should have at least 2 digits
// If a password is valid print &quot;Password is valid&quot;.
// If it is NOT valid, for every unfulfilled rule print a message:
//  &quot;Password must be between 6 and 10 characters&quot;
//  &quot;Password must consist only of letters and digits&quot;
//  &quot;Password must have at least 2 digits&quot;

function passwordValidator(pass) {
    function passLength(str) {
        return str.length >= 6 && str.length <= 10 ? '' : 'Password must be between 6 and 10 characters\n';
    }

    function letterDigit(str) {
        let isCorrect = true;
        for (let char of str) {
            let code = char.charCodeAt();
            if (code < 48 || code > 57 && code < 65 || code > 90 && code < 97 || code > 122) {
                isCorrect = false;
            }
        }
        return isCorrect ? '' : 'Password must consist only of letters and digits\n';
    }

    function twoDigit(str) {
        let count = 0;
        for (let digit of str) {
            digit = digit.charCodeAt();
            if (digit >= 48 && digit <= 57) {
                count++;
            }
        }
        return count >= 2 ? '' : 'Password must have at least 2 digits\n';
    }
    let result = passLength(pass) + letterDigit(pass) + twoDigit(pass);
    return result ? result : 'Password is valid'
}
// // expected output:
// // Password must be between 6 and 10 characters
// // Password must have at least 2 digits
// console.log(passwordValidator('logIn'))