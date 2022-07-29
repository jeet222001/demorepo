using System;
using System.Collections.Generic;

#nullable disable

namespace EntityFrameWork.Models
{
    public partial class ProductModel
    {
        public ProductModel()
        {
            Product2s = new HashSet<Product2>();
            ProductModelIllustrations = new HashSet<ProductModelIllustration>();
            ProductModelProductDescriptionCultures = new HashSet<ProductModelProductDescriptionCulture>();
        }

        public int ProductModelId { get; set; }
        public string Name { get; set; }
        public string CatalogDescription { get; set; }
        public string Instructions { get; set; }
        public Guid Rowguid { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual ICollection<Product2> Product2s { get; set; }
        public virtual ICollection<ProductModelIllustration> ProductModelIllustrations { get; set; }
        public virtual ICollection<ProductModelProductDescriptionCulture> ProductModelProductDescriptionCultures { get; set; }
    }
}
