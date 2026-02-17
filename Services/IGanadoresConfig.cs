namespace PLANES.Services;

using PLANES.Models;

/// <summary>
/// Abstracción para la lista de ganadores (SOLID - Dependency Inversion).
/// </summary>
public interface IGanadoresConfig
{
    IReadOnlyList<Ganador> GetGanadores();
}
