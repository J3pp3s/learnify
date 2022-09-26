using System;

namespace Entity.Specifications
{
    public class CoursesWithCategoriesSpecification : BaseSpecification<Course>
    {
        public CoursesWithCategoriesSpecification(CourseParams courseParams) : base(x =>
        (string.IsNullOrEmpty(courseParams.Search) || x.Title.ToLower().Contains(courseParams.Search)) &&
        (!courseParams.CategoryId.HasValue || x.CategoryId == courseParams.CategoryId)
        )
        {
            IncludeMethod(c => c.Category);
            IncludeMethod(c => c.Requirements);
            IncludeMethod(c => c.Learnings);
            // If on first page, skip 0 results.
            // Page two, gives 2 minus 1.
            ApplyPagination(courseParams.PageSize, courseParams.PageSize * (courseParams.PageIndex - 1));

            if(!string.IsNullOrEmpty(courseParams.Sort))
            {
              switch (courseParams.Sort)
              {
                  case "priceAscending":
                  SortMethod(c => c.Price);
                  break;
                  case "priceDescending":
                  SortByDescendingMethod(c => c.Price);
                  break;
                  case "ratingDescending":
                  SortByDescendingMethod(c => c.Rating);
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
            IncludeMethod(c => c.Category);
            SortMethod(x => x.Id);
        }

    }
}