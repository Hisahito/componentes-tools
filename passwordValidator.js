function getSequence(chars, str, max) {
    let sequence = "";
    let index = -1;
    if(str){
        for(let char of str) {
                if(index === -1){
                index = chars.indexOf(char.toLowerCase());
                sequence = char;
            } else {
                if(chars[index + 1] === char.toLowerCase()) {
                    sequence += char;
                    index++;
                } else {
                    sequence = "";
                    index = -1;
                }
            }
            if(sequence.length >= max) {
                return sequence
            }
        }
    }
    return "";
}

function hasSequence(str, max){
    if(str) {
        let letters = "abcdefghijklmnñopqrstuvwxyz";
        let numbers = "0123456789";

        const pattern = `(?<letters>[a-zA-Z]{${max},})|(?<numbers>[0-9]{${max},})`;
        const regEx = new RegExp(pattern, "g");

        let match;
        while ((match = regEx.exec(str))) {
            const chars = match.groups.letters ? letters : numbers;
            const strToCheck = match.groups.letters
                ? match.groups.letters
                : match.groups.numbers;
            const sequence = getSequence(chars, strToCheck, max);
            if(sequence.length >= max) {
                return sequence;
            }
        }
    }
    return "";
}

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
        /^(?=.*[0-9])(?=.*[!@#$%^&*'|_>`()])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*'|_>`()]{16,32}/.test(
            password
            );
    const hasTwoSpecialChars =
        /(?:[^`!@#$%^&*\-_=+'.,|><()]*[`!@#$%^&*\-_=+'.,|><()]){2}/.test(
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

console.log(isValidPassword("c|e_AbC>F%8J%k`N8"))
