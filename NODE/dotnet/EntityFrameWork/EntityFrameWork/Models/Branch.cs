using System;
using System.Collections.Generic;

#nullable disable

namespace EntityFrameWork.Models
{
    public partial class Branch
    {
        public Branch()
        {
            Borrows = new HashSet<Borrow>();
        }

        public string Bname { get; set; }
        public string City { get; set; }

        public virtual ICollection<Borrow> Borrows { get; set; }
    }
}
