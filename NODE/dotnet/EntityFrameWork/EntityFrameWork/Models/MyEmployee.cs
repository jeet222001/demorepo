using System;
using System.Collections.Generic;

#nullable disable

namespace EntityFrameWork.Models
{
    public partial class MyEmployee
    {
        public MyEmployee()
        {
            InverseManager = new HashSet<MyEmployee>();
        }

        public short EmployeeId { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Title { get; set; }
        public short DeptId { get; set; }
        public short? ManagerId { get; set; }

        public virtual MyEmployee Manager { get; set; }
        public virtual ICollection<MyEmployee> InverseManager { get; set; }
    }
}
