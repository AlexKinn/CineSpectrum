using CineSpectrum.API.Models;
using Microsoft.EntityFrameworkCore;

namespace CineSpectrum.API.Data
{
    public class MediaContext : DbContext
    {
        public MediaContext(DbContextOptions<MediaContext> options) : base(options)
        {
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            base.OnConfiguring(optionsBuilder);
            optionsBuilder.UseSqlServer("Server=localhost;Database=cinespectrumdb;Trusted_Connection=True;");
        }

        public DbSet<Movie> Movies { get; set; }
    }
}
