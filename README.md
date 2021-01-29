![Our Logo](https://github.com/wpstonebraker/PhanCamp/blob/main/app/assets/images/logo.png "phancamp logo")

phancamp, a bampcamp clone, is a music service that lets artists upload their music, and allows fans to discover new music, stream music, and download music if they choose.

## Current Features

### A dynamic splash page

Splash page has featured bands on landing, a dynamic list of "selling now" content that pulls from our database, and a "phancamp daily" section that shows the most recent uploads.

### User authentication

Allows for account creation as an artist, with the ability to sign in and sign out. A link for to login as a pre seeded demo user is available as well.

### Artist show page

Displays a list of an artist's albums as "tiles" that feature their cover art, as well as the artist's banner photo, thumbnail, and a brief description of the band.

### Album show page

On click, the above album tile sends you to the albums page, where you view the specific albums tracks and album art.

### Album creation

A logged in artist can create an album, and upload an image for their album. Album creation page dynamically renders title, price and album art as it is inputted in a preview area. Upon creation, users are redirected to the splash page where they will eventually see their album under phancamp daily.

### Polymorphic genres

Genres are associated with users, albums, and tracks.

## Future Features

### Song Player

Plays track(s) that have been uploaded to the website or are pulled through an API.

### Search

Searches names of artists, albums, and tracks; displays relevant results in a preview as you type. When submitted, renders a list of results with corresponding thumbnail that, when click, links to appropriate content.

### Upload/download

Track listings have link to download said track. Users can upload tracks their albums as well.
