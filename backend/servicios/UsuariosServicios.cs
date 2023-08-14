using System.Data;
using backend.connection;
using backend.entidades;
using Dapper;

namespace backend.servicios
{
    public static class UsuariosServicios
    {
        public static IEnumerable<T> ObtenerTodo<T>()
        {
            const string sql = "select * from usuarios";
            return BDManager.GetInstance.GetData<T>(sql);//Dapper
        }
        public static T ObtenerById<T>(int id)
        {
            const string sql = "select * from usuarios where ID = @Id and estado_registro=1";

            var parameters = new DynamicParameters();
            parameters.Add("id", id, DbType.Int64);

            var result = BDManager.GetInstance.GetDataWithParameters<T>(sql, parameters);

            return result.FirstOrDefault();
        }
        public static int InsertUsuario(Usuarios usuarios)
        {
            const string sql = "INSERT INTO [USUARIOS]([NOMBRE]) VALUES (@NOMBRE) ";

            var parameters = new DynamicParameters();
            parameters.Add("NOMBRE", usuarios.NombreCompleto, DbType.String);

            var result = BDManager.GetInstance.SetData(sql, parameters);
            return result;
        }
    }

}