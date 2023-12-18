using CineSpectrum.API.Controllers;
using CineSpectrum.API.Models.DTOs;
using CineSpectrum.API.Services.Movie;
using FakeItEasy;
using FluentAssertions;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CineSpectrum.Tests.Controllers;

public class MovieControllerTests
{
    private readonly IMovieService _movieService;
    public MovieControllerTests()
    {
        _movieService = A.Fake<IMovieService>();
    }

    [Fact]
    public async void MovieController_GetMovieById_ReturnsOk()
    {
        int id = 10;
        MovieExternalApiDto movie = A.Fake<MovieExternalApiDto>();
        A.CallTo(() => _movieService.GetMovieById(id)).Returns(movie);
        var controller = new MovieController(_movieService);

        var result = await controller.GetMovieById(id);

        result.Should().NotBeNull();
        result.Should().BeOfType<OkObjectResult>();
    }
    [Fact]
    public async void MovieController_GetMovieById_ReturnsNotFound()
    {
        int id = 10;
        MovieExternalApiDto movie = A.Fake<MovieExternalApiDto>();
        A.CallTo(() => _movieService.GetMovieById(id)).Returns(null);
        var controller = new MovieController(_movieService);

        var result = await controller.GetMovieById(id);

        result.Should().NotBeNull();
        result.Should().BeOfType<OkObjectResult>();
    }
}
