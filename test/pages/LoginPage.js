class LoginPage{
    get username() { return $('#username') }
    get password() { return $('#password') }
    get loginButton() { return $('button[type="submit"]') }
    get flash() { return $('#flash') }

    async login(username, password){
        await this.username.setValue(username);
        await this.password.setValue(password);
        await this.loginButton.click();
    }
    async checkMessage(message){

        await this.flash.waitForExist({ timeout: 5000, timeoutMsg: 'Flash message not found!' });
        // await expect(this.flash).toBeExisting();
        await expect(this.flash).toHaveText(expect.stringContaining(message));
    }
}

module.exports = new LoginPage();