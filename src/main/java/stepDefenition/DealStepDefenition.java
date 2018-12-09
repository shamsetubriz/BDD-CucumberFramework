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
import java.util.concurrent.TimeUnit;

public class DealStepDefenition {

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
        List<List<String>> data = credentials.raw();
        driver.findElement(By.name("username")).sendKeys(data.get(0).get(0));
        driver.findElement(By.name("password")).sendKeys(data.get(0).get(1));
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
        Thread.sleep(3000);
        driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
    }

    @Then("^User enters deals details$")
    public void user_enters_deals_details(DataTable dealData) {
        List<List<String>> dealValue = dealData.raw();
        driver.findElement(By.id("title")).sendKeys(dealValue.get(0).get(0));
        driver.findElement(By.id("amount")).sendKeys(dealValue.get(0).get(1));
        driver.findElement(By.id("probability")).sendKeys(dealValue.get(0).get(2));
        driver.findElement(By.id("commission")).sendKeys(dealValue.get(0).get(3));
    }

    @Then("^Browser gets closed$")
    public void browser_gets_closed(){
        driver.quit();
    }

}
