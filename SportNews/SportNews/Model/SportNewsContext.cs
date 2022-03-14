using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportNews.Model
{
	public class SportNewsContext : DbContext
	{
		public virtual DbSet<Article> Article { get; set; }
		public virtual DbSet<User> User { get; set; }
		public virtual DbSet<Team> Team { get; set; }
		public virtual DbSet<Commentarys> Commentary { get; set; }
		public virtual DbSet<TypeSport> TypeSport { get; set; }

		public SportNewsContext()
		{
		}

		public SportNewsContext(DbContextOptions<SportNewsContext> options)
		: base(options)
		{
		}

		protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
		{
			if (!optionsBuilder.IsConfigured)
			{
				optionsBuilder.UseSqlServer(@"Server=SERJ-DEV\DEV;Database=SportNews;Trusted_Connection=True;");
			}
		}
	}
}
