using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using RepoPatternTOYCompany.Models;

namespace RepoPatternTOYCompany
{
   public interface ICustomerService : IRepository<Customer>
    {
    }

    public class CustomerService : Repository<Customer>, ICustomerService 
    {
        public CustomerService(ToyCompanyContext DbContext) : base(DbContext)
        {
           
        }
        public Customer DeleteCustomer(int id)
        {
            var cus = base.GetById(id);
            base.Remove(cus);
            return cus;
        }
    }
}
