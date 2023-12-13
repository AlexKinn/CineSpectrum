using System.Text.Json.Serialization;

namespace CineSpectrum.API.Models;

public class MediaExternalApiDto
{
    [JsonPropertyName("id")]
    public int Id { get; set; }

    [JsonPropertyName("media_type")]
    public string MediaType { get; set; } = string.Empty;

    [JsonPropertyName("backdrop_path")]
    public string BackdropPath { get; set; } = string.Empty;

    [JsonPropertyName("title")]
    public string? Title { get; set; }

    [JsonPropertyName("name")]
    public string? Name { get; set; }

    [JsonPropertyName("overview")]
    public string Overview { get; set; } = string.Empty;

    [JsonPropertyName("tagline")]
    public string Tagline { get; set; } = string.Empty;

    [JsonPropertyName("poster_path")]
    public string PosterPath { get; set; } = string.Empty;

    [JsonPropertyName("vote_average")]
    public double VoteAverage { get; set; }

    [JsonPropertyName("vote_count")]
    public int VoteCount { get; set; }
}