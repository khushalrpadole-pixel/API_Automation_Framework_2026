// @ts-check
import { test, expect } from '@playwright/test';
import { LoginPage } from './pageObjects/loginPage';

test('user can login', async ({ page }) => {
  const login = new LoginPage(page);

  // Update the URL to your application's login page
  await login.goto('https://example.com/login');

  // Replace with valid credentials for your app or use fixtures
  await login.login('myUser', 'myPass');

  // Adjust this assertion to match your app's post-login behavior
  await expect(page).toHaveURL('https://example.com/dashboard');
});
