using System.Linq;
using Entity.Specifications;
using Microsoft.EntityFrameworkCore;

namespace Infrastructure
{
    public class SpecificationEvaluator<T> where T : class
    {
        public static IQueryable<T> GetQuery(IQueryable<T> inputQuery, ISpecification<T> spec)
        {
            var query = inputQuery;

            if(spec.Criteria != null)
            {
                // Takes an expression like: c => c.Price < 10
                query = query.Where(spec.Criteria);
            }

            if(spec.Sort != null)
            {
                query = query.OrderBy(spec.Sort);
            }

            if(spec.SortByDescending != null)
            {
                query = query.OrderByDescending(spec.SortByDescending);
            }

            query = spec.Include.Aggregate(query, (current, include) => current.Include(include));

            return query;
        }
    }
}