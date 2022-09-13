using System;
using System.Collections;
using System.Collections.Generic;

namespace Entity
{
    public class Course : BaseEntity
    {

        public string Title { get; set; }

        public float Price { get; set; }

        public string Instructor { get; set; }

        public decimal Rating { get; set; }

        public string Image { get; set; }

        public string SubTitle { get; set; }

        public string Decription { get; set; }

        public int Students { get; set; }

        public string Language { get; set; }

        public string Level { get; set; }

        public ICollection<Requirement> Requirments { get; set; }

        public ICollection<Learning> Learnings { get; set; }

    }
}