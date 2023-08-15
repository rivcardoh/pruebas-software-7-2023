using backend.connection;
using backend.entidades;
using backend.servicios;


namespace backend_unit_test
{
    

    public class UnitTestDetalleCarrito
    {
        public UnitTestDetalleCarrito() 
         {
             BDManager.GetInstance.ConnectionString = "workstation id=database-rivcardoh.mssql.somee.com;packet size=4096;user id=rivcardoh_SQLLogin_1;pwd=id2yrt7uvj;data source=database-rivcardoh.mssql.somee.com;persist security info=False;initial catalog=database-rivcardoh";
         }
        [Fact]
        public void DetalleCarrito_Get_Verificar_NotNull()
        {
            var result = DetalleCarritoServicios.ObtenerTodo<DetalleCarrito>();
            Assert.NotNull(result);
        }

        [Fact]
        public void DetalleCarrito_GetById_VerificarItem()
        {
            var result = DetalleCarritoServicios.ObtenerById<DetalleCarrito>(2);
            Assert.Equal(2, result.Id);
        }

        [Fact]
        public void DetalleCarrito_Insertar()
        {
            DetalleCarrito detalleCarritoTemp = new()
            {
                Cantidad = 100,
                IdProducto = 1,
                IdCarritoCompra = 1

            };

            var result = DetalleCarritoServicios.InsertDetalleCarrito(detalleCarritoTemp);
            Assert.Equal(1, result);
        }
    }
}
