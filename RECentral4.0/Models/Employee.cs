using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RECentral4._0.Models
{
    public class Employee:User
    {
        //public List<Customer> CustomerList;

        public TrainingStatus trainingStatus { get; set; }
        
    }

    public enum TrainingStatus
    {
        Beginners,
        UpdatesRequired,
        Completed
    }
}
