// Invalid Key (Explanation)
// ==============================================================
// const someObject = {};

// //Which of the following are valid:

// someObject._name = "Hedwig";

// someObject.age = 6;
// var prop = "color"
// someObject[prop] = "red";

// someObject.123 = true;


/*
1. someObject._name = "Hedwig";

	 Question => Is it valid ;

	Answer => Yes it is valid key name and value pair because 
				this code don't give any kind of error.

2. someObject.age = 6;

	Question => Is it valid ;

	Answer => The key name and the value are valied ;


3.  var prop = "color"
    someObject[prop] = "red";

    yes we can do this . Declare the variable with the value color. Then we can set the 
    reference value as a key name and also the set the key value 

4. someObject.123 = true;
		
	we can not do this because 123 is a invalid key name . To make this key name valid 
	write the code like this

	someObject["123"] = true ;


*/