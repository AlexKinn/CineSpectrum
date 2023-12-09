using CineSpectrum.API.Models.DTOs;

namespace CineSpectrum.API.Services.TvShow;

public interface ITvShowService
{
    Task<TvShowExternalApiDto?> GetTvShowById(int id);
}
