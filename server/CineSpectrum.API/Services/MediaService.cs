using CineSpectrum.API.Models.DTOs;

namespace CineSpectrum.API.Services
{
    public class MediaService : IMediaService
    {
        private readonly IMediaRepository _mediaRepository;

        public MediaService(IMediaRepository mediaRepository)
        {
            _mediaRepository= mediaRepository;
        }

        public async Task<List<MediaExternalApiDto>> GetTrendingMedia()
        {
            List<MediaExternalApiDto> trendingMedia = await _mediaRepository.GetTrendingMedia();
            return trendingMedia;
        }
    }
}
