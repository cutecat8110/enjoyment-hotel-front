export default defineEventHandler((event) => {
  const { city } = getQuery(event)
  return fetch(`http://api.opencube.tw/twzipcode?city=${city}`).then((response) => response.json())
})
