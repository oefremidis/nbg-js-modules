function uname(){
  console.log('User name validation...');
}

function password(){
  console.log('User password validation...');
}

function payment(){
  console.log('Payment...');
}

const price = 10;
const currency = '$'

function receipt(){
  console.log(`Receipt: ${price}${currency}`);
}
uname();
password();
payment();
receipt();