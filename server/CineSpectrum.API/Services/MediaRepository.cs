using CineSpectrum.API.Configurations;
using CineSpectrum.API.Models.ApiResponses;
using CineSpectrum.API.Models.DTOs;
using Microsoft.Extensions.Options;
using System.Text.Json;

namespace CineSpectrum.API.Services;

public class MediaRepository : IMediaRepository
{
    private readonly TmdbOptions _options;
    private readonly IHttpClientFactory _httpClientFactory;
    public MediaRepository(IOptions<TmdbOptions> options, IHttpClientFactory httpClientFactory)
    {
        _options = options.Value;
        _httpClientFactory = httpClientFactory;
    }

    public async Task<List<MediaExternalApiDto>> GetTrendingMedia()
    {
        var client = _httpClientFactory.CreateClient("Tmdb");

        HttpResponseMessage response = await client.GetAsync(_options.TrendingMediaURL);

        if (response.IsSuccessStatusCode)
        {
            string json = await response.Content.ReadAsStringAsync();
            TrendingAllResponse? apiResponse = JsonSerializer.Deserialize<TrendingAllResponse>(json);
            List<MediaExternalApiDto> trendingMedia = apiResponse?.Results ?? new List<MediaExternalApiDto>();
            return trendingMedia;

        }
        // ERROR HANDLING
        throw new Exception($"Bad response from GetTrendingMedia API call: {response.ReasonPhrase}");
    }
}
