﻿using System;
using System.Collections.Generic;

#nullable disable

namespace EntityFrameWork.Models
{
    public partial class StudentMark
    {

        public int? StudentId { get; set; }
        public int? Science { get; set; }
        public int? Math { get; set; }
        public int? English { get; set; }
        public decimal? Average { get; set; }
        public string Grade { get; set; }
    }
}
