using Microsoft.AspNetCore.Mvc;
using SportNews.Model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportNews.Controllers
{
	/// <summary>
	/// Controller for work table article.
	/// </summary>
	[ApiController]
	[Route("api/[controller]")]
	public class ArticleController : ControllerBase
	{
		/// <summary>
		/// Get all articles.
		/// </summary>
		/// <returns>IEnumerable info about articles.</returns>
		[HttpGet]
		public IEnumerable<object> Get()
		{
			try
			{
				using (SportNewsContext db = new SportNewsContext())
				{
					var articles = (from article in db.Article
								 join user in db.User on article.AuthorId equals user.Id
								 join sport in db.TypeSport on article.TypeSportId equals sport.Id
								 select new 
								 {
									Id = article.Id,
									Header = article.Header,
									ShortText = article.ShortText,
									Author = $"{user.Surname} {user.Name[0]}. {user.Patronymic[0]}.",
									DatePublish = article.DatePublish,
									Sport = sport.Name
								 }).ToList();

					return articles;
				}
			}
			catch (Exception ex)
			{
				throw new Exception(ex.Message);
			}
		}

		/// <summary>
		/// Get full information about specific article.
		/// </summary>
		/// <param name="id">Id Articles.</param>
		/// <returns>Full information about this article.</returns>
		[HttpGet("{Id}")]
		public IEnumerable<object> Get([FromRoute(Name = "Id")] Guid id)
		{
			try
			{
				using (SportNewsContext db = new SportNewsContext())
				{
					var articles = (from article in db.Article
								 join user in db.User on article.AuthorId equals user.Id
								 join sport in db.TypeSport on article.TypeSportId equals sport.Id
								 where article.Id == id
								 select new
								 {
									 Id = article.Id,
									 Header = article.Header,
									 ShortText = article.ShortText,
									 Text = article.Text,
									 ImageUrl = article.ImageUrl,
									 Author = $"{user.Surname} {user.Name[0]}. {user.Patronymic[0]}.",
									 DatePublish = article.DatePublish,
									 Sport = sport.Name
								 }).ToList();

					return articles;
				}
			}
			catch (Exception ex)
			{
				throw new Exception(ex.Message);
			}
		}

		/// <summary>
		/// Get all articles by filters.
		/// </summary>
		/// <param name="typeSport">Name type sport.</param>
		/// <returns>List articles.</returns>
		[HttpGet("Sport={TypeSport}&Date={Date}&Author={Author}&Search={Search}")]
		public IEnumerable<object> Get([FromRoute(Name = "TypeSport")] string typeSport,
										[FromRoute(Name = "Date")] long date,
										[FromRoute(Name = "Author")] string name,
										[FromRoute(Name = "Search")] string search)
		{
			try
			{
				using (SportNewsContext db = new SportNewsContext())
				{
					var articles = (from article in db.Article
								 join user in db.User on article.AuthorId equals user.Id
								 join sport in db.TypeSport on article.TypeSportId equals sport.Id
								 where sport.Name.ToLower().IndexOf(typeSport.ToLower()) != -1 &&
										article.DatePublish == new DateTime(date) &&
										name.Contains(user.Name) &&
										(article.Header.Contains(search) || article.Text.Contains(search))
								 select new
								 {
									 Id = article.Id,
									 Header = article.Header,
									 ShortText = article.ShortText,
									 Text = article.Text,
									 ImageUrl = article.ImageUrl,
									 Author = $"{user.Surname} {user.Name[0]}. {user.Patronymic[0]}.",
									 DatePublish = article.DatePublish,
									 Sport = sport.Name
								 }).ToList();

					return articles;
				}
			}
			catch (Exception ex)
			{
				throw new Exception(ex.Message);
			}
		}
	}
}
