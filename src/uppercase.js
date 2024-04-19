const uppercase = (str) => {
    //if str.length == 0 return empty string
    if (str.length == 0) return "";
    //if the string has special chars, return cant convert string with special chars
    if (/[^\w\s]/.test(str)) return "Can't convert string with special chars";
    return str.toUpperCase();
};


export { uppercase };