namespace FashionWebApi;

public class Product
{
    public int Id { get; set; }
    
    public string Title { get; set; } = string.Empty;

    public string Image { get; set; } = string.Empty;

    public List<string> Tags { get; set; } = new List<string>();
}