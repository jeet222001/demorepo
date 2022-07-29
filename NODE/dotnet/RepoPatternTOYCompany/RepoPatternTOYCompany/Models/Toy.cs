using System;
using System.Collections.Generic;

#nullable disable

namespace RepoPatternTOYCompany.Models
{
    public partial class Toy
    {
        public Toy()
        {
            PurchaseDetails = new HashSet<PurchaseDetail>();
        }

        public int ToyId { get; set; }
        public string ToyName { get; set; }
        public int ToyTypeId { get; set; }
        public decimal Price { get; set; }

        public virtual ToyType ToyType { get; set; }
        public virtual ICollection<PurchaseDetail> PurchaseDetails { get; set; }
    }
}
