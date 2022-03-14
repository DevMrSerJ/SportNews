using Microsoft.AspNetCore.Mvc;
using SportNews.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportNews.Controllers
{
	/// <summary>
	/// Controller for work table commentary.
	/// </summary>
	[ApiController]
	[Route("api/[controller]")]
	public class CommentaryController : ControllerBase
	{
		/// <summary>
		/// Get commentarys for specific articles.
		/// </summary>
		/// <returns>List commentarys.</returns>
		[HttpGet("{Id}")]
		public IEnumerable<object> Get([FromRoute(Name = "Id")] Guid id)
		{
			try
			{
				using (SportNewsContext db = new SportNewsContext())
				{
					var users = (from comment in db.Commentary
								 join user in db.User on comment.UserId equals user.Id
								 join article in db.Article on comment.ArticleId equals article.Id
								 where article.Id == id
								 select new
								 {
									 Id = comment.Id,
									 User = $"{user.Surname} {user.Name[0]}. {user.Patronymic[0]}.",
									 Commentary = comment.Commentary,
									 DatePublish = comment.DatePublish
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
