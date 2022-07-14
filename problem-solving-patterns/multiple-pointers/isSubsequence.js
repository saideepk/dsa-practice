function isSubsequence(str1, str2) {
    // good luck. Add any arguments you deem necessary.
    if (!str1 || !str2) return false;
    let i = 0; let j = 0;
    while (j < str2.length) {
        if (str2[j] === str1[i]) {
            i++;
        }
        if (str1.length === i) return true;
        j++;
    }

    return false;
}


console.log(isSubsequence('hello', 'hello world'));
console.log(isSubsequence('sing', 'stcling'));
console.log(isSubsequence('abc', 'abracadabra'));
console.log(isSubsequence('abc', 'acb'));


//console.log(isSubsequence('abc', 'abracadabra'));

//abr