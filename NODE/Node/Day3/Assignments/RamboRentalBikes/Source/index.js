const Mobike = require('./RamboRentalBike')
const readline = require('readline-sync')
const ck = require('chalk')

var mb = new Mobike.Mobike()
var customerDetail = []


console.log(ck.red.bold.bgCyan('\n------------WELCOME TO RAMBO RENTAL BIKES------------------\n'))
var c = readline.keyInYNStrict('\ndo you Want ToRent A Bike From us???\n')
if (c) {
    mb.Name = readline.question(ck.greenBright.bold('Enter the Customer Name :-'));
    mb.PhoneNumber = readline.question(ck.bold.greenBright('Enter the Phone Number :-'));
    mb.BikeNumber = readline.question(ck.bold.greenBright('Enter the BikeNumber :-'));
    mb.Days = parseInt(readline.question(ck.bold.greenBright('Enter the number of days You want Bike :-')))
    console.log(ck.bold.red.bgCyan("\n\n<<<<<====================CUSTOMER DETAILS HAS BEEN ADDED=========================>>>>>\n\n"));

    console.log('\nCounting The Rental Charges......\n');

    setTimeout(() => {
        mb.Compute(mb.Days)
        console.log(ck.bold.red.bgBlueBright('\n<<<<<<<<=========-------->>CHARGE:->' + mb.RentalCharge + '<<--------=======>>>>>>>>\n'));
        console.log('\nGenerating The Recipt.......\n');
        customerDetail.push({
            Name: mb.Name, Phone: mb.PhoneNumber, Bikenum: mb.BikeNumber, DaysofRent: mb.Days, RentalCharge: mb.RentalCharge
        })
    }, 5000)


    setTimeout(() => {
        console.log(ck.bold.blueBright.bgCyan(`\n---->>>RENTED BIKE RECIPT<<<-------\n
        Customer Name:->${ck.red.bold(customerDetail[0].Name)}                  
        Customer Phone:->${ck.red.bold(customerDetail[0].Phone)}                
        Rented BikeNo.:->${ck.red.bold(customerDetail[0].Bikenum)}                  
        No.OfDaysBikeRented:->${ck.red.bold(customerDetail[0].DaysofRent)}              
        RentalCharge:->${ck.red.bold(customerDetail[0].RentalCharge)}                `));
    }, 8000)

} else {
    console.log(ck.red.bold.bgGreen('\n-----------------THANK YOU FOR VISITING---------------------\n'));
}


