using Microsoft.AspNetCore.Mvc;
using SportNews.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportNews.Controllers
{
	/// <summary>
	/// Controller for work table teams.
	/// </summary>
	[ApiController]
	[Route("api/[controller]")]
	public class TeamController : ControllerBase
	{
		/// <summary>
		/// Get teams for concreate type sports.
		/// </summary>
		/// <param name="name">Name type sport.</param>
		/// <returns>IEnumerable info about articles.</returns>
		[HttpGet("Sport={Name}")]
		public IEnumerable<object> Get([FromRoute(Name = "Name")]string name)
		{
			try
			{
				using (SportNewsContext db = new SportNewsContext())
				{
					var users = (from team in db.Team
								 join sport in db.TypeSport on team.TypeSportId equals sport.Id
								 where sport.Name.ToLower().IndexOf(name.ToLower()) != -1
								 select new
								 {
									 Id = team.Id,
									 ShortName = team.ShortName,
									 Position = team.CurrentPosition,
									 Score = team.Score,
									 Sport = team.TypeSportId
								 }).ToList();

					return users;
				}
			}
			catch (Exception ex)
			{
				throw new Exception(ex.Message);
			}
		}

		/// <summary>
		/// Get information about teams.
		/// </summary>
		/// <param name="id">Id team.</param>
		/// <returns>Object about concreate team.</returns>
		[HttpGet("{Id}")]
		public IEnumerable<object> Get([FromRoute(Name = "Id")] Guid id)
		{
			try
			{
				using (SportNewsContext db = new SportNewsContext())
				{
					var users = (from team in db.Team
								 where team.Id == id
								 select new
								 {
									 Id = team.Id,
									 ImageUrl = team.ImageUrl,
									 ShortName = team.ShortName,
									 FullName = team.FullName,
									 Description = team.Description,
									 Position = team.CurrentPosition,
									 Score = team.Score,
									 Sport = team.TypeSportId
								 }).ToList();

					return users;
				}
			}
			catch (Exception ex)
			{
				throw new Exception(ex.Message);
			}
		}
	}
}
