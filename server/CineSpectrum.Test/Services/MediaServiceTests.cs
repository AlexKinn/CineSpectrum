using CineSpectrum.API.Services;
using FakeItEasy;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CineSpectrum.Tests.Services;

public class MediaServiceTests
{
    private readonly IMediaRepository _mediaRepository;
    public MediaServiceTests()
    {
        _mediaRepository = A.Fake<IMediaRepository>();
    }

    [Fact]
    public void MediaService_GetTrendingMedia_ReturnsList()
    {

    }
}
