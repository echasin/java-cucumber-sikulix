package step.definitions;


import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.Timestamp;
import java.util.Date;
import java.util.logging.Logger;

import org.sikuli.script.FindFailed;
import org.sikuli.script.Key;
import org.sikuli.script.Region;
import org.sikuli.script.Screen;

import config.SikuliConfiguration;
import cucumber.api.Scenario;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;

public class DesktopSteps {
	
	//Establish Database Connection
	String url = "jdbc:postgresql://localhost:5432/persons";
	String user = "postgres";
	String password = "admin";
	Connection conn = null;
	
	
	private Screen screen;
    public Key key;
    Logger logger = Logger.getLogger(Hooks.class.getName());
	private Scenario scenario;
   
    //String timeStamp = new SimpleDateFormat("MM.dd.yyyy_HH:mm:ss:ms").format(new java.util.Date());
    @Before
    public void setDbConfig() throws Exception {
    	System.out.println("setDbConfig() ");
    	try {	
    		conn = DriverManager.getConnection(url, user, password);
    		System.out.println("Postres Connection Successful");
    	}catch (Exception e) {
    		System.out.println("Postres Connection Failed");
    	
    	}
        
    }
    
    public void logevent(String featureFile, String scenario, Timestamp startTime, Timestamp endTime)  {
    	
    	try {	
    		System.out.println("Print to Postres");
    		PreparedStatement st = conn.prepareStatement("INSERT INTO public.\"EVENTLOG\" ( featurefile, scenario, starttime, endtime) VALUES(?,?,?,?)");
    		st.setString(1, featureFile);
    		st.setString(2, scenario);
    		st.setTimestamp(3, startTime);
    		st.setTimestamp(4, endTime);
    		st.executeUpdate();
    		st.close();
    	}catch (Exception e) {
    		System.out.println("Postres Connection: Exception"  + e) ;
    	
    	}
        
    }
    
    public void exitApplication (Screen screen) throws FindFailed {
        screen.keyDown(key.ALT);
        screen.keyDown(key.F4);
        screen.keyUp(key.ALT);
        screen.keyUp(key.F4);
    }
    
    @Before
    public void setConfig() throws Exception {
        screen = new Screen();
        SikuliConfiguration.setSikuliSettings();
        
    }
    
    @Before
    public void scenario(Scenario scenario) throws Exception {
        this.scenario = scenario;
        
    }

    @Given("^I click on the google chrome icon$")
    public void Open_googleChrome() throws Throwable {
        
    	System.out.println("Scenario: " + scenario.getName());
    	screen.click("chromeicon.png", 10);
        Date date= new Date();
        long time = date.getTime();
        Timestamp startts = new Timestamp(time);
        Timestamp endts = null;
        System.out.println("Event Start Time Stamp: " + startts);
        //System.out.println("Event Status: " + scenario.getName());
        
        try {
        	screen = new Screen();
        	screen.wait("identifier.png", 10); 	
        	date= new Date();
     		 	time = date.getTime();
     		 	endts = new Timestamp(time);
     		  //System.out.println("Event Status: " + scenario.getName());
     		 	System.out.println("Event End Time Stamp: " + endts);
     		 	logevent("featureFile_9", "scenario", startts, endts);
        	}
        	catch(Exception e) {
        		 System.out.println("Event Status: Exception");
        		 date= new Date();
        		 time = date.getTime();
        		 endts = new Timestamp(time);
        	   System.out.println("Event End Time Stamp: " + endts);
        	}
        	//logevent("featureFile_7", "scenario", startts, endts);
        
    }

    @Given("^Enter skywritersaas.com into url search bar$")
    public void Navigate_to_skywriter() throws Throwable {
    	screen.type(null, "prod.skywritersaas.com\n", 0);
        
        Date date= new Date();
        long time = date.getTime();
        Timestamp startts = new Timestamp(time);
        Timestamp endts = null;
        System.out.println("Event Start Time Stamp: " + startts);
        
        
        try {
        	screen = new Screen();
        	screen.wait("skywriter.png", 10); 	
        	date= new Date();
     		 	time = date.getTime();
     		 	endts = new Timestamp(time);
     		  //System.out.println("Event Status: " + scenario.getName());
     		 	System.out.println("Event End Time Stamp: " + endts);
        	 	
        	}
        	catch(Exception e) {
        		 System.out.println("Event Status: Exception");
        		 date= new Date();
        		 time = date.getTime();
        		 endts = new Timestamp(time);
        	   System.out.println("Event End Time Stamp: " + endts);
        	}
        	logevent("featureFile_8", "scenario", startts, endts);
    }
    
    @Given("^Use pre-existing credentials to login to account$")
    public void Login_account() throws Throwable {
    	screen.click("username.png", 0);
    	screen.type(null, "ilabtest.ilabtest", 0);
    	screen.click("password.png", 0);
    	screen.type(null, "34Simple12", 0);
    	screen.click("login.png", 0);

    	//System.out.println(timeStamp);		//Timestamp


    }
    
    @Given("^New contact navigation$")
    public void Navigate_newContact() throws Throwable {
    	Region r1 = new Region(767,290,309,202);
    	
    	screen.click("audienceicon.png", 0);
        screen.click("contacts.png", 0);
		r1 .click("add.png");

		//System.out.println(timeStamp);		//Timestamp


    }
    
    
    @Given("^New contact, input information$")
    public void newContact_info() throws Throwable {
    	
    	screen.click("firstname.png", 0);	//Firstname
        screen.type(null, "ilabtest", 0);
        screen.click("lastname.png", 0);	//Lastname
        screen.type(null, "ilabtest", 0);
        
    	screen.click("title.png", 0);		//Title
        screen.type(null, "This is an ilabtest", 0);
        screen.click("website.png", 0);		//Website
        screen.type(null, "test_input", 0);

        screen.keyDown(Key.PAGE_DOWN);
        Thread.sleep(500);
        screen.keyUp();
        
    	screen.click("company.png", 0);		//Company
        screen.type(null, "test_input", 0);
        
        screen.keyDown(Key.PAGE_UP);
        Thread.sleep(500);
        screen.keyUp();
        
        screen.click("nextbutton.png", 0);
        
        //System.out.println(timeStamp);		//Timestamp

      


    }

   
}

