using backend.connection;
using backend.entidades;
using backend.servicios;


namespace backend_unit_test
{
    

    public class UnitTestCarritoCompra
    {
        public UnitTestCarritoCompra() 
         {
             BDManager.GetInstance.ConnectionString = "workstation id=database-rivcardoh.mssql.somee.com;packet size=4096;user id=rivcardoh_SQLLogin_1;pwd=id2yrt7uvj;data source=database-rivcardoh.mssql.somee.com;persist security info=False;initial catalog=database-rivcardoh";
         }
        [Fact]
        public void CarritoCompra_Get_Verificar_NotNull()
        {
            var result = CarritoCompraServicios.ObtenerTodo<CarritoCompra>();
            Assert.NotNull(result);
        }

        [Fact]
        public void CarritoCompra_GetById_VerificarItem()
        {
            var result = CarritoCompraServicios.ObtenerById<CarritoCompra>(1);
            Assert.Equal(1, result.Id);
        }

        [Fact]
        public void CarritoCompra_Insertar()
        {
            CarritoCompra carritoCompraTemp = new()
            {
                
                IdUsuario = 1
               
            };

            var result = CarritoCompraServicios.InsertCarritoCompra(carritoCompraTemp);
            Assert.Equal(1, result);
        }
    }
}
