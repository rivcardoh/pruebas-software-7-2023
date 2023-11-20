using backend.connection;
using backend.entidades;
using backend.servicios;


namespace backend_unit_test
{
    

    public class UnitTestProveedor
    {
        public UnitTestProveedor() 
         {
             BDManager.GetInstance.ConnectionString = "workstation id=database-rivcardoh.mssql.somee.com;packet size=4096;user id=rivcardoh_SQLLogin_1;pwd=id2yrt7uvj;data source=database-rivcardoh.mssql.somee.com;persist security info=False;initial catalog=database-rivcardoh";
         }
        [Fact]
        public void Proveedor_Get_Verificar_NotNull()
        {
            var result = ProveedorServicios.ObtenerTodo<Proveedor>();
            Assert.NotNull(result);
        }

        [Fact]
        public void Proveedor_GetById_VerificarItem()
        {
            var result = ProveedorServicios.ObtenerById<Proveedor>(2);
            Assert.Equal(2, result.Id);
        }

        [Fact]
        public void Proveedor_Insertar()
        {
            Proveedor proveedorTemp = new()
            {
                
                NombreProveedor = "TEST"
               
            };

            var result = ProveedorServicios.InsertProveedor(proveedorTemp);
            Assert.Equal(1, result);
        }

    }
}
