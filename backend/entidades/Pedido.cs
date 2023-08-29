namespace backend.entidades
{
    public class Pedido : Common
    {
        public int Id { get; set; }

        public int IdProveedor {get; set;}

       public int IdProducto {get; set;}

        public int IdUsuario {get; set;}

        public int Cantidad {get; set;}
    }
}
