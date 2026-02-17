namespace PLANES_DE_AHORRO.Services;

using PLANES_DE_AHORRO.Models;

/// <summary>
/// Abstracción para la lista de ganadores (SOLID - Dependency Inversion).
/// </summary>
public interface IGanadoresConfig
{
    IReadOnlyList<Ganador> GetGanadores();
}
