using Dapper;
using System.Data.SqlClient;
namespace backend.connection
{

    //CLse de conexion con la BD que utiliza el ORM de Dapper
        public sealed class BDManager {
            private static readonly object lockObj= new();
            private static BDManager? instance;

            private BDManager(){

            }
            public static BDManager GetInstance{
                get
                {
                    lock(lockObj){
                        if(instance == null){
                            instance = new BDManager();
                        }
                    }
                    return instance;
                }
            }
            public string? ConnectionString {get; set;}
            public IEnumerable<T> GetData<T>(string sql){
                using var connection = new SqlConnection(ConnectionString);
                connection.Open();
                DefaultTypeMap.MatchNamesWithUnderscores= true;
                return connection.Query<T>(sql);
            }

            //Metodo para obtener un listado de la BD con parametros DAPPER
            public IEnumerable<T> GetDataWithParameters<T>(string sql, DynamicParameters dynamicParameters){
                using var connection = new SqlConnection(ConnectionString);
                connection.Open();
                DefaultTypeMap.MatchNamesWithUnderscores=true;
                return connection.Query<T>(sql,dynamicParameters);

            }
            //metodo para escribir en la BD
            public int SetData(string sql, DynamicParameters dynamicParameters){
                using var connection = new SqlConnection(ConnectionString);
                DefaultTypeMap.MatchNamesWithUnderscores = true;
                return connection.Execute(sql,dynamicParameters);
            }
        }
}