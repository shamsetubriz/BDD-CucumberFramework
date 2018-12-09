package stepDefenition;

import cucumber.api.DataTable;
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

import java.util.List;
import java.util.Map;
import java.util.concurrent.TimeUnit;

//data table with maps for parameterization of test cases
public class DealMapStepDefenition {

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

    @Then("^User enters username and password$")
    public void user_enters_username_and_password(DataTable credentials) {
        for(Map<String,String> data : credentials.asMaps(String.class,String.class)){
        driver.findElement(By.name("username")).sendKeys(data.get("username"));
        driver.findElement(By.name("password")).sendKeys(data.get("password"));
        }
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

    @Then("^User moves to new deals page$")
    public void user_moves_to_new_deals_page() throws InterruptedException {
        driver.switchTo().frame("mainpanel");
        Actions action = new Actions(driver);
        action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
        Thread.sleep(1000);
        driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
    }

    @Then("^User enters deals details$")
    public void user_enters_deals_details(DataTable dealData) throws InterruptedException {
        for(Map<String,String> data : dealData.asMaps(String.class,String.class)){
        driver.findElement(By.id("title")).sendKeys(data.get("title"));
        driver.findElement(By.id("amount")).sendKeys(data.get("amount"));
        driver.findElement(By.id("probability")).sendKeys(data.get("probability"));
        driver.findElement(By.id("commission")).sendKeys(data.get("commission"));
        //saving the deal
        driver.findElement(By.xpath("//*[@id=\'prospectForm\']/table/tbody/tr[1]/td/input[1]"));
        //move to new deal
        Actions action = new Actions(driver);
        action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
        Thread.sleep(1000);
        driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
        }
    }

    @Then("^Browser gets closed$")
    public void browser_gets_closed(){
        driver.quit();
    }
}
