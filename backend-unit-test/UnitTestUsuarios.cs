using backend.connection;
using backend.entidades;
using backend.servicios;


namespace backend_unit_test
{
    

    public class UnitTestUsuarios
    {
        public UnitTestUsuarios() 
         {
             BDManager.GetInstance.ConnectionString = "workstation id=database-rivcardoh.mssql.somee.com;packet size=4096;user id=rivcardoh_SQLLogin_1;pwd=id2yrt7uvj;data source=database-rivcardoh.mssql.somee.com;persist security info=False;initial catalog=database-rivcardoh";
         }
        [Fact]
        public void Usuarios_Get_Verificar_NotNull()
        {
            var result = UsuariosServicios.ObtenerTodo<Usuarios>();
            Assert.NotNull(result);
        }

        [Fact]
        public void Usuarios_GetById_VerificarItem()
        {
            var result = UsuariosServicios.ObtenerById<Usuarios>(1);
            Assert.Equal(1, result.Id);
        }

        [Fact]
        public void Usuarios_Insertar()
        {
            Usuarios usuarioTemp = new()
            {
                NombreCompleto = "Nombre Test",
                UserName = "UserName Test",
                Password = "Password Test"
            };

            var result = UsuariosServicios.InsertUsuario(usuarioTemp);
            Assert.Equal(1, result);
        }
    }
}
