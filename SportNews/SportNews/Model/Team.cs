using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportNews.Model
{
	/// <summary>
	/// Model for table about teams.
	/// </summary>
	public class Team
	{
		/// <summary>
		/// Identifier record.
		/// </summary>
		public Guid Id { get; set; }

		/// <summary>
		/// Path to team image.
		/// </summary>
		public string ImageUrl { get; set; }

		/// <summary>
		/// Short name team.
		/// </summary>
		public string ShortName { get; set; }

		/// <summary>
		/// Full name team with city. 
		/// </summary>
		public string FullName { get; set; }

		/// <summary>
		/// Description team with an indication of achivements.
		/// </summary>
		public string Description { get; set; }

		/// <summary>
		/// Current position in championship.
		/// </summary>
		public int CurrentPosition { get; set; }

		/// <summary>
		/// Current count score.
		/// </summary>
		public int Score { get; set; }

		/// <summary>
		/// Type sport this team.
		/// </summary>
		public Guid TypeSportId { get; set; }
	}
}
