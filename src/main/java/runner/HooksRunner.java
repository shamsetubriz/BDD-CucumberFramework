package runner;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

@RunWith(Cucumber.class)
@CucumberOptions(
        features = {"/Users/shams/IdeaProjects/FreeCrmBDDFramework/src/main/java/Features/hooks.feature"},
        glue = {"stepDefenition"},
        format = {"pretty","html:test-output","json:json_output/cucumber.json","junit:junit_xml/cucumber.xml"},
        dryRun = true,
        monochrome = true,
        strict = true

)
public class HooksRunner {
}
