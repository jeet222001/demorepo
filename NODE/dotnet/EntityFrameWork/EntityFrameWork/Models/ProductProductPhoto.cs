using System;
using System.Collections.Generic;

#nullable disable

namespace EntityFrameWork.Models
{
    public partial class ProductProductPhoto
    {
        public int ProductId { get; set; }
        public int ProductPhotoId { get; set; }
        public bool Primary { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual Product2 Product { get; set; }
        public virtual ProductPhoto ProductPhoto { get; set; }
    }
}
