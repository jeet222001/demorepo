using System;
using System.Collections.Generic;

#nullable disable

namespace RepoPatternTOYCompany.Models
{
    public partial class Customer
    {
        public Customer()
        {
            Addresses = new HashSet<Address>();
        }

        public int CustometId { get; set; }
        public string CustomerName { get; set; }

        public virtual ICollection<Address> Addresses { get; set; }
    }
}
