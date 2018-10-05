using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Data;
using System.Data.SqlClient;

namespace TOCAMM.Controllers
{
    public class ProductosDAL
    {
        IDbConnection con = DBCommon.Conexion();

        public int AgregarProducto(ProductosEN p)
        {
            con.Open();
            SqlCommand com = new SqlCommand("AgregarProductos", con as SqlConnection);
            com.CommandType = CommandType.StoredProcedure;
            com.Parameters.Add(new SqlParameter("@Nombre", p.Nombre));
            com.Parameters.Add(new SqlParameter("@Descripcion", p.Descripcion));
            com.Parameters.Add(new SqlParameter("@Imagen", p.Imagen));
            com.Parameters.Add(new SqlParameter("@Precio", p.Precio));
            int Resultado = com.ExecuteNonQuery();
            con.Close();
            return Resultado;
        }

        public List<ProductosEN> ConsultarProductos()
        {
            con.Open();
            SqlCommand com = new SqlCommand("ConsultarProductos", con as SqlConnection);
            com.CommandType = CommandType.StoredProcedure;
            IDataReader red = com.ExecuteReader();
            List<ProductosEN> list = new List<ProductosEN>();
            while (red.Read())
            {
                ProductosEN p = new ProductosEN();
                p.Id = red.GetInt64(0);
                p.Nombre = red.GetString(1);
                p.Descripcion = red.GetString(2);
                p.Imagen = red.GetString(3);
                p.Precio = red.GetDecimal(4);
                list.Add(p);

            }
            con.Close();
            return list;

        }
    }
}