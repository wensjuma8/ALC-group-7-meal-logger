NOTE THIS IS NOT A SQL FILE IN REAL SENSE, IT IS A SCHEMA


Role
{
	id:
	Role: text

		[
			User{
			Id:,
			Firstname:text;
			lastname:text;
			username: text,
			created_by: user,
			required:true;
				MealLog{


					MEAL{
					Id:;
					Name:text;
					}
					consumption _time:text
					Calories:text;
					 username:userid


				}

			},

			User{
					Id:,
					Firstname:text;
					lastname:text;
					username: text,
					created_by: user,
					required:true;
					MealLog{


						MEAL{
						Id:;
						Name:text;
						}
						consumption _time:text
						Calories:text;
						username:userid



					}

			},

		]

}


MEAL DETAILS(pulled by API){
      Id:;
     mealName:
     calories:;


}

