using Microsoft.AspNetCore.Mvc;
using Npgsql;

namespace FashionWebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class ImageController : ControllerBase
{
    private readonly ILogger<ImageController> _logger;
    private readonly NpgsqlConnection _connection;

    public ImageController(ILogger<ImageController> logger, NpgsqlConnection connection)
    {
        _logger = logger;
        _connection = connection;
    }

    [HttpGet("{uuid}")]
    public IActionResult GetImage(string uuid)
    {
        byte[]? imageBytes = null;

        _connection.Open();

        using var command = new NpgsqlCommand("SELECT data FROM images WHERE uuid = @uuid", _connection);
        command.Parameters.AddWithValue("uuid", new Guid("{" + uuid + "}"));

        var result = command.ExecuteScalarAsync().GetAwaiter().GetResult();
        if (result != null)
        {
            imageBytes = (byte[])result;
        }

        _connection.Close();

        if (imageBytes != null)
        {
            return File(imageBytes, "image/jpeg");
        }
        else
        {
            return NotFound();
        }
    }

}
