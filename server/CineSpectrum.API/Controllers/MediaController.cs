using CineSpectrum.API.Models.DTOs;
using CineSpectrum.API.Services;
using Microsoft.AspNetCore.Mvc;

namespace CineSpectrum.API.Controllers;

[ApiController]
public class MediaController : ControllerBase
{
    private readonly IMediaService _mediaService;

    public MediaController(IMediaService MediaService)
    {
        _mediaService = MediaService;
    }

    [HttpGet("trending-media")]
    public IActionResult GetTrendingMedia()
    {
        List<MediaExternalApiDto> trendingMedia = _mediaService.GetTrendingMedia();

        return Ok(trendingMedia);
    }
}
