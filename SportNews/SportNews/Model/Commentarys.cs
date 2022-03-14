using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportNews.Model
{
	/// <summary>
	/// Model for table about commentarys.
	/// </summary>
	public class Commentarys
	{
		/// <summary>
		/// Identifier record.
		/// </summary>
		public Guid Id { get; set; }

		/// <summary>
		/// Identifier user for commentarys.
		/// </summary>
		public Guid UserId { get; set; }

		/// <summary>
		/// Text commentary.
		/// </summary>
		public string Commentary { get; set; }

		/// <summary>
		/// Identifier article for which this commentary.
		/// </summary>
		public Guid ArticleId { get; set; }

		/// <summary>
		/// date publish commentary.
		/// </summary>
		public DateTime DatePublish { get; set; }
	}
}
