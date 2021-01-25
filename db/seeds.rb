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

bd13 = Album.create!(
    title: '2017.08.06 - Madison Square Garden',
    artist_id: phish.id,
    year: 2017,
    description: "The final night of Phish's legendary 13 concerts in 17 nights at the world's greatest arena.",
    credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
)

bd13.photo.attach(io: File.open("app/assets/images/albums/bd13.jpeg"), filename: "bd13.jpeg")

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
    track_num: '17',
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


jp2000 = Album.create!(
    title: '2000.06.14 - Fukuoka, Japan',
    artist_id: phish.id,
    year: 2000,
    description: "trippy sounds",
    credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
)

jp2000.photo.attach(io: File.open("app/assets/images/albums/jp2000.jpeg"), filename: "bd13.jpeg")

p_jp_1 = Track.create!(
    track_name: 'Carini',
    track_num: '1',
    album_id: jp2000.id
)
p_jp_2 = Track.create!(
    track_name: 'The Curtain',
    track_num: '2',
    album_id: jp2000.id
)
p_jp_3 = Track.create!(
    track_name: 'Cities',
    track_num: '3',
    album_id: jp2000.id
)
p_jp_4 = Track.create!(
    track_name: 'Gumbo',
    track_num: '4',
    album_id: jp2000.id
)
p_jp_5 = Track.create!(
    track_name: 'Jam',
    track_num: '5',
    album_id: jp2000.id
)
p_jp_6 = Track.create!(
    track_name: 'Llama',
    track_num: '6',
    album_id: jp2000.id
)
p_jp_7 = Track.create!(
    track_name: 'Fee',
    track_num: '7',
    album_id: jp2000.id
)
p_jp_8 = Track.create!(
    track_name: 'Heavy Things',
    track_num: '8',
    album_id: jp2000.id
)
p_jp_9 = Track.create!(
    track_name: 'Split Open and Melt',
    track_num: '9',
    album_id: jp2000.id
)
p_jp_10 = Track.create!(
    track_name: 'Back on the Train',
    track_num: '10',
    album_id: jp2000.id
)
p_jp_11 = Track.create!(
    track_name: 'Twist',
    track_num: '11',
    album_id: jp2000.id
)
p_jp_12 = Track.create!(
    track_name: 'Jam',
    track_num: '12',
    album_id: jp2000.id
)
p_jp_13 = Track.create!(
    track_name: 'Walk Away',
    track_num: '13',
    album_id: jp2000.id
)
p_jp_14 = Track.create!(
    track_name: 'Jam',
    track_num: '14',
    album_id: jp2000.id
)
p_jp_15 = Track.create!(
    track_name: '2001',
    track_num: '15',
    album_id: jp2000.id
)
p_jp_16 = Track.create!(
    track_name: 'Sleep',
    track_num: '16',
    album_id: jp2000.id
)
p_jp_17 = Track.create!(
    track_name: 'The Squirming Coil',
    track_num: '17',
    album_id: jp2000.id
)

co97 = Album.create!(
    title: '1997.11.17 - Denver, CO',
    artist_id: phish.id,
    year: 1997,
    description: "epic tweezer and DWD",
    credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
)

co97.photo.attach(io: File.open("app/assets/images/albums/co97.jpeg"), filename: "bd13.jpeg")

P_CO_SETLIST = [
    "Tweezer",
    "Reba",
    "Train Song",
    "Ghost",
    "Fire",
    "Down with Disease",
    "Olivia's Pool",
    "Johnny B. Goode",
    "Jesus Just Left Chicago",
    "When the Circus Comes",
    "You Enjoy Myself",
    "Character Zero"
]

P_CO_SETLIST.each_with_index do |track, i|
    Track.create!(
        track_name: track,
        track_num: (i + 1),
        album_id: co97.id
    )
end

mann15 = Album.create!(
    title: '2015.08.12 - Philadelphia, PA',
    artist_id: phish.id,
    year: 2015,
    description: "Second row show",
    credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
)

mann15.photo.attach(io: File.open("app/assets/images/albums/mann15.jpeg"), filename: "bd13.jpeg")

P_MANN15_SETLIST = [
    "AC/DC Bag",
    "Free",
    "Ya Mar",
    "Sample in a Jar",
    "Cities",
    "Stash",
    "Birds of a Feather",
    "The Line",
    "It's Ice",
    "Character Zero",
    "Bathtub Gin",
    "No Men in No Man's Land",
    "Twist",
    "Scents and Subtle Sounds",
    "Harry Hood",
    "Loving Cup"
]

P_MANN15_SETLIST.each_with_index do |track, i|
    Track.create!(
        track_name: track,
        track_num: (i + 1),
        album_id: mann15.id
    )
end

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

msg81 = Album.create!(
    title: '1981.03.09 - New York, NY',
    artist_id: gd.id,
    year: 1981,
    description: "Legendary AUD",
    credits: "Guitar: Jer"
)

msg81.photo.attach(io: File.open("app/assets/images/albums/msg81.jpeg"), filename: "msg81.jpeg")

GD_MSG81_SETLIST = [
    "Feel like a Stranger",
    "Althea",
    "C.C. Rider",
    "Ramble On Rose",
    "El Paso",
    "Deep Elementary Blues",
    "Beat it on Down the Line",
    "Bird Song",
    "New Minglewood Blues",
    "China Cat Sunflower",
    "I Know You Rider",
    "Samson and Delilah",
    "Ship of Fools",
    "Estimated Prophet",
    "Uncle John's Band",
    "Drums",
    "Space",
    "The Other One",
    "Stella Blue",
    "Good Lovin'",
    "U.S. Blues"
]

GD_MSG81_SETLIST.each_with_index do |track, i|
    Track.create!(
        track_name: track,
        track_num: (i + 1),
        album_id: msg81.id
    )
end

# goose = User.create!(
#     artist_name: "Goose",
#     username: "Goose",
#     password: "misterhiro",
#     email: "rick@goosetheband.com",
#     about: "The next jam band",
#     location: "CT",
#     personal_url: "www.goosetheband.com"
# )

# md2020 = Album.create!(
#     title: '2020.10.19 - Frederick, MD',
#     artist_id: goose.id,
#     year: 2020,
#     description: "IW@TS",
#     credits: "Rick on the Guitar"
# )

# GOOSE_MD2020_SETLIST = [
#     "Drive",
#     "Doc Brown",
#     "So Ready",
#     "AUATC",
#     "Jive1",
#     "Jive Lee",
#     "Indian River/Flee Reprise",
#     "Fish in the Sea",
#     "Drive Reprise",
#     "Rosewood Heart",
#     "Travelers",
#     "Turned Clouds",
#     "Hot Tea"
# ]

# GOOSE_MD2020_SETLIST.each_with_index do |track, i|
#     Track.create!(
#         track_name: track,
#         track_num: (i + 1),
#         album_id: md2020.id
#     )
# end

# ween = User.create!(
#     artist_name: "Ween",
#     username: "Ween",
#     password: "misterhiro",
#     email: "dean@ween.com",
#     about: "A rock band",
#     location: "PA",
#     personal_url: "www.ween.com"
# )

# ween_20170604 = Album.create!(
#     title: '2017.06.04 - Baltimore, MD',
#     artist_id: ween.id,
#     year: 2017,
#     description: "IW@TS",
#     credits: "Deaner"
# )

# WEEN_20170604_SETLIST = [
#     "She Wanted to Leave",
#     "Buckingham Green",
#     "My Own Bare Hands",
#     "Let's Dance",
#     "Your Party",
#     "Voodoo Lady",
#     "Freedom of '76",
#     "Gabrielle",
#     "Boys Club",
#     "The Grobe",
#     "Japanese Cowboy",
#     "Puerto Rican Power",
#     "Frank",
#     "The Mollusk",
#     "Bananas and Blow",
#     "Tried & True",
#     "Joppa Road",
#     "Ocean Man",
#     "Object",
#     "Zoloft",
#     "Learnin' to Love",
#     "Transdermal Celebration",
#     "Mutilated Lips",
#     "I’ll Be Your Jonny on the Spot",
#     "Buenas Tardes Amigo",
# ]

# WEEN_20170604_SETLIST.each_with_index do |track, i|
#     Track.create!(
#         track_name: track,
#         track_num: (i + 1),
#         album_id: ween_20170604.id
#     )
# end