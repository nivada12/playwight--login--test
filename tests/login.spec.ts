import { test, expect } from '@playwright/test';
import { navigateToLoginPage, login } from '../pages/LoginPage';
import type { LoginData } from '../fixtures/loginData.types';
import loginData from '../fixtures/loginData.json';

test('Login successful', async ({ page }) => {

    await navigateToLoginPage(page);

    const data: LoginData = loginData;

    await login(
        page,
        loginData.validUser.username,
        loginData.validUser.password
    );

    await expect(page).toHaveURL('https://www.saucedemo.com/inventory.html');
});