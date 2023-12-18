using CineSpectrum.API.Models.DTOs;
using CineSpectrum.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace CineSpectrum.API.Controllers;

[ApiController]
[Route("[controller]")]
public class MediaController : ControllerBase
{
    private readonly IMediaService _mediaService;

    public MediaController(IMediaService MediaService)
    {
        _mediaService = MediaService;
    }

    [HttpGet("trending-media")]
    [ProducesResponseType(200)]
    public async Task<IActionResult> GetTrendingMedia()
    {
        List<MediaExternalApiDto> trendingMedia = await _mediaService.GetTrendingMedia();

        return Ok(trendingMedia);
    }
}
