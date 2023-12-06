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
    public async Task<IActionResult> GetTrendingMedia()
    {
        // LIST WILL BE EMPTY IF NO MEDIA RETURNED
        List<MediaExternalApiDto> trendingMedia = await _mediaService.GetTrendingMedia();

        return Ok(trendingMedia);
    }
}
