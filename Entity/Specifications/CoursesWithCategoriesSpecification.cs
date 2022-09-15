using System;
using System.Linq.Expressions;

namespace Entity.Specifications
{
    public class CoursesWithCategoriesSpecification : BaseSpecification<Course>
    {
        // Empty constructor for List Methods
        public CoursesWithCategoriesSpecification()
        {
            IncludeMethod(c => c.Category);
        }

        // For criteria
        public CoursesWithCategoriesSpecification(Guid id) : base(x => x.Id == id)
        {
            IncludeMethod(c => c.Requirements);
            IncludeMethod(c => c.Learnings);
        }
    }
}