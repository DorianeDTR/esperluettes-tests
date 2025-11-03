Feature: Login Esperluette Feature
    
    Background:
        Given I go to login page

    @Automated  
    Scenario: Validate the login form
        When I fill the login form with valide data
        Then I am redirected to the home page from the login page