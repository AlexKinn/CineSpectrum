using CineSpectrum.API.Configurations;
using CineSpectrum.API.Models.DTOs;
using Microsoft.Extensions.Options;
using System.Text.Json;

namespace CineSpectrum.API.Services.TvShow;

public class TvShowRepository : ITvShowRepository
{
    private readonly IHttpClientFactory _httpClientFactory;
    private readonly IOptions<TmdbOptions> _options;
    public TvShowRepository(IHttpClientFactory httpClientFactory, IOptions<TmdbOptions> options)
    {
        _httpClientFactory = httpClientFactory;
        _options = options;
    }

    public async Task<TvShowExternalApiDto?> GetTvShowById(int id)
    {
        HttpClient client = _httpClientFactory.CreateClient("Tmdb");

        HttpResponseMessage response = await client.GetAsync($"tv/{id}?language=en-US");

        if(response.IsSuccessStatusCode)
        {
            string json = await response.Content.ReadAsStringAsync();
            TvShowExternalApiDto? tvShowDto = JsonSerializer.Deserialize<TvShowExternalApiDto>(json);
            return tvShowDto;
        }
        // PROPER ERROR HANDLING NEEDED
        throw new Exception($"Erorr while fetching TvShow with Id {id}: {response.ReasonPhrase}");
    }
}
