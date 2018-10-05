using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using TOCAMM.Models;
using System.Data.Entity;

namespace TOCAMM.Controllers
{
    public class Connection : DbContext
    {
        public DbSet<Usuario> ObjRegisterUser { get; set; }
    }
}