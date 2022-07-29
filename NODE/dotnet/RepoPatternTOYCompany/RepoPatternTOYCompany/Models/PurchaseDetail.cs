using System;
using System.Collections.Generic;

#nullable disable

namespace RepoPatternTOYCompany.Models
{
    public partial class PurchaseDetail
    {
        public int PurchaseId { get; set; }
        public int ToyId { get; set; }
        public int OrderId { get; set; }
        public int Quantity { get; set; }

        public virtual Order Order { get; set; }
        public virtual Toy Toy { get; set; }
    }
}
