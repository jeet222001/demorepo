using System;
using System.Collections.Generic;

#nullable disable

namespace EntityFrameWork.Models
{
    public partial class ProductSubcategory
    {
        public ProductSubcategory()
        {
            Product2s = new HashSet<Product2>();
        }

        public int ProductSubcategoryId { get; set; }
        public int ProductCategoryId { get; set; }
        public string Name { get; set; }
        public Guid Rowguid { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual ProductCategory ProductCategory { get; set; }
        public virtual ICollection<Product2> Product2s { get; set; }
    }
}
