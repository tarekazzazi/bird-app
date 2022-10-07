const badSecret = `
----------------------------

*** WARNING *** 
Your application is not very secure.
You need to set SERVER_SESSION_SECRET to a unique key
Please follow the README and add a .env file

If this warning is showing on Heroku,
add or change your SERVER_SESSION_SECRET environment variable!

----------------------------`;

module.exports = {
  badSecret,
};
