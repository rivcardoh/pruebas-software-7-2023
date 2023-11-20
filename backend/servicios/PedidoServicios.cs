using System.Data;
using backend.connection;
using backend.entidades;
using Dapper;

namespace backend.servicios
{
    public static class PedidoServicios
    {
        public static IEnumerable<T> ObtenerTodo<T>()
        {
            const string sql = "select top 5 * from pedido order by id desc";
            return BDManager.GetInstance.GetData<T>(sql);//Dapper
        }

        public static T ObtenerById<T>(int id)
        {
            const string sql = "select * from pedido where ID = @Id and estado_registro = 1";

            var parameters = new DynamicParameters();
            parameters.Add("id", id, DbType.Int64);

            var result = BDManager.GetInstance.GetDataWithParameters<T>(sql, parameters);

            return result.FirstOrDefault();
        }

        public static int InsertPedido(Pedido pedido)
        {
            const string sql = "INSERT INTO [dbo].[PEDIDO]([ID_PROVEEDOR], [ID_PRODUCTO], [ID_USUARIO], [CANTIDAD]) VALUES (@id_proveedor, @id_producto, @id_usuario, @cantidad)";

            var parameters = new DynamicParameters();
            parameters.Add("id_proveedor", pedido.IdProveedor, DbType.String);
            parameters.Add("id_producto", pedido.IdProducto, DbType.String);
            parameters.Add("id_usuario", pedido.IdUsuario, DbType.String);
            parameters.Add("cantidad", pedido.Cantidad, DbType.String);

            var result = BDManager.GetInstance.SetData(sql, parameters);
            return result;
        }

        public static int DeletePedido(int id)
        {
            const string sql = "DELETE FROM  PEDIDO where ID = @Id ";

            var parameters = new DynamicParameters();
            parameters.Add("id", id, DbType.Int64);
            var result = BDManager.GetInstance.SetData(sql, parameters);
            return result;
        }
        public static int UpdatePedido(Pedido pedido)
        {
            const string sql = "Update PEDIDO SET ID_PROVEEDOR=@ID_PROVEEDOR, ID_PRODUCTO=@ID_PRODUCTO, ID_USUARIO=@ID_USUARIO, CANTIDAD=@CANTIDAD  where ID = @Id ";

            var parameters = new DynamicParameters();
            parameters.Add("ID", pedido.Id, DbType.String);
            parameters.Add("ID_PROVEEDOR", pedido.IdProveedor, DbType.String);
            parameters.Add("ID_PRODUCTO", pedido.IdProducto, DbType.String);
            parameters.Add("ID_USUARIO", pedido.IdUsuario, DbType.String);
            parameters.Add("CANTIDAD", pedido.Cantidad, DbType.String);

            var result = BDManager.GetInstance.SetData(sql, parameters);
            return result;
        }
    }

}