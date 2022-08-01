using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using RepoPatternTOYCompany.Models;

namespace RepoPatternTOYCompany.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CustomerController : ControllerBase
    {
        private ICustomerService CustomerService { get; set; }
        public CustomerController(ICustomerService customerService)
        {
            CustomerService = customerService;
        }

        [HttpGet]
        public IActionResult GetCustomers()
        {
            return Ok(CustomerService.GetAll());
        }

        [HttpGet("{id}")]
        public IActionResult GetCustomer(int id)
        {
            return Ok(CustomerService.GetById(id));
        }

        [HttpDelete("{id}")]
        public IActionResult DeleteCustomer(int id)
        {
            var cus = CustomerService.GetById(id);
            return Ok(CustomerService.Remove(cus));
        }

        [HttpPut("{id}")]
        public IActionResult UpdateCustomer(int id,[FromBody] Customer customer)
        {
            var customer1 = CustomerService.GetById(id);
            customer1.CustomerName = customer.CustomerName;
            return Ok(CustomerService.Update(customer1));
        }

        [HttpPost]
        public IActionResult Post([FromBody] Customer customer)
        {

            var arr = new List<string>();
            if (string.IsNullOrEmpty(customer.CustomerName))
            {
                arr.Add("nameis required");
            }
            if (arr.Count > 0)
                return BadRequest(arr);
            else
                return Ok(CustomerService.Add(customer));
        }
    }
}