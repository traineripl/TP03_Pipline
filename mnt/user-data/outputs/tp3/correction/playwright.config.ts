import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  fullyParallel: true,
  forbidOnly: !!process.env.CI,                                  // échoue si un test.only est oublié
  retries: process.env.CI ? 1 : 0,
  reporter: process.env.CI ? [['html', { open: 'never' }]] : 'list',  // rapport HTML en CI
  use: { baseURL: 'http://localhost:3003' },
  webServer: {
    command: 'node server.js',
    url: 'http://localhost:3003',
    reuseExistingServer: !process.env.CI,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
  ],
});
