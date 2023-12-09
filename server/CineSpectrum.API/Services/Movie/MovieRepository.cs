using CineSpectrum.API.Configurations;
using CineSpectrum.API.Models.DTOs;
using Microsoft.Extensions.Options;
using Microsoft.Identity.Client;
using System.Text.Json;

namespace CineSpectrum.API.Services.Movie;

public class MovieRepository : IMovieRepository
{
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IOptions<TmdbOptions> _options;

    public MovieRepository(IHttpClientFactory httpClientFactory, IOptions<TmdbOptions> options)
    {
        _httpClientFactory = httpClientFactory;
        _options = options;
    }

    public async Task<MovieExternalApiDto?> GetMovieById(int id)
    {
        HttpClient client = _httpClientFactory.CreateClient("Tmdb");

        HttpResponseMessage response = await client.GetAsync($"movie/{id}?language=en-US");

        if (response.IsSuccessStatusCode)
        {
            string json = await response.Content.ReadAsStringAsync();
            MovieExternalApiDto? movie = JsonSerializer.Deserialize<MovieExternalApiDto>(json);
            return movie;
        }
        // ERROR HANDLING NEEDED
        throw new Exception($"Bad response from GetTrendingMedia API call: {response.ReasonPhrase}");
    }
}
 