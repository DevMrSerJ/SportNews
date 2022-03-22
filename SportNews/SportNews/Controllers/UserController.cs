using Microsoft.AspNetCore.Mvc;
using SportNews.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportNews.Controllers
{
	/// <summary>
	/// Controller for work table user.
	/// </summary>
	[ApiController]
	[Route("api/[controller]")]
	public class UserController : ControllerBase
	{
		/// <summary>
		/// Get all authors.
		/// </summary>
		/// <returns>IEnumerable authors.</returns>
		[HttpGet]
		public IEnumerable<object> Get()
		{
			try
			{
				using (SportNewsContext db = new SportNewsContext())
				{
					var users = (from user in db.User
								 where !string.IsNullOrEmpty(user.ShortDescription)
								 select new
								 {
									 Id = user.Id,
									 Name = $"{user.Surname} {user.Name} {user.Patronymic}",
									 ShortDescription = user.ShortDescription,
									 Image = user.ImageUrl
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
		/// Get information about concreate author.
		/// </summary>
		/// <param name="id">Id author.</param>
		/// <returns>IEnumerable info about authors.</returns>
		[HttpGet("Id")]
		public IEnumerable<object> Get([FromRoute(Name = "Id")] Guid id)
		{
			try
			{
				using (SportNewsContext db = new SportNewsContext())
				{
					var users = (from user in db.User
								 where user.Id == id
								 select new
								 {
									 Id = user.Id,
									 Name = $"{user.Surname} {user.Name}. {user.Patronymic}.",
									 ShortDescription = user.ShortDescription,
									 FullDescription = user.FullDescription,
									 Image = user.ImageUrl
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
