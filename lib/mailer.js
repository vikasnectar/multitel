const nodemailer = require('nodemailer');
const { google } = require('googleapis');

var CLIENT_ID = process.env.SMTP_CLIENT_ID;
var CLIENT_SECRET = process.env.SMTP_CLIENT_SECRET;
var REDIRECT_URL = process.env.SMTP_REDIRECT_URL;
var REFRESH_TOKEN = process.env.SMTP_REFRESH_TOKEN;
var oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URL);
oAuth2Client.setCredentials({ 'refresh_token': REFRESH_TOKEN })
let mailer = {}
mailer.sendEmail = async (mailOptions) => {

    new Promise((resolve, reject) => {
        try {
            var accessTocken = oAuth2Client.getAccessToken();
            let transporter = nodemailer.createTransport({
                service: process.env.SMTP_SERVICE,
                auth: {
                    type: process.env.SMTP_TYPE,
                    user: process.env.SMTP_USER,
                    clientId: CLIENT_ID,
                    clientSecret: CLIENT_SECRET,
                    refreshToken: REFRESH_TOKEN,
                    accessTocken: accessTocken
                }
            })


            var result = transporter.sendMail(mailOptions);
            return resolve(true);
        } catch (error) {
            return reject(false)

        }
    })

}

module.exports = mailer