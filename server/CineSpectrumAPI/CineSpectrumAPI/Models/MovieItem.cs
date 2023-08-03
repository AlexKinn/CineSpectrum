namespace CineSpectrumAPI.Models
{
    public class MovieItem
    {
        public string posterPath { get; set; }
        public string smallImg { get; set; }
        public string mainText { get; set; }
        public string subText { get; set; }
    }
}

/* Example data
             "adult": false,
            "backdrop_path": "/c0769FOh3GPgSmNOk3UlKCMXmj4.jpg",
            "id": 71915,
            "name": "Good Omens",
            "original_language": "en",
            "original_name": "Good Omens",
            "overview": "Aziraphale, an angel, and Crowley, a demon, join forces to find the Antichrist and stop Armageddon.",
            "poster_path": "/1ibIjP6puA4y2SfCn9icSehHrBu.jpg",
            "media_type": "tv",
            "genre_ids": [
                10765,
                35,
                18
            ],
            "popularity": 284.352,
            "first_air_date": "2019-05-31",
            "vote_average": 8.028,
            "vote_count": 1579,
            "origin_country": [
                "GB"
            ]
*/