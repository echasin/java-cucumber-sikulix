Feature: Test feature
    This test will run by navigating to skywritersaas.com
    Log in the test account (ilabtest.ilabtest)
    Create a new contact

	@uno
    Scenario: Click google chrome icon
    Given I click on the google chrome icon
    
    @dos
    Scenario: Navigate to skywritersaas.com
    Given Enter skywritersaas.com into url search bar

	@tres
    Scenario: Login to account
    Given Use pre-existing credentials to login to account
    
    Scenario: Iterate through Contacts
    Given Iterate through Contacts
    
#    Scenario: Create new Contact
#    Given New contact navigation
    
#    Scenario: Input new contact data
 #   Given New contact, input information
