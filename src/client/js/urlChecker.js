function checkForURL(inputText) {
    console.log("::: Running checkForURL :::", inputText);
    // look for valid http or http URL (sourve from https://www.freecodecamp.org/news/check-if-a-javascript-string-is-a-url/)
    const urlPattern = /(?:https?):\/\/(\w+:?\w*)?(\S+)(:\d+)?(\/|\/([\w#!:.?+=&%!\-\/]))?/;

    // test for valid url
    if( !urlPattern.test(inputText) ) {
        if (typeof window !== 'undefined'){
            alert('Invalid URL, Please Try Again');
        }
        return false;
    }

    return true;
}

export { checkForURL }