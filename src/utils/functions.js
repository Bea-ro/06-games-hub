export const getRandomPositions = (n) => {
   const positions = []
   while (positions.length < n) {
   const randomNum = Math.floor(Math.random() * 9);
   if (!positions.includes(randomNum)) {
   positions.push(randomNum);
   }}
   return positions;
}
