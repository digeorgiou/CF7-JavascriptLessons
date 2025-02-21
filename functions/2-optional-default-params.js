// function greet(name) {
//   if (name === undefined) {
//     name = "Guest"
//   }
//   console.log(`hello, ${name}`)
// }

//greet()

// Default params
// αν δεν δωσει ο χρηστης καποια παραμετρο, μπαινει η default τιμη
// ειναι σαν να υπερφορτωνουμε την μεθοδο
// function getUser(name = "Guest", age = 18) {
//   return { name, age }
//  αντι για return {name : name, age : age} οταν το key εχει ιδιο ονομα 
//  με την παραμετρο της συναρτησης
// const obj = getUser()
// console.log(obj)

function getFormattedDateTime(
  locale = "en-US",
  options = {
    year: "numeric", //2025  , αν ηταν 2-digit : 25
    month: "long",
    day: "numeric",
    weekday: "long",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: true
  }
) {
  //Στην Javascript το Date() εχει και την ωρα (DateTime())
  const now = new Date()
  //η LocaleString μετατρεπει ενα Date σε String
  return now.toLocaleString(locale, options)
}
console.log(getFormattedDateTime("el-GR"))