package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"/Users/shams/IdeaProjects/FreeCrmBDDFramework/src/main/java/Features/login.feature"},
        glue = {"stepDefenitions"},
        format = {"pretty","html:test-output"}

)


public class ContactsRunner {
}
