﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace RECentral4._0.Models
{
    public class Customer:User
    {
        public String Notes { get; set; }
        public String Phone { get; set; }
        public String PropertyType { get; set; }
        public DateTime JoinDate { get; set; }
    }
}
