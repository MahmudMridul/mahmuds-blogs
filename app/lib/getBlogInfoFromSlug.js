export function getBlogInfoFromSlug(inputString) {
   const [date, name] = inputString.split("_");
   const words = name.split('-');
   const capitalizedWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));
   const blogName = capitalizedWords.join(' ');
   return { date, blogName };
}