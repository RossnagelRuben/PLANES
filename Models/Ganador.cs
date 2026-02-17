namespace PLANES.Models;

/// <summary>
/// Datos de un ganador adjudicado (SOLID - contrato para la UI).
/// </summary>
public class Ganador
{
    public string Nombre { get; set; } = string.Empty;
    public string ImagenUrl { get; set; } = string.Empty;
    public string Cuota { get; set; } = string.Empty;
    public string Localidad { get; set; } = string.Empty;
    public string FechaAdjudicacion { get; set; } = string.Empty;
    public string Premio { get; set; } = string.Empty;
}
