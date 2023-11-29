using CineSpectrum.API.Models.DTOs;

namespace CineSpectrum.API.Services
{
    public class MediaService : IMediaService
    {
        private readonly List<MediaExternalApiDto> _trendingMedia = new List<MediaExternalApiDto>();

        public MediaService() {
            _trendingMedia = new List<MediaExternalApiDto>
            {
                new MediaExternalApiDto
                {
                    Adult = false,
                    BackdropPath = "/fm6KqXpk3M2HVveHwCrBSSBaO0V.jpg",
                    Id = 872585,
                    Title = "Oppenheimer",
                    OriginalLanguage = "en",
                    OriginalTitle = "Oppenheimer",
                    Overview = "The story of J. Robert Oppenheimer's role in the development of the atomic bomb during World War II.",
                    PosterPath = "/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg",
                    MediaType = "movie",
                    GenreIds = new List<int>
                    {
                        18,
                        36
                    },
                    Popularity = 1623.555,
                    ReleaseDate = "2023-07-19",
                    Video = false,
                    VoteAverage = 8.167,
                    VoteCount = 4822
                },
                new MediaExternalApiDto
                {
                    Adult = false,
                    BackdropPath = "/rqbCbjB19amtOtFQbb3K2lgm2zv.jpg",
                    Id = 1429,
                    Name = "Attack on Titan",
                    OriginalLanguage = "ja",
                    OriginalName = "進撃の巨人",
                    Overview = "Several hundred years ago, humans were nearly exterminated by Titans. Titans are typically several stories tall, seem to have no intelligence, devour human beings and, worst of all, seem to do it for the pleasure rather than as a food source. A small percentage of humanity survived by walling themselves in a city protected by extremely high walls, even taller than the biggest Titans. Flash forward to the present and the city has not seen a Titan in over 100 years. Teenage boy Eren and his foster sister Mikasa witness something horrific as the city walls are destroyed by a Colossal Titan that appears out of thin air. As the smaller Titans flood the city, the two kids watch in horror as their mother is eaten alive. Eren vows that he will murder every single Titan and take revenge for all of mankind.",
                    PosterPath = "/hTP1DtLGFamjfu8WqjnuQdP1n4i.jpg",
                    MediaType = "tv",
                    GenreIds = new List<int>
                    {
                        16,
                        10765,
                        10759
                    },
                    Popularity = 177.717,
                    FirstAirDate = "2013-04-07",
                    VoteAverage =  8.667,
                    VoteCount = 5690,
                    OriginCountry = new List<string>
                    {
                        "JP"
                    }
                }
            };
            
        }

        public List<MediaExternalApiDto> GetTrendingMedia()
        {
            return _trendingMedia;
        }
    }
}
