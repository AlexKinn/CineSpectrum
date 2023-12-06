using CineSpectrum.API.Models.DTOs;

namespace CineSpectrum.API.Services;

public interface IMediaRepository
{
    Task<List<MediaExternalApiDto>> GetTrendingMedia();
}
