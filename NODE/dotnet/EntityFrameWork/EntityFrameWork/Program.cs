using System;
using System.Linq;
using EntityFrameWork.Models;
namespace EntityFrameWork
{
    class Program
    {
        static void Main(string[] args)
        {
            Console.WriteLine("hfghg");
            var context = new AdventureWorks2016Context();
            //var cus = new Customer() { Cname = "Vaibhav", City = "Rajkot" };
            //context.Customers.Add(cus);
            //context.SaveChanges();
            foreach(var c in context.Customers)
            {
                Console.WriteLine(c.City+c.Cname);
            }
            var query = context.MyEmployees.Select(e => e.FirstName);
            foreach(var q in query)
            {

                Console.WriteLine(q);
            }
        }
    }
}
