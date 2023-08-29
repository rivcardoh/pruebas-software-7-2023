using backend.connection;
using backend.entidades;
using backend.servicios;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class ProveedorController : ControllerBase
{
    private readonly IConfiguration _configuration;
    private readonly string? connectionString;

    public ProveedorController(IConfiguration configuration)
    {
        _configuration = configuration;
        connectionString = _configuration["SqlConnectionString:DefaultConnection"];
        BDManager.GetInstance.ConnectionString = connectionString;
    }

    [HttpGet]
    [Route("GetAllProveedor")]
    public IActionResult GetAllProveedor()
    {
        try
        {
            var result = ProveedorServicios.ObtenerTodo<Proveedor>();
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }


    [HttpGet]
    [Route("GetProveedorById")]
    public IActionResult GetProveedorById([FromQuery] int id)
    {
        try
        {
            var result = ProveedorServicios.ObtenerById<Proveedor>(id);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    [HttpPost]
    [Route("AddProveedor")]
    public IActionResult AddProveedor(Proveedor proveedor)
    {
        try
        {
            var result = ProveedorServicios.InsertProveedor(proveedor);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    [HttpDelete]
    [Route("DeleteProveedor")]
    public IActionResult DeleteProveedor([FromQuery] int id)
    {
        try
        {
            var result = ProveedorServicios.DeleteProveedor(id);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }
}