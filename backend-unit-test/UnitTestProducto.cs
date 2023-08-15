using backend.connection;
using backend.entidades;
using backend.servicios;


namespace backend_unit_test
{
    

    public class UnitTestProducto
    {
        public UnitTestProducto() 
         {
             BDManager.GetInstance.ConnectionString = "workstation id=database-rivcardoh.mssql.somee.com;packet size=4096;user id=rivcardoh_SQLLogin_1;pwd=id2yrt7uvj;data source=database-rivcardoh.mssql.somee.com;persist security info=False;initial catalog=database-rivcardoh";
         }
        [Fact]
        public void Producto_Get_Verificar_NotNull()
        {
            var result = ProductoServicios.ObtenerTodo<Producto>();
            Assert.NotNull(result);
        }

        [Fact]
        public void Producto_GetById_VerificarItem()
        {
            var result = ProductoServicios.ObtenerById<Producto>(1);
            Assert.Equal(1, result.Id);
        }

        [Fact]
        public void Producto_Insertar()
        {
            Producto productoTemp = new()
            {
                Nombre = "Nombre Test",
                IdCategoria = 1
               
            };

            var result = ProductoServicios.InsertProducto(productoTemp);
            Assert.Equal(1, result);
        }
    }
}
