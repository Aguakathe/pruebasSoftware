import static com.kms.katalon.core.checkpoint.CheckpointFactory.findCheckpoint
import static com.kms.katalon.core.testcase.TestCaseFactory.findTestCase
import static com.kms.katalon.core.testdata.TestDataFactory.findTestData
import static com.kms.katalon.core.testobject.ObjectRepository.findTestObject
import com.kms.katalon.core.checkpoint.Checkpoint as Checkpoint
import com.kms.katalon.core.checkpoint.CheckpointFactory as CheckpointFactory
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as MobileBuiltInKeywords
import com.kms.katalon.core.model.FailureHandling as FailureHandling
import com.kms.katalon.core.testcase.TestCase as TestCase
import com.kms.katalon.core.testcase.TestCaseFactory as TestCaseFactory
import com.kms.katalon.core.testdata.TestData as TestData
import com.kms.katalon.core.testdata.TestDataFactory as TestDataFactory
import com.kms.katalon.core.testobject.ObjectRepository as ObjectRepository
import com.kms.katalon.core.testobject.TestObject as TestObject
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WSBuiltInKeywords
import com.kms.katalon.core.webui.driver.DriverFactory as DriverFactory
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUiBuiltInKeywords
import internal.GlobalVariable as GlobalVariable
import com.kms.katalon.core.webui.keyword.WebUiBuiltInKeywords as WebUI
import com.kms.katalon.core.mobile.keyword.MobileBuiltInKeywords as Mobile
import com.kms.katalon.core.webservice.keyword.WSBuiltInKeywords as WS
import com.kms.katalon.core.testobject.SelectorMethod

import com.thoughtworks.selenium.Selenium
import org.openqa.selenium.firefox.FirefoxDriver
import org.openqa.selenium.WebDriver
import com.thoughtworks.selenium.webdriven.WebDriverBackedSelenium
import static org.junit.Assert.*
import java.util.regex.Pattern
import static org.apache.commons.lang3.StringUtils.join
import org.testng.asserts.SoftAssert
import com.kms.katalon.core.testdata.CSVData
import org.openqa.selenium.Keys as Keys

SoftAssert softAssertion = new SoftAssert();
WebUI.openBrowser('https://www.google.com/')
def driver = DriverFactory.getWebDriver()
String baseUrl = "https://www.google.com/"
selenium = new WebDriverBackedSelenium(driver, baseUrl)
selenium.open("https://www.ginprosacol.com.co/preliminar/mockup/team.html")
selenium.click("id=nombre")
selenium.type("id=nombre", "Juan")
selenium.click("id=apellido")
selenium.type("id=apellido", "Rodriguez")
selenium.click("id=celular")
selenium.type("id=celular", "300987758")
selenium.click("id=correo")
selenium.type("id=correo", ("juan.rodriguez@example.edu.co").toString())
selenium.click("id=ciudad")
selenium.type("id=ciudad", ("Medellín").toString())
selenium.click("xpath=//div[@id='formulario-trabajo']/form/div[2]/div[3]/select")
selenium.select("xpath=//div[@id='formulario-trabajo']/form/div[2]/div[3]/select", "label=Profesional")
selenium.click("id=profesion")
selenium.type("id=profesion", ("Ingeniero Industrial").toString())
selenium.click("xpath=//div[@id='formulario-trabajo']/form/div[3]/div[2]/select")
selenium.select("xpath=//div[@id='formulario-trabajo']/form/div[3]/div[2]/select", "label=Director de Interventoría")
selenium.click("xpath=//input[@type='file']")
selenium.type("xpath=//input[@type='file']", ("C:\\fakepath\\TORRES CONDE STEFFANNY KATHERINE_Java_Programming__English_Award_Of_Completion_on_the_7th_of_November__2025_compressed (1).pdf").toString())
selenium.click("xpath=//input[@type='checkbox']")
selenium.click("xpath=//button[@type='submit']")
assertEquals("Error de red al enviar el formulario.", selenium.getAlert());
