const LoginPage = require('../pages/LoginPage');

describe('Heroku Login Page', () => {
    it('should login with valid credentials', async () => {
        // Navigate to the login page
        await browser.url('https://the-internet.herokuapp.com/login');
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await LoginPage.checkMessage('You logged into a secure area!');

    });
});

// console.log(LoginPage)
