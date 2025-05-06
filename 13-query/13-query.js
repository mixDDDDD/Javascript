const user = {
    search: 'Вася',
    take: 10
 };

const queryFn = (params) => Object.entries(params).map(x => x.join('=')).join('&')
console.log(queryFn(user));

function createQueryString(params) {
  return Object.entries(params)
    .map(([key, value]) => `${key}=${value}`)
    .join('&');
}
console.log(createQueryString(user)); 