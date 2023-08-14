using backend.connection;
using backend.entidades;
using backend.servicios;
using Microsoft.AspNetCore.Mvc;

namespace backend.Controllers;

[ApiController]
[Route("api/[controller]")]
public class UsuarioController : ControllerBase
{
    private readonly IConfiguration _configuration;
    private readonly string? connectionString;

    public UsuarioController(IConfiguration configuration)
    {
        _configuration = configuration;
        connectionString = _configuration["SqlConnectionString:DefaultConnection"];
        BDManager.GetInstance.ConnectionString = connectionString;
    }

    [HttpGet]
    [Route("GetAllUsuario")]
    public IActionResult GetAllUsuario()
    {
        try
        {
            var result = UsuarioServicios.ObtenerTodo<Usuarios>();
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }


    [HttpGet]
    [Route("GetUsuarioById")]
    public IActionResult GetUsuarioById([FromQuery] int id)
    {
        try
        {
            var result = UsuarioServicios.ObtenerById<Usuarios>(id);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }

    [HttpPost]
    [Route("AddUsuario")]
    public IActionResult AddUsuario(Usuarios usuarios)
    {
        try
        {
            var result = UsuarioServicios.InsertUsuario(usuarios);
            return Ok(result);
        }
        catch (Exception ex)
        {
            return StatusCode(500, ex.Message);
        }
    }
}