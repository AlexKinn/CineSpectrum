using CineSpectrum.API.Models.DTOs;

namespace CineSpectrum.API.Services.TvShow;

public class TvShowService : ITvShowService
{
    private readonly ITvShowRepository _repository;
    public TvShowService(ITvShowRepository repository)
    {
        _repository = repository;
    }

    public async Task<TvShowExternalApiDto?> GetTvShowById(int id)
    {
        TvShowExternalApiDto? tvShowExternalApiDto = await _repository.GetTvShowById(id);
        return tvShowExternalApiDto;
    }
}
