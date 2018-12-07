package stepDefenitions;

import cucumber.api.PendingException;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.testng.Assert;


public class LoginStepDefenition {

    public  static WebDriver driver;


    @Given("^User is on the Login Page$")
    public void user_is_on_Login_Page(){
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

    @Then("^User enters username and passwor$")
    public void user_enters_username_and_passwor(){
        driver.findElement(By.name("username")).sendKeys("shamsmuhammad");
        driver.findElement(By.name("password")).sendKeys("dhaka123");
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
        System.out.println("Homepage title ::"+ title);
        Assert.assertEquals("CRMPRO",title);
    }


}
