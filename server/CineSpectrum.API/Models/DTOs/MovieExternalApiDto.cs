namespace CineSpectrum.API.Models.DTOs;

using System;
using System.Collections.Generic;
using System.Text.Json.Serialization;

public class MovieExternalApiDto
{
    [JsonPropertyName("adult")]
    public bool Adult { get; set; }

    [JsonPropertyName("backdrop_path")]
    public string BackdropPath { get; set; } = string.Empty;

    [JsonPropertyName("belongs_to_collection")]
    public Collection BelongsToCollection { get; set; } = new Collection();

    [JsonPropertyName("budget")]
    public long Budget { get; set; }

    [JsonPropertyName("genres")]
    public List<Genre> Genres { get; set; } = new List<Genre>();

    [JsonPropertyName("homepage")]
    public string Homepage { get; set; } = string.Empty;

    [JsonPropertyName("id")]
    public int Id { get; set; }

    [JsonPropertyName("imdb_id")]
    public string ImdbId { get; set; } = string.Empty;

    [JsonPropertyName("original_language")]
    public string OriginalLanguage { get; set; } = string.Empty;

    [JsonPropertyName("original_title")]
    public string OriginalTitle { get; set; } = string.Empty;

    [JsonPropertyName("overview")]
    public string Overview { get; set; } = string.Empty;

    [JsonPropertyName("popularity")]
    public double Popularity { get; set; }

    [JsonPropertyName("poster_path")]
    public string PosterPath { get; set; } = string.Empty;

    [JsonPropertyName("production_companies")]
    public List<ProductionCompany> ProductionCompanies { get; set; } = new List<ProductionCompany>();

    [JsonPropertyName("production_countries")]
    public List<ProductionCountry> ProductionCountries { get; set; } = new List<ProductionCountry>();

    [JsonPropertyName("release_date")]
    public DateTime ReleaseDate { get; set; }

    [JsonPropertyName("revenue")]
    public long Revenue { get; set; }

    [JsonPropertyName("runtime")]
    public int Runtime { get; set; }

    [JsonPropertyName("spoken_languages")]
    public List<SpokenLanguage> SpokenLanguages { get; set; } = new List<SpokenLanguage>();

    [JsonPropertyName("status")]
    public string Status { get; set; } = string.Empty;

    [JsonPropertyName("tagline")]
    public string Tagline { get; set; } = string.Empty;

    [JsonPropertyName("title")]
    public string Title { get; set; } = string.Empty;

    [JsonPropertyName("video")]
    public bool Video { get; set; }

    [JsonPropertyName("vote_average")]
    public double VoteAverage { get; set; }

    [JsonPropertyName("vote_count")]
    public int VoteCount { get; set; }
}

public class Collection
{
    [JsonPropertyName("id")]
    public int Id { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; } = string.Empty;

    [JsonPropertyName("poster_path")]
    public string PosterPath { get; set; } = string.Empty;

    [JsonPropertyName("backdrop_path")]
    public string BackdropPath { get; set; } = string.Empty;
}

public class Genre
{
    [JsonPropertyName("id")]
    public int Id { get; set; }

    [JsonPropertyName("name")]
    public string Name { get; set; } = string.Empty;
}

public class ProductionCompany
{
    [JsonPropertyName("id")]
    public int Id { get; set; }

    [JsonPropertyName("logo_path")]
    public string LogoPath { get; set; } = string.Empty;

    [JsonPropertyName("name")]
    public string Name { get; set; } = string.Empty;

    [JsonPropertyName("origin_country")]
    public string OriginCountry { get; set; } = string.Empty;
}

public class ProductionCountry
{
    [JsonPropertyName("iso_3166_1")]
    public string Iso3166_1 { get; set; } = string.Empty;

    [JsonPropertyName("name")]
    public string Name { get; set; } = string.Empty;
}

public class SpokenLanguage
{
    [JsonPropertyName("english_name")]
    public string EnglishName { get; set; } = string.Empty;

    [JsonPropertyName("iso_639_1")]
    public string Iso639_1 { get; set; } = string.Empty;

    [JsonPropertyName("name")]
    public string Name { get; set; } = string.Empty;
}
