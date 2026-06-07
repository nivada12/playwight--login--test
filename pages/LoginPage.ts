// pages/LoginPage.ts
import { Page } from '@playwright/test';
import { LoginPageLocators } from '../locators/LoginLocators';

export async function navigateToLoginPage(page: Page) {
  await page.goto('https://www.saucedemo.com/');
}

export async function login(page: Page, username: string, password: string) {
  await page.fill(LoginPageLocators.username, username);
  await page.fill(LoginPageLocators.password, password);
  await page.click(LoginPageLocators.loginButton);
}