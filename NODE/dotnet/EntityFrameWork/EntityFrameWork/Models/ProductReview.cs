﻿using System;
using System.Collections.Generic;

#nullable disable

namespace EntityFrameWork.Models
{
    public partial class ProductReview
    {
        public int ProductReviewId { get; set; }
        public int ProductId { get; set; }
        public string ReviewerName { get; set; }
        public DateTime ReviewDate { get; set; }
        public string EmailAddress { get; set; }
        public int Rating { get; set; }
        public string Comments { get; set; }
        public DateTime ModifiedDate { get; set; }

        public virtual Product2 Product { get; set; }
    }
}
