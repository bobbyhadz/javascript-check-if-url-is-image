// EXAMPLE 1 - Check if a URL is an Image in JavaScript

function isImage(url) {
  return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url);
}

// 👇️ true
console.log(isImage('https://bobbyhadz.com/photo.jpg'));

// 👇️ true
console.log(isImage('https://bobbyhadz.com/photo.webp'));

// 👇️ false
console.log(isImage('https://bobbyhadz.com/index.html'));

// ------------------------------------------------------------------

// // EXAMPLE 2 - Making the regex more robust

// function isImage(url) {
//   return /^https?:\/\/.+\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(
//     url,
//   );
// }

// // 👇️ true
// console.log(isImage('https://bobbyhadz.com/photo.jpg'));

// // 👇️ true
// console.log(isImage('https://bobbyhadz.com/photo.webp'));

// // 👇️ false
// console.log(isImage('https://bobbyhadz.com/index.html'));
