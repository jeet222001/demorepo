using System;
using System.Collections.Generic;

#nullable disable

namespace EntityFrameWork.Models
{
    public partial class UnitMeasure
    {
        public UnitMeasure()
        {
            BillOfMaterials = new HashSet<BillOfMaterial>();
            Product2SizeUnitMeasureCodeNavigations = new HashSet<Product2>();
            Product2WeightUnitMeasureCodeNavigations = new HashSet<Product2>();
            ProductVendors = new HashSet<ProductVendor>();
        }

        public string UnitMeasureCode { get; set; }
        public string Name { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual ICollection<BillOfMaterial> BillOfMaterials { get; set; }
        public virtual ICollection<Product2> Product2SizeUnitMeasureCodeNavigations { get; set; }
        public virtual ICollection<Product2> Product2WeightUnitMeasureCodeNavigations { get; set; }
        public virtual ICollection<ProductVendor> ProductVendors { get; set; }
    }
}
