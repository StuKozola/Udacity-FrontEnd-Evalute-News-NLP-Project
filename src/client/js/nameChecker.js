function checkForName(inputText) {
    console.log("::: Running checkForName :::", inputText);
    let names = [
        "Picard",
        "Janeway",
        "Kirk",
        "Archer",
        "Georgiou"
    ]

    if(names.includes(inputText)) {
        if (typeof window !== 'undefined'){
            alert("Welcome, Captain!");
        }
        return true
    }
    return false
}

export { checkForName }
