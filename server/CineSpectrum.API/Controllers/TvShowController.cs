using CineSpectrum.API.Models.DTOs;
using CineSpectrum.API.Services.TvShow;
using Microsoft.AspNetCore.Mvc;

namespace CineSpectrum.API.Controllers;

[ApiController]
[Route("[controller]")]
public class TvShowController : ControllerBase
{
    private readonly ITvShowService _tvShowService;
    public TvShowController(ITvShowService tvShowService)
    {
        _tvShowService = tvShowService;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetTvShowById(int id)
    {
        TvShowExternalApiDto? tvShow = await _tvShowService.GetTvShowById(id); 

        if(tvShow == null)
        {
            return NotFound();
        }
        return Ok(tvShow);
    }
}
