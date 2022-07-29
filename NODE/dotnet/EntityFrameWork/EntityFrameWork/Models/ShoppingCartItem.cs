using System;
using System.Collections.Generic;

#nullable disable

namespace EntityFrameWork.Models
{
    public partial class ShoppingCartItem
    {
        public int ShoppingCartItemId { get; set; }
        public string ShoppingCartId { get; set; }
        public int Quantity { get; set; }
        public int ProductId { get; set; }
        public DateTime DateCreated { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual Product2 Product { get; set; }
    }
}
