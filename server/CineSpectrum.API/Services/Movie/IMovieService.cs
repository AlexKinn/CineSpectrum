using CineSpectrum.API.Models.DTOs;

namespace CineSpectrum.API.Services.Movie;

public interface IMovieService
{
    Task<MovieExternalApiDto?> GetMovieById(int id);
}
