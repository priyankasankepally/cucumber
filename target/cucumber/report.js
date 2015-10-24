$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 1,
  "name": "Logging in Facebook",
  "description": "In order to see my account\r\nAs a user\r\nI want to login",
  "id": "logging-in-facebook",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 6,
  "name": "Good user",
  "description": "",
  "id": "logging-in-facebook;good-user",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 7,
  "name": "I go to \"browser\" and navigate to \"testsite\"",
  "keyword": "Given "
});
formatter.step({
  "line": 8,
  "name": "I enter \"username\" as \"priyanka.sankepally@gmail.com\"",
  "keyword": "And "
});
formatter.step({
  "line": 9,
  "name": "I enter \"password\" as \"blessmegod\"",
  "keyword": "And "
});
formatter.step({
  "line": 10,
  "name": "I click on \"Login\"Button",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "login should be \"success\"",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "browser",
      "offset": 9
    },
    {
      "val": "testsite",
      "offset": 35
    }
  ],
  "location": "loginTest.open_browser(String,String)"
});
formatter.result({
  "duration": 13571885122,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "username",
      "offset": 9
    },
    {
      "val": "priyanka.sankepally@gmail.com",
      "offset": 23
    }
  ],
  "location": "loginTest.enter(String,String)"
});
formatter.result({
  "duration": 996839641,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "password",
      "offset": 9
    },
    {
      "val": "blessmegod",
      "offset": 23
    }
  ],
  "location": "loginTest.enter(String,String)"
});
formatter.result({
  "duration": 799904376,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Login",
      "offset": 12
    }
  ],
  "location": "loginTest.click_signin(String)"
});
formatter.result({
  "duration": 12813871539,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "success",
      "offset": 17
    }
  ],
  "location": "loginTest.result(String)"
});
formatter.result({
  "duration": 126585,
  "status": "passed"
});
});