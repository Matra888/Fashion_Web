using Microsoft.AspNetCore.Mvc;
using Npgsql;

namespace FashionWebApi.Controllers;

/*

-- Table: public.measurements

-- DROP TABLE IF EXISTS public.measurements;

CREATE TABLE IF NOT EXISTS public.measurements
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    shoulder numeric,
    bust numeric,
    waist numeric,
    hips numeric,
    CONSTRAINT measurements_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.measurements
    OWNER to postgres;

*/

[ApiController]
[Route("[controller]")]
public class MeasurementController : ControllerBase
{
    private readonly ILogger<MeasurementController> _logger;
    private readonly NpgsqlConnection _connection;

    public MeasurementController(ILogger<MeasurementController> logger, NpgsqlConnection connection)
    {
        _logger = logger;
        _connection = connection;
    }

    [HttpGet(Name = "GetMeasurements")]
    public IEnumerable<Measurement> Get()
    {
        _connection.Open();
        var cmd = new NpgsqlCommand("SELECT * FROM measurements", _connection);

        var reader = cmd.ExecuteReader();
        var measurements = new List<Measurement>();
        while (reader.Read())
        {
            measurements.Add(new Measurement
            {
                Id = reader.GetString(0),
                Shoulder = reader.GetFloat(1),
                Bust = reader.GetFloat(2),
                Waist = reader.GetFloat(3),
                Hips = reader.GetFloat(4)
            });
        }

        _connection.Close();

        return measurements;
    }

    [HttpPost(Name = "PutMeasurement")]
    public IActionResult SaveMeasurement([FromBody] Measurement data)
    {
        _connection.Open();
        var cmd = new NpgsqlCommand(@"INSERT INTO measurements (id, shoulder, bust, waist, hips) 
                                      VALUES (@id, @shoulder, @bust, @waist, @hips)", _connection);

        cmd.Parameters.AddWithValue("id", data.Id);
        cmd.Parameters.AddWithValue("shoulder", data.Shoulder);
        cmd.Parameters.AddWithValue("bust", data.Bust);
        cmd.Parameters.AddWithValue("waist", data.Waist);
        cmd.Parameters.AddWithValue("hips", data.Hips);

        int affectedRows = cmd.ExecuteNonQuery();

        _connection.Close();

        if (affectedRows > 0)
        {
            return Ok();
        }
        else
        {
            return BadRequest();
        }
    }
}
