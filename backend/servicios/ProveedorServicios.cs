using System.Data;
using backend.connection;
using backend.entidades;
using Dapper;

namespace backend.servicios
{
    public static class ProveedorServicios
    {
        public static IEnumerable<T> ObtenerTodo<T>()
        {
            const string sql = "select top 5 * from proveedor order by id desc";
            return BDManager.GetInstance.GetData<T>(sql);//Dapper
        }
        public static T ObtenerById<T>(int id)
        {
            const string sql = "select * from proveedor where ID = @Id and estado_registro = 1";

            var parameters = new DynamicParameters();
            parameters.Add("id", id, DbType.Int64);

            var result = BDManager.GetInstance.GetDataWithParameters<T>(sql, parameters);

            return result.FirstOrDefault();
        }
        public static int InsertProveedor(Proveedor proveedor)
        {
            const string sql = "INSERT INTO [dbo].[PROVEEDOR]([NOMBRE_PROVEEDOR]) VALUES (@NOMBRE_PROVEEDOR)";

            var parameters = new DynamicParameters();
            parameters.Add("@NOMBRE_PROVEEDOR", proveedor.NombreProveedor, DbType.String);

            var result = BDManager.GetInstance.SetData(sql, parameters);
            return result;
        }

        public static int DeleteProveedor(int id)
        {
            const string sql = "DELETE FROM  PROVEEDOR where ID = @Id ";

            var parameters = new DynamicParameters();
            parameters.Add("id", id, DbType.Int64);
            var result = BDManager.GetInstance.SetData(sql, parameters);
            return result;
        }
    }

}