using System;
using System.Collections.Generic;

#nullable disable

namespace EntityFrameWork.Models
{
    public partial class StudentDetail
    {
        public string Name { get; set; }
        public string SexStandard { get; set; }
        public int? MonthlyPresent { get; set; }
        public DateTime? DailyHours { get; set; }
    }
}
