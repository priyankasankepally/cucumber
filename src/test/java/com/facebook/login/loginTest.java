package com.facebook.login;


import com.facebook.core.webConnector;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;

public class loginTest {

	
	webConnector connect = new webConnector();

	@Given("^I go to \"([^\"]*)\" and navigate to \"([^\"]*)\"$")
	public void  open_browser(String browser,String url){
		
		System.out.println("Open browser "+browser+"and navigated to "+url);
		connect.openBrowser(browser);
		connect.navigate(url);
	}

	@And("^I enter \"([^\"]*)\" as \"([^\"]*)\"$")
	
public void enter(String object, String data){
		
		System.out.println("entered "+object+" as"+data);
		connect.input(object,data);
	}
	
	@And("^I click on \"([^\"]*)\"Button$")
	
	public void click_signin(String object){
		
		System.out.println("clicked on "+object+" button");
		connect.click(object);
	}

	@Then("^login should be \"([^\"]*)\"$")
	
	public void result(String expectedvalue){
		System.out.println("Then the result is "+expectedvalue);
	}
	
}
