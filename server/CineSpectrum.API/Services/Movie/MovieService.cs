using CineSpectrum.API.Models.DTOs;

namespace CineSpectrum.API.Services.Movie;

public class MovieService : IMovieService
{
    private readonly IMovieRepository _repository;
    public MovieService(IMovieRepository repository)
    {
        _repository = repository;
    }

    public async Task<MovieExternalApiDto?> GetMovieById(int id)
    {
        MovieExternalApiDto? movie = await _repository.GetMovieById(id);
        return movie;
    }
}
