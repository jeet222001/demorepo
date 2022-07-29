using System;
using System.Collections.Generic;

#nullable disable

namespace RepoPatternTOYCompany.Models
{
    public partial class ToyType
    {
        public ToyType()
        {
            Toys = new HashSet<Toy>();
        }

        public int ToyTypeId { get; set; }
        public string ToyName { get; set; }
        public int PlantId { get; set; }

        public virtual Plant Plant { get; set; }
        public virtual ICollection<Toy> Toys { get; set; }
    }
}
