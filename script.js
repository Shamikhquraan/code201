
alert("This website allowed to adults - above 18 - , maybe it contains horrific views .  ")

let userAge = prompt("Enter your age :");
console.log(userAge);
while (userAge < 18) {
  alert("sorry u are not adult..u will not be able to acsess our website ");
  userAge = prompt("wrong entry please Enter your age again ?  ");

}

alert("welcome to our website");

let one = prompt("now befor u go inside our website u have to be one of those who are forgiveness agree ?(Y/N)");
if (one=='Y')
alert("welcome to our wesite :)")
else
if (one=='N')
prompt("u cant go in our wesite .. bye bye");
else
if (one!='Y'&&'N')
one = prompt("u cant go in our wesite .. bye bye");
