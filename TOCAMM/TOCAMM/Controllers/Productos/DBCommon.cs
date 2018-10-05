using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;

namespace TOCAMM.Controllers
{
    public class DBCommon
    {
        private static string conn = @"Data Source=.;Initial Catalog=proyecto1;Integrated Security=True;MultipleActiveResultSets=True;Application Name=EntityFramework";

        public static IDbConnection Conexion()
        {
            return new SqlConnection(conn);

        }
    }
}