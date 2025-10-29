using Microsoft.EntityFrameworkCore;
using StandAuto.Models;

namespace StandAuto.Data
{
    public class ApiContext : DbContext
    {
        public DbSet<StandCars> StandCar { get; set; }
        public ApiContext(DbContextOptions<ApiContext> options) : base(options)
        {
        }

    }
}