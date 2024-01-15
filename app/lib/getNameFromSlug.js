export function getNameFromSlug(inputString) {
   const words = inputString.split('-');
   const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
   const resultString = capitalizedWords.join(' ');
   return resultString;
}