package stepDefenition;

import cucumber.api.DataTable;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.interactions.Actions;

import java.util.List;

public class HooksStepDefenition {

    public static WebDriver driver;

    @Before
    public void setUp(){
        System.setProperty("webdriver.chrome.driver","/Users/shams/IdeaProjects/FreeCrmBDDFramework/webDriver/chromedriver");
        driver = new ChromeDriver();
        driver.get("https://www.freecrm.com");
    }
    @After
    public void browser_gets_closed(){
        driver.quit();
    }

    @Given("^user is on newdeal page$")
    public void user_is_on_deal_page() throws InterruptedException {
        driver.findElement(By.name("username")).sendKeys("shamsmuhammad");
        driver.findElement(By.name("password")).sendKeys("dhaka123");
        WebElement loginButton = driver.findElement(By.xpath("//input[@type='submit']"));
        JavascriptExecutor js = (JavascriptExecutor)driver;
        js.executeScript("arguments[0].click();", loginButton);
        driver.switchTo().frame("mainpanel");
        Actions action = new Actions(driver);
        action.moveToElement(driver.findElement(By.xpath("//a[contains(text(),'Deals')]"))).build().perform();
        Thread.sleep(3000);
        driver.findElement(By.xpath("//a[contains(text(),'New Deal')]")).click();
    }

    @When("^user fills the deal form$")
    public void user_fills_the_deal_form(DataTable dealData){
        List<List<String>> dealValue = dealData.raw();
        driver.findElement(By.id("title")).sendKeys(dealValue.get(0).get(0));
        driver.findElement(By.id("amount")).sendKeys(dealValue.get(0).get(1));
        driver.findElement(By.id("probability")).sendKeys(dealValue.get(0).get(2));
        driver.findElement(By.id("commission")).sendKeys(dealValue.get(0).get(3));
    }

    @Then("^deal is created$")
    public void deal_is_created(){
        System.out.println("New Deal is Created");
    }
}
