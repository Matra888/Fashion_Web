using Microsoft.AspNetCore.Mvc;
using Npgsql;

namespace FashionWebApi.Controllers;

/*

-- Table: public.subscriptions

-- DROP TABLE IF EXISTS public.subscriptions;

CREATE TABLE IF NOT EXISTS public.subscriptions
(
    id character varying COLLATE pg_catalog."default" NOT NULL,
    full_name character varying COLLATE pg_catalog."default",
    email character varying COLLATE pg_catalog."default",
    CONSTRAINT subscriptions_pkey PRIMARY KEY (id)
)

TABLESPACE pg_default;

ALTER TABLE IF EXISTS public.subscriptions
    OWNER to fashion;

*/

[ApiController]
[Route("[controller]")]
public class SubscriptionController : ControllerBase
{
    private readonly ILogger<SubscriptionController> _logger;
    private readonly NpgsqlConnection _connection;

    public SubscriptionController(ILogger<SubscriptionController> logger, NpgsqlConnection connection)
    {
        _logger = logger;
        _connection = connection;
    }

    [HttpPost(Name = "PutSubscription")]
    public IActionResult SaveSubscription([FromBody] Subscription data)
    {
        _connection.Open();
        var cmd = new NpgsqlCommand(@"INSERT INTO subscriptions (id, full_name, email) 
                                      VALUES (@id, @full_name, @email)", _connection);

        cmd.Parameters.AddWithValue("id", data.Id);
        cmd.Parameters.AddWithValue("full_name", data.FullName);
        cmd.Parameters.AddWithValue("email", data.Email);

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
