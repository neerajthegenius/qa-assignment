//const should = require("should");
const request = require("request");
const expect = require("chai").expect;
const baseUrl = "https://peaceful-wildwood-93487.herokuapp.com";
const util = require("util");
const chai = require("chai");
chai.use(require('chai-like'));
chai.use(require('chai-things'));
const should = chai.should();


describe('/GET User', function() {
    it('User should get all the customer information', function(done) {
        request.get({ url: baseUrl + '/users' },
            function(error, response,body) {
                    const bodyObj = JSON.parse(body);
                    expect(response.statusCode).to.equal(200);
                    response.should.be.json;
                    Array.from(bodyObj).forEach(item => {
                        item.should.have.property('Name');
                        item.should.have.property('Email');
                        item.should.have.property('Department');
                        item.should.have.property('PhoneNumber');
                        item.should.have.property('createdDate');
                    });

                done();
            });
    });

    it('User should not display any customer information with invalid id', function(done) {
        request.get({ url: baseUrl + '/users/Demo@223abc.com' },
            function(error, response,body) {
                    expect(response.body).to.deep.equal('[]');
                    expect(response.statusCode).to.equal(200);                  
                done();
            });
    });

    it('User should display customer information with valid id', function(done) {
        request.get({ url: baseUrl + '/users/Demo@abc.com' },
            function(error, response,body) {
                    const bodyObj = JSON.parse(body);
                    Array.from(bodyObj).forEach(item => {
                        item.should.have.property('Name');
                        item.should.have.property('Email');
                        item.should.have.property('Department');
                        item.should.have.property('PhoneNumber');
                        item.should.have.property('createdDate');
                    });
                    expect(response.statusCode).to.equal(200);                  
                done();
            });
    });

});



describe('/POST User', function() {
        it('User should post the user information',function(done)  {
        const user = {
        Name: "DemoTest1567",
        Email: "Demo@12314567.com",
        Department: "IT",
        PhoneNumber: 1234567890
        }
         request.post({ url: baseUrl + '/users/register',body : user,json:true },
         function(error, response,body)  {
           expect(body).to.contain.property('message').and.have.string('User saved Successfully!');
    
         request.get({ url: baseUrl + '/users/'+user.Email },
            function(error, response,body) {
                    const bodyObj = JSON.parse(body);
                    expect(bodyObj).to.contain.something.like(user)
                    
                    });
        done();
         });
    });


    it('User should not able to post the user information with invalid phone number',function(done)  {
        const user = {
        Name: "DemoTest1567",
        Email: "Demo@12314567.com",
        Department: "IT",
        PhoneNumber: '12345678ac'
        }

         request.post({ url: baseUrl + '/users/register',body : user,json:true },
         function(error, response,body)  {
           expect(body).to.contain.property('message').and.have.string('PhoneNumber length should be 10 digit and Integer');

        done();
         });
    });




    it('User should not able to post duplicate name',function(done)  {
        const user = {
        Name: "Demo12",
        Email: "Demo@1234",
        Department: "IT",
        PhoneNumber: 1234567890
        }
         request.post({ url: baseUrl + '/users/register',body : user,json:true },
         function(error, response,body)  {
            expect(response.statusCode).to.equal(500);
            expect(body).to.contain.property('message').and.have.string('duplicate key error');
            done();
        });
    });


     it('User should not able to post with incomplete data or with no data' ,function(done)  {
        const user = {
        Name: "Demo1234",
        Email: "Demo@1234",
        Department: "IT"
        }
         request.post({ url: baseUrl + '/users/register',body : user,json:true },
         function(error, response,body)  {
            expect(response.statusCode).to.equal(500);
            expect(body).to.contain.property('message').and.have.string('Cannot read property');
            done();
        });
    });
});



describe('/Put user', () => {
    it('User should able to update the customer information',function(done)  {
        const user = {
        Name: "Test123",
        Email: "Demo@1234",
        Department: "IT",
        PhoneNumber: 1234567890
        }
         request.put({ url: baseUrl + '/users/'+user.Email,body : user,json:true },
         function(error, response,body)  {
            expect(response.statusCode).to.equal(200);
            expect(body).to.contain.property('message').and.have.string('User saved Successfully!');
            request.get({ url: baseUrl + '/users/'+user.Email },
            function(error, response,body) {
                    const bodyObj = JSON.parse(body);
                    expect(bodyObj).to.contain.something.like(user)
                    
                    });
            done();
        });
    });

    it('User should not able to update the customer information with existing name',function(done)  {
        const user = {
        Name: "DemoTe",
        Email: "Demo@1234",
        Department: "IT",
        PhoneNumber: 1234567890
        }
         request.put({ url: baseUrl + '/users/Demo@12314.com',body : user,json:true },
         function(error, response,body)  {
            expect(response.statusCode).to.equal(400);
            expect(body).to.contain.property('message').and.have.string('is already taken');
            done();
        });
    });

      it('User should not able to update/add the customer information with non-existing name',function(done)  {
        const user = {
        Name: "Test",
        Email: "Demo@1234",
        Department: "IT",
        PhoneNumber: 1234567890
        }
         request.put({ url: baseUrl + '/users/Demo@12314567.co',body : user,json:true },
         function(error, response,body)  {
            expect(response.statusCode).to.equal(400);
            expect(body).to.contain.property('message').and.have.string('User not found');
            
        });
         done();
    });
});

describe('/Delete user', () => {
    it('User should able to delete the customer information',function(done)  {
         request.delete({ url: baseUrl + '/users/Demo@12314567.com'},
         function(error, response,body)  {
            expect(response.statusCode).to.equal(200);
            //expect(response.body).to.contain.property('message').and.have.string('User Deleted Successfully!');
            request.get({ url: baseUrl + '/users/Demo@12314567.com' },
            function(error, response,body) {
                    expect(response.body).to.deep.equal('[]');
                    expect(response.statusCode).to.equal(200);                  
               
            });

        
        });
          done();

    });

});