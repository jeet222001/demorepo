using System;
using System.Collections.Generic;

#nullable disable

namespace EntityFrameWork.Models
{
    public partial class VSalesByCategorY
    {
        public decimal LineTotal { get; set; }
        public string Category { get; set; }
        public string SubCategory { get; set; }
        public string Product { get; set; }
    }
}
