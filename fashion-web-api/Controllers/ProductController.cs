using Microsoft.AspNetCore.Mvc;
using Npgsql;

namespace FashionWebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductController : ControllerBase
{
    private readonly ILogger<ProductController> _logger;
    private readonly NpgsqlConnection _connection;

    public ProductController(ILogger<ProductController> logger, NpgsqlConnection connection)
    {
        _logger = logger;
        _connection = connection;
    }

    [HttpGet(Name = "GetProducts")]
    public IEnumerable<Product> Get(string? tagFilter = null) // Optional string parameter
    {
        var products = new List<Product>();

        _connection.Open();
        {
            using var cmd = new NpgsqlCommand("SELECT id, title, image FROM products WHERE (@tagFilter IS NULL OR id IN(" +
                                              "SELECT DISTINCT(product_id) FROM product_tags INNER JOIN tag_names ON product_tags.tag_id = tag_names.id WHERE tag_names.tag_name = @tagFilter));", _connection);
            var parameter = new NpgsqlParameter
            {
                ParameterName = "tagFilter",
                NpgsqlDbType = NpgsqlTypes.NpgsqlDbType.Varchar,
                Value = tagFilter != null ? tagFilter : DBNull.Value
            };
            cmd.Parameters.Add(parameter);

            using var reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                products.Add(new Product
                {
                    Id = reader.GetInt32(0),
                    Title = reader.GetString(1),
                    Image = reader.GetGuid(2).ToString().Replace("{", "").Replace("}", ""),
                    Tags = new List<string>()
                });
            }
        }

        foreach (var product in products)
        {
            using var cmd = new NpgsqlCommand("SELECT tag_names.tag_name FROM tag_names INNER JOIN product_tags " +
                                        "ON product_tags.tag_id = tag_names.id " +
                                        "WHERE product_tags.product_id = @id;", _connection);
            cmd.Parameters.AddWithValue("id", product.Id);
            using var reader = cmd.ExecuteReader();
            while (reader.Read())
            {
                var tag = reader.GetString(0);
                product.Tags.Add(tag);
            }
        }

        _connection.Close();

        return products;
    }
}
