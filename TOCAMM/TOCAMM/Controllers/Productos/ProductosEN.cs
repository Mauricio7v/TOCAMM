using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace TOCAMM.Controllers
{
    public class ProductosEN
    {
        public Int64 Id { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Imagen { get; set; }

        public decimal Precio { get; set; }

    }
}