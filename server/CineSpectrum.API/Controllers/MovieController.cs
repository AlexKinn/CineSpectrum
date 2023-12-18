
using CineSpectrum.API.Models.DTOs;
using CineSpectrum.API.Services.Movie;
using Microsoft.AspNetCore.Mvc;

namespace CineSpectrum.API.Controllers;

[ApiController]
[Route("[controller]")]
public class MovieController : ControllerBase
{
    private readonly IMovieService _movieService;
    public MovieController(IMovieService movieService)
    {
        _movieService = movieService;
    }

    [HttpGet("{id}")]
    [ProducesResponseType(200)]
    [ProducesResponseType(404)]
    public async Task<IActionResult> GetMovieById(int id)
    {
        MovieExternalApiDto? movie = await _movieService.GetMovieById(id);

        if(movie == null)
        {
            return NotFound();
        }

        return Ok(movie);
    }
    
}
