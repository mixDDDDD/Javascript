const user = {
    search: 'Вася',
    take: 10
 };

// По заданию в видео
function createQueryString(params) {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}
console.log(createQueryString(user)); // search=Вася&take=10

// Прочитал, что используют encodeURIComponent для безопасной передачи в URL
function createQueryString(params) {
  return Object.entries(params)
    .map(([key, value]) => `${encodeURIComponent(key)}=${encodeURIComponent(value)}`)
    .join('&');
}

console.log(createQueryString(user)); // search=%D0%92%D0%B0%D1%81%D1%8F&take=10
