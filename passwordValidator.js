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
        /^(?=.*[0-9])(?=.*[!@#$%^&'|_>`()])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*'|_>`()]{16,32}/.test(
            password
            );
    const hasTwoSpecialChars =
        /(?:[^`!@#$%^&*\-_=+'/.,|><()]*[`!@#$%^&*\-_=+'/.,|><()]){2}/.test(
            password
        );
    const charsSequences = hasSequence(password, 3);
    if(charsSequences.length > 2) {
        return {
            result: false,
            reason: `3 chars in sequence: ${charsSequences}`,
        };
    } else if (!hasTwoSpecialChars){
        return {result: false, reason: "Missing special chars" };
    } else if (!isStrong){
        return {
            result: false,
            reason: "Its must contain lowercase and uppercase letters, number and 2 special chars.",
        };
    }
    return {result: true};
}