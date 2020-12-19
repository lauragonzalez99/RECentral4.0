using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RECentral4._0.Models
{
    public class Admin:Employee
    {
        public int AdminID = 0;

        public List<Employee> trainees = new List<Employee>();
    }
}
