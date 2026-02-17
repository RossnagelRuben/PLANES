namespace PLANES_DE_AHORRO.Services;

using PLANES_DE_AHORRO.Models;

/// <summary>
/// Abstracción de la configuración de planes (SOLID - Dependency Inversion: la UI depende de esta interfaz).
/// </summary>
public interface IPlanesConfig
{
    /// <summary>Número de WhatsApp sin espacios ni + (ej. 5491112345678).</summary>
    string WhatsappNumber { get; }
    /// <summary>Número de WhatsApp para los botones de planes (ej. 3751418382).</summary>
    string WhatsappPlansPhone { get; }
    /// <summary>URL fija de WhatsApp para los botones de las tarjetas de planes (api.whatsapp.com).</summary>
    string WhatsappPlansUrl { get; }
    /// <summary>URL de WhatsApp para "Pagá tu boleta" (mensaje: Hola, quiero pagar mi boleta).</summary>
    string WhatsappPagarBoletaUrl { get; }
    /// <summary>Lista de planes de capitalización (SOLID - Open/Closed: extensible por datos).</summary>
    IReadOnlyList<Plan> GetPlans();
}
