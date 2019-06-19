# My Passwords

Creator: Tracy Ho, Michael Romero, Seann Branchfield, Marcus Killebrew, and Dallas Bille.

## Purpose
The Goal of "My Passwords" is to simply consolidate all the passwords that a user has, in one place. So if a user forgets one, or needs to access the passwords, they can log on to "My Passwords" and get the information. Because "My Passwords" holds users password detail, we have implemented YubiKey authentication for added security.

This idea was born from the frustration of having to keep a physical list of all passwords, or having to memorize way too many. Instead, you can download the application, set up your YubiKey, and upload passwords yourself, knowing access to "My Passwords" application is secure with YubiKey.

## Implementation

1. Clone Repo
2. cd dev_hackathon10

### `npm install`

### `npm start`

## Design Statement

Our Application serves users who are tired of having to memorize different usernames and passwords for a plethora of sites. It consolidates these details into one platform, and gives users secure access to this information through YubiKey.

## MVP

* A user will be able to register and log in with their YubiKey.
* A user will be able to create login details (consisting of Company, Website URL, Username, and Password attributes).
* A user will be able to view a list of details for sites they enter.
* A user can edit these details at will.
* A user can delete these details.

## Technologies Used

* React
* YubiKey Authentication
* Spring Java Framework
