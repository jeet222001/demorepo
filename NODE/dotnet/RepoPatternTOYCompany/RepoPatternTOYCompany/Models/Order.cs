using System;
using System.Collections.Generic;

#nullable disable

namespace RepoPatternTOYCompany.Models
{
    public partial class Order
    {
        public Order()
        {
            PurchaseDetails = new HashSet<PurchaseDetail>();
        }

        public int OrderId { get; set; }
        public decimal TotalAmount { get; set; }
        public DateTime Ordereddate { get; set; }
        public int AddressId { get; set; }

        public virtual Address Address { get; set; }
        public virtual ICollection<PurchaseDetail> PurchaseDetails { get; set; }
    }
}
