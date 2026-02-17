namespace PLANES.Models;

/// <summary>
/// Contrato de un plan de capitalización (SOLID - Interface Segregation: solo lo que la UI necesita).
/// </summary>
public class Plan
{
    public string Id { get; set; } = string.Empty;
    /// <summary>Texto pequeño del header (ej. "TRIPLE CHANCE").</summary>
    public string Subtitle { get; set; } = string.Empty;
    /// <summary>Nombre principal del plan (ej. "HONDA WAVE").</summary>
    public string Title { get; set; } = string.Empty;
    /// <summary>"red" o "green" para el estilo del header de la tarjeta.</summary>
    public string HeaderVariant { get; set; } = "green";
    public string ImageUrl { get; set; } = string.Empty;
    public string ImageAlt { get; set; } = string.Empty;
    /// <summary>Etiqueta de precio (ej. "37.000" o "$35.000 - $42.000 + $200.000").</summary>
    public string PriceLabel { get; set; } = string.Empty;
    /// <summary>Parte opcional más pequeña del precio (ej. "DESDE").</summary>
    public string? PriceSmall { get; set; }
    /// <summary>Mensaje de WhatsApp personalizado para este plan; si está vacío se usa el mensaje por defecto.</summary>
    public string WhatsappMessage { get; set; } = string.Empty;
}
