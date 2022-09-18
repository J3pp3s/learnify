using System;

namespace Entity.Specifications
{
    public class CoursesWithCategoriesSpecification : BaseSpecification<Course>
    {
        public CoursesWithCategoriesSpecification(string sort)
        {
            IncludeMethod(c => c.Category);
            SortMethod(c => c.Title);

            if(!string.IsNullOrEmpty(sort))
            {
              switch (sort)
              {
                  case "priceAscending":
                  SortMethod(c => c.Price);
                  break;
                  case "priceDescending":
                  SortByDescendingMethod(c => c.Price);
                  break;
                  default:
                  SortMethod(c => c.Title);
                  break;
              }
            }
        }

        public CoursesWithCategoriesSpecification(Guid id) : base(x => x.Id == id)
        {
            IncludeMethod(c => c.Requirements);
            IncludeMethod(c => c.Learnings);
        }

    }
}