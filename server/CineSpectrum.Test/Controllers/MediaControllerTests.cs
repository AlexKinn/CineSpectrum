using CineSpectrum.API.Controllers;
using CineSpectrum.API.Models.DTOs;
using CineSpectrum.API.Services;
using FakeItEasy;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CineSpectrum.Tests.Controllers;

public class MediaControllerTests
{
    private readonly IMediaService _mediaService;
    public MediaControllerTests()
    {
        _mediaService = A.Fake<IMediaService>();
    }

    [Fact]
    public async void MediaContoller_GetTrendingMedia_ReturnOk()
    {
        List<MediaExternalApiDto> trendingMedia = A.Fake<List<MediaExternalApiDto>>();
        var controller = new MediaController(_mediaService);

        var result = await controller.GetTrendingMedia();

        result.Should().NotBeNull();
        result.Should().BeOfType(typeof(OkObjectResult));
    }
}
