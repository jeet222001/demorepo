using System;
using System.Collections.Generic;

#nullable disable

namespace EntityFrameWork.Models
{
    public partial class SalesOrder
    {
        public int SalesOrderId { get; set; }
        public DateTime OrderDate { get; set; }
        public string Details { get; set; }
    }
}
