using CineSpectrum.API.Configurations;
using CineSpectrum.API.Data;
using CineSpectrum.API.Services;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Options;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddCors(options =>
{
    var frontEndURL = Environment.GetEnvironmentVariable("FRONTEND_URL") ?? "http://localhost:3000";
    options.AddPolicy(name: "_myAllowSpecificOrigins",
                      policy =>
                      {
                          policy.WithOrigins(frontEndURL);
                      });
});

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddDbContext<MediaContext>();
builder.Services.AddScoped<IMediaService, MediaService>();
builder.Services.AddScoped<IMediaRepository, MediaRepository>();

builder.Services.Configure<TmdbOptions>(
    builder.Configuration.GetSection(nameof(TmdbOptions)));
builder.Services.AddHttpClient("Tmdb", (serviceProvider, client) =>
{
    var settings = serviceProvider
        .GetRequiredService<IOptions<TmdbOptions>>().Value;

    client.DefaultRequestHeaders.Add("accept", "application/json");
    client.DefaultRequestHeaders.Add("Authorization", $"Bearer {Environment.GetEnvironmentVariable("TMDB_API_KEY")}");
    //client.BaseAddress = new Uri(settings.BaseURL);
});

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.MapGet("urls", (IOptions<TmdbOptions> options) =>
{
    var response = new
    {
        BaseUrl = options.Value.BaseURL,
        TrendingMediaURL = options.Value.TrendingMediaURL
    };
    return Results.Ok(response);
});

app.MapGet("TmdbKey", () =>
{
    var response = new
    {
        ApiKey = $"Bearer {Environment.GetEnvironmentVariable("TMDB_API_KEY")}"
    };
    return Results.Ok(response);
});

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
