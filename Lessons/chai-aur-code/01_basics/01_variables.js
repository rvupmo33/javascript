const accountId = 144553;
let accountEmail ='aa@gmail.com';
var accountPassword = "12345";
accountCity = "Jaipur";
let accountState;

/*
Try not to use var
Because of issues in block and functional scope :(
*/

accountEmail = "1212@gmail.com";
accountPassword = "212121"

console.log(accountEmail);
console.table([accountId,accountEmail, accountPassword, accountCity])