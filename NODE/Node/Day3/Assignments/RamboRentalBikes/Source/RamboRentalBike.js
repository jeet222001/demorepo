class Mobike {
    BikeNumber;
    PhoneNumber;
    Name;
    Days;
    RentalCharge;

    Compute(nDays) {
        if (nDays >10) {
            this.RentalCharge = ((nDays - 10) * 200) + (5 * 400) + (5 * 500)
        } else if (nDays > 5 && nDays <= 10) {
            this.RentalCharge = ((nDays - 5) * 400) + (5 * 500)
        } else {
            this.RentalCharge = nDays * 500
        }
    }
}

exports.Mobike = Mobike;