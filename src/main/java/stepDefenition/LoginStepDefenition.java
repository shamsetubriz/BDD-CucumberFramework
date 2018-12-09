package stepDefenition;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;
import org.testng.Assert;

import java.util.concurrent.TimeUnit;


public class LoginStepDefenition {

    public  static WebDriver driver;


    @Given("^User is on the Login Page$")
    public void user_is_on_the_Login_Page() {
        System.setProperty("webdriver.chrome.driver","/Users/shams/IdeaProjects/FreeCrmBDDFramework/webDriver/chromedriver");
        driver = new ChromeDriver();
        driver.get("https://www.freecrm.com");
    }

    @When("^Title of the page is Free CRM$")
    public void title_of_the_page_is_Free_CRM(){
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("#1 Free CRM software in the cloud for sales and service", title);
    }

    @Then("^User enters \"(.*)\" and \"(.*)\"$")
    public void user_enters_username_and_password(String username, String password) {
        driver.findElement(By.name("username")).sendKeys(username);
        driver.findElement(By.name("password")).sendKeys(password);
    }

    @Then("^User clicks on login button$")
    public void user_clicks_on_login_button(){
        WebElement loginButton = driver.findElement(By.xpath("//input[@type='submit']"));
        JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("arguments[0].click();", loginButton);
    }

    @Then("^User is on Home page$")
    public void user_is_on_Home_page(){
        String title = driver.getTitle();
        driver.manage().timeouts().pageLoadTimeout(5, TimeUnit.SECONDS);
        System.out.println("Homepage title ::"+ title);
        Assert.assertEquals("CRMPRO",title);
    }
    @Then("^User moves to new contacts page$")
    public void user_moves_to_new_contacts_page(){
        driver.switchTo().frame("mainpanel");
        Actions action = new Actions(driver);
        action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Contacts')]"))).build().perform();
        driver.findElement(By.xpath("//a[contains(text(),'New Contact')]")).click();

    }
    /*@Then("^ User enters contact details \"(.*)\" and \"(.*)\" and \"(.*)\"$")
    public void user_enters_contacts_details(String firstname, String lastname, String department){
        driver.findElement(By.id("first_name")).sendKeys(firstname);
        driver.findElement(By.id("surname")).sendKeys(lastname);
        driver.findElement(By.id("department")).sendKeys(department);
        driver.findElement(By.xpath("//input[@type = 'submit' and @value = 'Save']")).click();
    }*/
    @Then("^User enters contact details \"([^\"]*)\" and \"([^\"]*)\" and \"([^\"]*)\"$")
    public void user_enters_contact_details_and_and(String firstname, String lastname, String department){
        driver.findElement(By.id("first_name")).sendKeys(firstname);
        driver.findElement(By.id("surname")).sendKeys(lastname);
        driver.findElement(By.id("department")).sendKeys(department);
        driver.findElement(By.xpath("//input[@type = 'submit' and @value = 'Save']")).click();

    }

    @Then("^Browser gets closed$")
    public void browser_gets_closed(){
        driver.quit();
    }

}
