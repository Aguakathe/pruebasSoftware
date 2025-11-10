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
selenium.click("link=+57 (601) 6225233")
selenium.click("xpath=//i")
selenium.open("https://www.linkedin.com/company/ginprosa-colombia/")
selenium.open("https://www.ginprosacol.com.co/preliminar/mockup/contact.html")
selenium.click("link=Llámanos")
selenium.click("link=Escríbenos")
selenium.open("https://mail.google.com/mail/u/0/?fs=1&to=direccioncomercial@ginprosacol.com.co&tf=cm")
selenium.open("https://www.ginprosacol.com.co/preliminar/mockup/contact.html")
selenium.click("link=Ubícanos")
selenium.selectWindow("win_ser_1")
selenium.open("https://www.google.com/maps/place/Ginprocol/@4.689946795285031,-74.06262762656254,17z")
selenium.open("https://www.google.com/maps/place//@4.6899468,-74.0626276,17z?entry=ttu&g_ep=EgoyMDI1MTEwNC4xIKXMDSoASAFQAw%3D%3D")
selenium.close()
selenium.selectWindow("win_ser_local")
selenium.open("https://www.ginprosacol.com.co/preliminar/mockup/contact.html")
selenium.click("link=+57 (601) 6225233 Ext. 116")
selenium.click("xpath=//div[@id='formulario']/div/div/div[2]/div/div[2]/a")
