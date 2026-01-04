const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);

export const capitalizeFirstLetterOfWords = (str) => str.split(" ").map(capitalizeFirstLetter).join(" ")

export const changeStringSeparator = (str, oldSeparator, newSeparator) => str.split(oldSeparator).join(newSeparator)