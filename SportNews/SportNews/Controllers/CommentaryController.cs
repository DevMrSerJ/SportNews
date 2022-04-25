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
		/// <param name="id">Id article.</param>
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
									 UserId = comment.UserId,
									 User = user.Login,
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

		/// <summary>
		/// Post request for update text commentary.
		/// </summary>
		/// <param name="id">Id commentary.</param>
		/// <param name="commentText">Commentary text.</param>
		/// <returns>Result of update.</returns>
		[HttpPost("{Id}")]
		public ActionResult Post([FromRoute(Name = "Id")] Guid id, [FromBody] string commentText)
		{
			if (string.IsNullOrEmpty(commentText) || id == Guid.Empty)
			{
				return BadRequest();
			}

			try
			{
				using (SportNewsContext db = new SportNewsContext())
				{
					var oldComment = (from comm in db.Commentary
									  where comm.Id == id
									  select new Commentarys
									  {
										  Id = comm.Id,
										  UserId = comm.UserId,
										  Commentary = comm.Commentary,
										  ArticleId = comm.ArticleId,
										  DatePublish = comm.DatePublish
									  }).ToList().First();

					oldComment.Commentary = commentText;

					db.Commentary.Update(oldComment);

					db.SaveChanges();

					return Ok();
				}
			}
			catch (Exception ex)
			{
				throw new Exception(ex.Message);
			}
		}

		/// <summary>
		/// Post request for create commentary.
		/// </summary>
		/// <param name="comment">Commentary.</param>
		/// <returns>Result of create.</returns>
		[HttpPost("create")]
		public ActionResult Post([FromBody] Commentarys comment)
		{
			if (comment == null || comment.ArticleId == Guid.Empty || comment.UserId == Guid.Empty)
			{
				return BadRequest();
			}

			try
			{
				using (SportNewsContext db = new SportNewsContext())
				{
					var idComment = Guid.NewGuid();
					comment.Id = idComment;
					db.Commentary.Add(comment);

					db.SaveChanges();

					return Ok();
				}
			}
			catch (Exception ex)
			{
				throw new Exception(ex.Message);
			}
		}
	}
}
