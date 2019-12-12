# QA technical assignmnet
## [Guide](https://docs.google.com/document/d/1KppmHlCzpPFqxBvr4bvFL6nTdpzUxKJBM1c1VsallF0)

About this task:
The test task involves managing the user CRUD operation.
The codebase has been added to the Github repository. Quality Engineer candidates are to use this code and create the test automation scripts.

Inputs

-Rest API reference 
-QA Engineer can access the code from this URL  https://github.com/liquidity-digital-inc/UserManagement.git . Create a new repository in your account and import this repository.
-QA Engineer can test the live application here:  https://peaceful-wildwood-93487.herokuapp.com/

Test case 

 	Create-Create a new user and save.
		-If email is already in table then give a valid error message
		-Phone number should be in numeric and restricted to  10 digits.
		-If user is added in database then display valid message to user
	
	Read-Read  user list from the table in ascending order by name

	Update-User can update details based on email id

	Delete-User can delete the user record  based on email id

Rest API

1.Create a user

URL:https://peaceful-wildwood-93487.herokuapp.com/users/register
Http Method:Post
Body
	{
	"Name": "Manikandan",
 	"Email": "manikandan@gmail.com",
	"Department": "IT", 
	"PhoneNumber": "7890034678"
	}


2.Read user list:

URL:https://peaceful-wildwood-93487.herokuapp.com/users
Method: Get


3.Update User list

https://peaceful-wildwood-93487.herokuapp.com/users/manikandan@gmail.com
		
Http Method:PUT
Body

	{
	"Name": "Manikandan",
 	"Email": "manikandan@gmail.com",
 	"Department": "IT",
    	"PhoneNumber": "7890034678"
	
}

4.Delete User list

https://peaceful-wildwood-93487.herokuapp.com/users/manikandan@gmail.com
Http Method:DELETE


Output

We expect the following outputs from our QA engineer.
Test Automation script should be added in the codebase
Test script should be added in CI(Continuous Integration) Pipeline (use any CI tool/service of your choice)
Compile
Validate
Unit Testing
Push the Test script code to your own repository
Share the code repository URL for review.
 



