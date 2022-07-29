using System;
using System.Collections.Generic;

#nullable disable

namespace RepoPatternTOYCompany.Models
{
    public partial class Plant
    {
        public Plant()
        {
            ToyTypes = new HashSet<ToyType>();
        }

        public int PlantId { get; set; }
        public string PlantPlace { get; set; }

        public virtual ICollection<ToyType> ToyTypes { get; set; }
    }
}
