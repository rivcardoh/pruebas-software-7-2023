using backend.connection;
using backend.entidades;
using backend.servicios;


namespace backend_unit_test
{
    

    public class UnitTestCategoriaProducto
    {
        public UnitTestCategoriaProducto() 
         {
             BDManager.GetInstance.ConnectionString = "workstation id=database-rivcardoh.mssql.somee.com;packet size=4096;user id=rivcardoh_SQLLogin_1;pwd=id2yrt7uvj;data source=database-rivcardoh.mssql.somee.com;persist security info=False;initial catalog=database-rivcardoh";
         }
        [Fact]
        public void CategoriaProducto_Get_Verificar_NotNull()
        {
            var result = CategoriaProductoServicios.ObtenerTodo<CategoriaProducto>();
            Assert.NotNull(result);
        }

        [Fact]
        public void CategoriaProducto_GetById_VerificarItem()
        {
            var result = CategoriaProductoServicios.ObtenerById<CategoriaProducto>(1);
            Assert.Equal(1, result.Id);
        }

        [Fact]
        public void CategoriaProducto_Insertar()
        {
            CategoriaProducto categoriaProductoTemp = new()
            {
                
                Nombre = "TEST"
               
            };

            var result = CategoriaProductoServicios.InsertCategoriaProducto(categoriaProductoTemp);
            Assert.Equal(1, result);
        }
    }
}
