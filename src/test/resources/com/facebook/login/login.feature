Feature:Logging in Facebook
In order to see my account
As a user
I want to login

Scenario: Good user
Given I go to "browser" and navigate to "testsite"
And I enter "username" as "priyanka.sankepally@gmail.com"
And I enter "password" as "blessmegod"
And I click on "Login"Button
Then login should be "success"