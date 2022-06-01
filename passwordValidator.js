function isValidPassword(password){
    if(password.length < 16) {
        return {
            result: false,
            reason: `Only ${password.length} characteres.`,
        };
    } else if (password.length > 32) {
        return {
            result: false,
            reason: `Password too long: ${password.length} characters.`,
        };
    }
    const isStrong = 
        /^(?=.*[0-9])(?=.*[!@#$%^&'|_>`()])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*'|_>`()]{16,32}/.test(password);
    const hasTwoSpecialChars =
        /(?:[^'!])
}