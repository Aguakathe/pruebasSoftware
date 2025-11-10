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
selenium.open("https://www.ginprosacol.com.co/preliminar/mockup/contact.html")
selenium.selectFrame("index=0")
selenium.click("xpath=//div[@id='mapDiv']/div/div[3]/div[3]/div/div/div/div/div[2]/div/a/div[2]")
selenium.selectWindow("win_ser_1")
selenium.open("https://www.google.com/maps/dir//Ginprocol+Cra.+49+%23102A-26+Bogot%C3%A1/@4.6899468,-74.0600527,17z/data=!4m5!4m4!1m0!1m2!1m1!1s0x8e3f9b5d1d34be4b:0x37d48c5559d9b1de")
selenium.open("https://www.google.com/maps/dir//Ginprocol+Cra.+49+%23102A-26+Bogot%C3%A1/@4.6899468,-74.0600527,17z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8e3f9b5d1d34be4b:0x37d48c5559d9b1de!2m2!1d-74.0600953!2d4.6899527?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D")
selenium.open("https://www.google.com/maps/dir//Ginprocol+Cra.+49+%23102A-26+Bogot%C3%A1/@4.6910703,-74.0632136,15.52z/data=!4m8!4m7!1m0!1m5!1m1!1s0x8e3f9b5d1d34be4b:0x37d48c5559d9b1de!2m2!1d-74.0600953!2d4.6899527?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D")
