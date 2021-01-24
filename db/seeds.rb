# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Album.destroy_all
Track.destroy_all

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

gd = User.create!(
    artist_name: "The Grateful Dead",
    username: "gratefuldead",
    password: "misterhiro",
    email: "jer@gd.com",
    about: "Phish is an American rock band that formed in Burlington, Vermont, in 1983. The band is known for musical improvisation, extended jams, blending of genres, and a dedicated fan base. The band consists of guitarist Trey Anastasio, bassist Mike Gordon, drummer Jon Fishman, and keyboardist Page McConnell, all of whom perform vocals, with Anastasio being the primary lead vocalist.",
    location: "San Francisco, CA",
    personal_url: "www.dead.net"
)

gd.banner.attach(io: File.open("app/assets/images/artists/gd/banner.jpeg"), filename: "gdbanner.jpeg")
gd.thumbnail.attach(io: File.open("app/assets/images/artists/gd/thumbnail.jpeg"), filename: "gdthumbnail.jpeg")


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


jp2000 = Album.create!(
    title: '2000.06.14 - Fukuoka, Japan',
    artist_id: phish.id,
    year: 2000,
    description: "trippy sounds",
    credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
)

jp2000.photo.attach(io: File.open("app/assets/images/albums/jp2000.jpeg"), filename: "bd13.jpeg")


co97 = Album.create!(
    title: '1997.11.17 - Denver, CO',
    artist_id: phish.id,
    year: 1997,
    description: "epic tweezer and DWD",
    credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
)

co97.photo.attach(io: File.open("app/assets/images/albums/co97.jpeg"), filename: "bd13.jpeg")


mann15 = Album.create!(
    title: '2015.08.12 - Philadelphia, PA',
    artist_id: phish.id,
    year: 2015,
    description: "Second row show",
    credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
)

mann15.photo.attach(io: File.open("app/assets/images/albums/mann15.jpeg"), filename: "bd13.jpeg")

msg81 = Album.create!(
    title: '1981.03.09 - New York, NY',
    artist_id: gd.id,
    year: 1981,
    description: "Legendary AUD",
    credits: "Guitar: Jer"
)

msg81.photo.attach(io: File.open("app/assets/images/albums/msg81.jpeg"), filename: "msg81.jpeg")

p_bd_1 = Track.create!(
    track_name: 'Dogs Stole Things',
    track_num: '1',
    album_id: bd13.id
)
p_bd_2 = Track.create!(
    track_name: 'Rift',
    track_num: '2',
    album_id: bd13.id
)
p_bd_3 = Track.create!(
    track_name: 'Ha Ha Ha',
    track_num: '3',
    album_id: bd13.id
)
p_bd_4 = Track.create!(
    track_name: 'Camel Walk',
    track_num: '4',
    album_id: bd13.id
)
p_bd_5 = Track.create!(
    track_name: 'Crazy Sometimes',
    track_num: '5',
    album_id: bd13.id
)
p_bd_6 = Track.create!(
    track_name: 'Saw it Again',
    track_num: '6',
    album_id: bd13.id
)
p_bd_7 = Track.create!(
    track_name: 'Sanity',
    track_num: '7',
    album_id: bd13.id
)
p_bd_8 = Track.create!(
    track_name: 'Bouncing Around the Room',
    track_num: '8',
    album_id: bd13.id
)
p_bd_9 = Track.create!(
    track_name: "Most Events Aren't Planned",
    track_num: '9',
    album_id: bd13.id
)
p_bd_10 = Track.create!(
    track_name: 'Bug',
    track_num: '10',
    album_id: bd13.id
)
p_bd_11 = Track.create!(
    track_name: 'I Been Around',
    track_num: '11',
    album_id: bd13.id
)
p_bd_12 = Track.create!(
    track_name: 'Izabella',
    track_num: '12',
    album_id: bd13.id
)
p_bd_13 = Track.create!(
    track_name: 'Simple',
    track_num: '13',
    album_id: bd13.id
)
p_bd_14 = Track.create!(
    track_name: 'Rise/Come Together',
    track_num: '14',
    album_id: bd13.id
)
p_bd_15 = Track.create!(
    track_name: 'Starman',
    track_num: '15',
    album_id: bd13.id
)
p_bd_16 = Track.create!(
    track_name: 'You Enjoy Myself',
    track_num: '16',
    album_id: bd13.id
)
p_bd_17 = Track.create!(
    track_name: 'Loving Cup',
    track_num: '2',
    album_id: bd13.id
)
p_bd_18 = Track.create!(
    track_name: 'On the Road Again',
    track_num: '18',
    album_id: bd13.id
)
p_bd_19 = Track.create!(
    track_name: 'Lawn Boy Reprise',
    track_num: '19',
    album_id: bd13.id
)
p_bd_20 = Track.create!(
    track_name: 'Tweezer Reprise',
    track_num: '20',
    album_id: bd13.id
)