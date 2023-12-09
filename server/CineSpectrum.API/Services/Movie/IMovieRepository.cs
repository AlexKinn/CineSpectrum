using CineSpectrum.API.Models.DTOs;

namespace CineSpectrum.API.Services.Movie;

public interface IMovieRepository
{
    Task<MovieExternalApiDto?> GetMovieById(int id);
}
