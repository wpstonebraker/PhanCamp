# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Album.destroy_all

u1 = User.create!(
    artist_name: "Mister Hiro",
    username: "Guest",
    password: "misterhiro",
    email: "hiro@bestdog.com"
)

phish = User.create!(
    artist_name: "Phish",
    username: "Phish",
    password: "misterhiro",
    email: "phish@phish.com",
    about: "Phish is an American rock band that formed in Burlington, Vermont, in 1983. The band is known for musical improvisation, extended jams, blending of genres, and a dedicated fan base. The band consists of guitarist Trey Anastasio, bassist Mike Gordon, drummer Jon Fishman, and keyboardist Page McConnell, all of whom perform vocals, with Anastasio being the primary lead vocalist.",
    location: "Burlington, VT",
    personal_url: "www.phish.com"
)

phish.banner.attach(io: File.open("app/assets/images/artists/phish/banner.png"), filename: "phishbanner.png")
phish.thumbnail.attach(io: File.open("app/assets/images/artists/phish/thumbnail.png"), filename: "phishthumbnail.png")

# gd = User.create!(
#     artist_name: "The Grateful Dead",
#     username: "gratefuldead",
#     password: "misterhiro",
#     email: "jer@gd.com",
#     about: "Phish is an American rock band that formed in Burlington, Vermont, in 1983. The band is known for musical improvisation, extended jams, blending of genres, and a dedicated fan base. The band consists of guitarist Trey Anastasio, bassist Mike Gordon, drummer Jon Fishman, and keyboardist Page McConnell, all of whom perform vocals, with Anastasio being the primary lead vocalist.",
#     location: "San Francisco, CA",
#     personal_url: "www.dead.net"
# )

# goose = User.create!(
#     artist_name: "Goose",
#     username: "Goose",
#     password: "misterhiro",
#     email: "rick@goosetheband.com",
#     about: "The next jam band",
#     location: "CT",
#     personal_url: "www.goosetheband.com"
# )

# ween = User.create!(
#     artist_name: "Ween",
#     username: "Ween",
#     password: "misterhiro",
#     email: "dean@ween.com",
#     about: "A rock band",
#     location: "PA",
#     personal_url: "www.ween.com"
# )

bd13 = Album.create!(
    title: '2017.08.06 - Madison Square Garden',
    artist_id: phish.id,
    year: 2017,
    description: "The final night of Phish's legendary 13 concerts in 17 nights at the world's greatest arena.",
    credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
)

bd13.photo.attach(io: File.open("app/assets/images/albums/bd13.jpeg"), filename: "bd13.jpeg")


# jp2000 = Album.create!(
#     title: '2000.06.14 - Fukuoka, Japan',
#     artist_id: phish.id,
#     year: 2000,
#     description: "trippy sounds",
#     credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
# )

# co97 = Album.create!(
#     title: '1997.11.17 - Denver, CO',
#     artist_id: phish.id,
#     year: 1997,
#     description: "epic tweezer and DWD",
#     credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
# )

# mann15 = Album.create!(
#     title: '2015.08.12 - Philadelphia, PA',
#     artist_id: phish.id,
#     year: 2015,
#     description: "Second row show",
#     credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
# )