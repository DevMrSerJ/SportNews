using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SportNews.Model
{
	/// <summary>
	/// Model for table about type sport.
	/// </summary>
	public class TypeSport
	{
		/// <summary>
		/// Identifier record.
		/// </summary>
		public Guid Id { get; set; }

		/// <summary>
		/// Name type sport.
		/// </summary>
		public string Name { get; set; }
	}
}
