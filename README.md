# QA technical assignmnet
## Guide

Steps :
1. Create a new repository in your github account
2. Fork this repo.
3. Make Test automation script
4. Rest API methods are given in this page 
5. Make sure you implemented CI Pipeline structure
6. Push changes to your repository 
7. Share the code repository us for review.

## Notes

-The function of the repository is user management of crud operation

-The purpose of the repository is Quality Engineers use this codebase and make to Test automation scripts and CI pipeline.

-This application deployed at heroku and url is https://peaceful-wildwood-93487.herokuapp.com

-This applicated code updated at Github and URL is https://github.com/liquidity-digital-inc/UserManagement

-This application database connection string : "mongodb://mongdbusr:Ld4MDB4D12_19@3.18.223.74:27017/liquidity_test"

-REST API

-Create a user

URL:https://peaceful-wildwood-93487.herokuapp.com/users/register
Http Method:Post
Body

	{
	  "Name": "Manikandan",
 
   	"Email": "manikandan@gmail.com",

    "Department": "IT",
    
		"PhoneNumber": "7890034678"
	
  }

-Read user list:

URL:https://peaceful-wildwood-93487.herokuapp.com/users
Method: Get

-Update User list

https://peaceful-wildwood-93487.herokuapp.com/users/manikandan@gmail.com
		
Http Method:PUT
Body

	{
	    "Name": "Manikandan",
 
   		"Email": "manikandan@gmail.com",

    	"Department": "Accounts",
    
		  "PhoneNumber": "7890034678"
	
}

-Delete User list

https://peaceful-wildwood-93487.herokuapp.com/users/manikandan@gmail.com
		
Http Method:DELETE

