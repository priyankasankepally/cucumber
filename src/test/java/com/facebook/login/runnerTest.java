package com.facebook.login;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;



@RunWith(Cucumber.class)
//@CucumberOptions(format={"html:output"})
//to generate json file under target folder 
@CucumberOptions(features="src/test/resources/com/facebook/login",plugin={"pretty","html:target/cucumber","json:C:/Users/ajay/.jenkins/workspace/cucumberreportsplugintest/target/cucumber.json"})
public class runnerTest {
	
}