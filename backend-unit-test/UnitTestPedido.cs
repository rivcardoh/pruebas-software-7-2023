using backend.connection;
using backend.entidades;
using backend.servicios;


namespace backend_unit_test
{
    

    public class UnitTestPedido
    {
        public UnitTestPedido() 
         {
             BDManager.GetInstance.ConnectionString = "workstation id=database-rivcardoh.mssql.somee.com;packet size=4096;user id=rivcardoh_SQLLogin_1;pwd=id2yrt7uvj;data source=database-rivcardoh.mssql.somee.com;persist security info=False;initial catalog=database-rivcardoh";
         }
        [Fact]
        public void Pedido_Get_Verificar_NotNull()
        {
            var result = PedidoServicios.ObtenerTodo<Pedido>();
            Assert.NotNull(result);
        }

        [Fact]
        public void Pedido_GetById_VerificarItem()
        {
            var result = PedidoServicios.ObtenerById<Pedido>(8);
            Assert.Equal(8, result.Id);
        }

        [Fact]
        public void Pedido_Insertar()
        {
            Pedido productoTemp = new()
            {
                IdProveedor  = 2,
                IdProducto = 1,
                IdUsuario = 1,
                Cantidad = 100,
               
            };

            var result = PedidoServicios.InsertPedido(productoTemp);
            Assert.Equal(1, result);
        }
    }
}
