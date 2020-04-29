
const movieServer = [
	{
		id : "001a",
		Name : "A",
		rating : 4.5,
		catagory : "Thriller"
	},

	{
		id : "002b",
		Name : "B",
		rating : 4.8,
		catagory : "Comedy"
	},

	{
		id : "003c",
		Name : "C",
		rating : 5,
		catagory : "Adventure"
	},

	{
		id : "004D",
		Name : "D",
		rating : 5.2,
		catagory : "Bio Film" 
	},

	{
		id : "005e",
		Name : "E",
		rating : 5.6,
		catagory : "Action Film"
	},

	{
		id : "006f",
		Name : "F",
		rating : 5.4,
		catagory : "Drama"
	},

	{
		id : "007g",
		Name : "G",
		rating : 5.7,
		catagory : "Historical Films"
	},

	{
		id : "008hc",
		Name : "H",
		rating : 5.8,
		catagory : "Cartoon"
	},

	{
		id : "009i",
		Name : "I",
		rating : 6,
		catagory : "Animation"
	},

	{
		id : "0010i",
		Name : "J",
		rating : 6.8,
		catagory : "Classic Films"
	
	}
]

const movieId =  movieServer[9].id;
const movieName =  movieServer[9].Name;
const movieRating =  movieServer[9].rating;
const movieCatagory =  movieServer[9].catagory;


 const comment = movieName + " is a awesome film. " + "The movie Id is "+ " " + movieId +  " ." +
 				"This is a  type of "+ " " + movieCatagory + " "  + "The movie rating is" + " " +  movieRating


console.log(comment);
