![image](https://user-images.githubusercontent.com/92361680/197824476-464d420d-26a6-4df5-aef3-99214fac1388.png)


# Ephelog - Make a Ton 5.0
##Temporary login provider
Usernames and passwords are ubiquitous today on possibly any website. In this online era, passwords are considered a mechanism of security. But often, one might come across a situation where he/she needs to share their login credentials to a friend, colleague or acquaintance. Most common practice is to change this password later. Not only that, it is possible that most people tend to keep similar passwords in different handles, putting them all at risk. 

Ephelog or Ephemeral login is a browser extension that will provide a temporary login to an intended user for a restricted time frame. This way, there will no longer be the need to share the login credentials to anyone nor will there be a need to change it later. On using Ephelog the user is provided with a unique token that can be shared with the intended user. When he makes a call using a temporary login token, the call includes a session token, which is returned along with those temporary credentials.This is used to validate the temporary login.
These temporary credentials expire after a specified interval. After they expire, any calls made with those credentials will fail, so one must generate a new set of temporary credentials. Temporary credentials cannot be extended or refreshed beyond the original specified interval. A history of the login and the logout details is also recorded. 

## Team Members
[1.Asher Mathews Shaji](https://github.com/Asher-MS)   
[2.Muhammed](https://github.com/muhammed-mizaj)   
[3.Almira Asif Khan](https://github.com/AlmiraKhan)   
[4.Fathima Nooha](https://github.com/nooha01)   

## Link to Project
[Embed the live link of project](live_link)

## How it Works ?
* For this service, both the users, the one who needs to share his login credentials and the one who requires it, need to login to the platform. They will be provided with a unique username.
* After logging into the required platform, the user can select Ephelog service from the extensions tab and copy the site link, user name, password and the Ephelog username of the intended user. 
* These login credentials (real username and password) are not stored in the server, temporary tokens are generated dynamically and provided to the intended user. Tokens are basically masked session ids.
* Using the token, the intended user can login and use the site for the allowed time frame. He can enter the token on the extension bar and the browser tab will refresh itself to let the user use the platform. Until the temporary login credentials expire, he can surf the site. 
* When the timer runs out, the site refreshes again and the session will expire automatically. 
* The temporary login credentials have a limited lifetime, so one does not have to rotate them or explicitly revoke them when they're no longer needed. After they expire, they cannot be reused. The user can specify how long the credentials are valid, up to a maximum limit.

Embed video of project demo

## Technologies used
* Frontend - React
* Backend - Django

## How to configure
Instructions for setting up project

## How to Run
Instructions for running

## Other Links
https://www.figma.com/file/OFDYVfCNupW3Y62JTeH5Cm/Ephelog?node-id=0%3A1
