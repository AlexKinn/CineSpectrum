﻿using CineSpectrum.API.Models.DTOs;
using System.Text.Json.Serialization;

namespace CineSpectrum.API.Models.ApiResponses;

public class TrendingAllResponse
{
    [JsonPropertyName("page")]
    public int Page { get; set; }

    [JsonPropertyName("results")]
    public List<MediaExternalApiDto> Results { get; set; } = new List<MediaExternalApiDto>();
    
    [JsonPropertyName("total_pages")]
    public int TotalPages { get; set; }
    
    [JsonPropertyName("total_results")]
    public int TotalResults { get; set; }
}
