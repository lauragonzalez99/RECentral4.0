using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RECentral4._0.Models
{
    public class UserFiles
    {   
        public int Id { get; set; }
        public int CustomerID { get; set; }
        public String FileName { get; set; }
        public DateTime AddDate { get; set; }
    }
}