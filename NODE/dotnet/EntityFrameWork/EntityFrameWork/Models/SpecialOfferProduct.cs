﻿using System;
using System.Collections.Generic;

#nullable disable

namespace EntityFrameWork.Models
{
    public partial class SpecialOfferProduct
    {
        public SpecialOfferProduct()
        {
            SalesOrderDetails = new HashSet<SalesOrderDetail>();
        }

        public int SpecialOfferId { get; set; }
        public int ProductId { get; set; }
        public Guid Rowguid { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual Product2 Product { get; set; }
        public virtual SpecialOffer SpecialOffer { get; set; }
        public virtual ICollection<SalesOrderDetail> SalesOrderDetails { get; set; }
    }
}
