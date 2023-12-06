using CineSpectrum.API.Models.DTOs;

namespace CineSpectrum.API.Services
{
    public interface IMediaService
    {
        Task<List<MediaExternalApiDto>> GetTrendingMedia();
    }
}
