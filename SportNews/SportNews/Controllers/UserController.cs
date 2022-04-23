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
		[HttpGet("{Id}")]
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
									 Name = $"{user.Surname} {user.Name} {user.Patronymic}",
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

		/// <summary>
		/// Post request for registration users to system.
		/// </summary>
		/// <param name="user">User for registrtion.</param>
		/// <returns>Result of registrtion.</returns>
		[HttpPost("registration")]
		public ActionResult Post([FromBody] User user)
		{
			if (user == null)
			{
				return BadRequest();
			}

			try
			{
				using (SportNewsContext db = new SportNewsContext())
				{
					var idUser = Guid.NewGuid();
					var registrationUser = new User
					{
						Id = idUser,
						TypeSportId = new Guid("C378FDDF-3052-4473-A392-A0684892DB82"),
						Gender = user.Gender,
						Mobile = user.Mobile,
						Email = user.Email,
						Login = user.Login,
						Password = user.Password
					};
					db.User.Add(registrationUser);

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
		/// Post request for authorization with login and password.
		/// </summary>
		/// <param name="password">Password users.</param>
		/// <param name="login">Login users.</param>
		/// <returns>Result of authorization.</returns>
		[HttpPost("authorization/{Login}")]
		public object Post([FromBody] string password, [FromRoute(Name = "Login")] string login)
		{
			if (string.IsNullOrEmpty(password) || string.IsNullOrEmpty(login))
			{
				return new 
				{ 
					success = false,
					message = "Пароль или логин оказались пустыми. Попробуйте снова"
				};
			}

			try
			{
				using (SportNewsContext db = new SportNewsContext())
				{
					var auth = (from user in db.User
								 where user.Login == login && user.Password == password
								 select user.Id).ToList();

					if (auth.Count > 0)
					{
						return new
						{
							success = true,
							message = auth.First()
						};
					}

					return new 
					{ 
						success = false,
						message = "Пользователя с таким логином и паролем не существует"
					};
				}
			}
			catch (Exception ex)
			{
				throw new Exception(ex.Message);
			}
		}
	}
}
