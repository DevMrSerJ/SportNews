using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportNews.Model
{
	/// <summary>
	/// Model for table about article.
	/// </summary>
	public class Article
	{
		/// <summary>
		/// Identifier srticle.
		/// </summary>
		public Guid Id { get; set; }

		/// <summary>
		/// Header article.
		/// </summary>
		public string Header { get; set; }

		/// <summary>
		/// Brief description of the article.
		/// </summary>
		public string ShortText { get; set; }

		/// <summary>
		/// Full article.
		/// </summary>
		public string Text { get; set; }

		/// <summary>
		/// Path to image.
		/// </summary>
		public string ImageUrl { get; set; }

		/// <summary>
		/// Fullname of the author.
		/// </summary>
		public Guid AuthorId { get; set; }

		/// <summary>
		/// Date publish the arctile.
		/// </summary>
		public DateTime DatePublish { get; set; }
		
		/// <summary>
		/// Type sports in article.
		/// </summary>
		public Guid TypeSportId { get; set; }
	}
}
