using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportNews.Model
{
	/// <summary>
	/// Model for table about users.
	/// </summary>
	public class User
	{
		/// <summary>
		/// Identifier record.
		/// </summary>
		public Guid Id { get; set; }

		/// <summary>
		/// Name user.
		/// </summary>
		public string Name { get; set; }

		/// <summary>
		/// Surname user.
		/// </summary>
		public string Surname { get; set; }

		/// <summary>
		/// Patronymic user.
		/// </summary>
		public string Patronymic { get; set; }

		/// <summary>
		/// Gender. 
		/// 1 - male.
		/// 0 - female.
		/// </summary>
		public bool Gender { get; set; }

		/// <summary>
		/// Modile number user.
		/// </summary>
		public string Mobile { get; set; }

		/// <summary>
		/// Email address user.
		/// </summary>
		public string Email { get; set; }

		/// <summary>
		/// Short description with show card.
		/// </summary>
		public string ShortDescription { get; set; }

		/// <summary>
		/// Full description with page.
		/// </summary>
		public string FullDescription { get; set; }

		/// <summary>
		/// Path to user image.
		/// </summary>
		public string ImageUrl { get; set; }

		/// <summary>
		/// Type sport which user like.
		/// </summary>
		public Guid TypeSportId { get; set; }

		/// <summary>
		/// Password.
		/// </summary>
		public string Password { get; set; }

		/// <summary>
		/// Login.
		/// </summary>
		public string Login { get; set; }
	}
}
