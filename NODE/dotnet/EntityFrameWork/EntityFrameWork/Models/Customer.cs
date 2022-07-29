using System;
using System.Collections.Generic;

#nullable disable

namespace EntityFrameWork.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Borrows = new HashSet<Borrow>();
        }

        public string Cname { get; set; }
        public string City { get; set; }

        public virtual ICollection<Borrow> Borrows { get; set; }
    }
}
