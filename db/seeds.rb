# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'open-uri'

User.destroy_all
Album.destroy_all
Track.destroy_all
Genre.destroy_all
GenreJoin.destroy_all

def get_tracks
    
end

GENRES_TAGS = %w(electronic rock metal alternative hip-hop experimental punk folk pop ambient soundtrack jazz acoustic funk soul classical reggae country blues latin kids)

GENRES_TAGS.each do |genre|
    Genre.create!(
        genre: genre
    )
end

# rock = Genre.create!(
#     genre: "rock"
# )
# jazz = Genre.create!(
#     genre: "jazz"
# )
# jam = Genre.create!(
#     genre: "jam"
# )
# folk = Genre.create!(
#     genre: "folk"
# )



u1 = User.create!(
    artist_name: "DeMouser",
    username: "Guest",
    password: "misterhiro",
    email: "demouser@gmail..com",
    about: "A great and learned user!"
)

u1.banner.attach(io: File.open("app/assets/images/thumb.png"), filename: "guestthumb.png")
u1.thumbnail.attach(io: File.open("app/assets/images/hiro.jpeg"), filename: "hiro.jpeg")


phish = User.create!(
    artist_name: "Phish",
    username: "Phish",
    password: "misterhiro",
    email: "phish@phish.com",
    about: "Phish is an American rock band that formed in Burlington, Vermont, in 1983. The band is known for musical improvisation, extended jams, blending of genres, and a dedicated fan base. The band consists of guitarist Trey Anastasio, bassist Mike Gordon, drummer Jon Fishman, and keyboardist Page McConnell, all of whom perform vocals, with Anastasio being the primary lead vocalist.",
    location: "Burlington, VT",
    personal_url: "www.phish.com"
)

phish.banner.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/phish/ph_banner.png"), filename: "phishbanner.png")
phish.thumbnail.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/phish/ph_thumbnail.png"), filename: "phishthumbnail.png")

# track.song.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/phish/II+02+Simple+-.mp3"), filename: "bdSimple.mp3")
# Track.create!(track_name: "test track", track_num: 4, album_id: a.id).song.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/gd/drZ2/The+Wheel+-%3E.mp3"), filename: "drZ1.mp3")


# PHISH_20100619 = Album.create!(
#     title: '2010-06-19 - SPAC Night 1',
#     artist_id: phish.id,
#     year: 2017,
#     description: "First of two shows at the Saratoga Performing Arts Center",
#     credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman",
#     show_date: "2010-06-19"
# )

# PHISH_20100619.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/phish/ph_2010-06-19.png"), filename: "ph_2010-06-19.png")

# PHISH_20100619_SETLIST = %w(Tweezer\ Reprise Chalk\ Dust\ Torture Funky\ Bitch\ > Runaway\ Jim\ > Ya\ Mar Sample\ in\ a\ Jar Axilla\ > Fluffhead Bathtub\Gin Suzy\ Greenberg Rock\ and\ Roll\ > Free Backwards\ Down\ the\ Number\ Line Halfway\ to\ the\ Moon\ > Prince\ Caspian\ > Joy David\ Bowie Show\ of\ Life The\ Squirming\ Coil Character\ Zero Tweezer\ Reprise)

# PHISH_20100619_SETLIST.each_with_index do |track, i|
#     Track.create!(
#         track_name: track,
#         track_num: (i + 1),
#         album_id: PHISH_20100619.id
#     )
# end

# PHISH_20170806 = Album.create!(
#     title: '2017.08.06 - Madison Square Garden',
#     artist_id: phish.id,
#     year: 2017,
#     description: "The final night of Phish's legendary 13 concerts in 17 nights at the world's greatest arena.",
#     credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman",
#     show_date: "2017-08-06"
# )

# PHISH_20170806.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/phish/ph_20170806.jpeg"), filename: "bd13.jpeg")

# PHISH_20170806_SETLIST = %w(Dogs\ Stole\ Things Rift Ha\ Ha\ Ha Camel\ Walk Crazy\ Sometimes\ > Saw\ it\ Again\ > Sanity\ > Bouncing\ Around\ the\ Room Most\ Events\ Aren't\ Planned Bug I\ Been\ Around Izabella Simple\ > Rise/Come\ Together\ > Starman You\ Enjoy\ Myself Loving\ Cup On\ the\ Road\ Again\ > Lawn\ Boy\ Reprise\ > Tweezer\ Reprise)

# PHISH_20170806_SETLIST.each_with_index do |track, i|
#     Track.create!(
#         track_name: track,
#         track_num: (i + 1),
#         album_id: PHISH_20170806.id
#     )
# end


# PHISH_20000614 = Album.create!(
#     title: '2000.06.14 - Fukuoka, Japan',
#     artist_id: phish.id,
#     year: 2000,
#     description: "trippy sounds",
#     credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman",
#     show_date: "2000-06-14"
# )

# PHISH_20000614.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/phish/ph_2000_06_14.jpeg"), filename: "ph_2000_06_14.jpeg")

# PHISH_20000614_SETLIST = %w(Carini The\ Curtain\ > Cities Gumbo\ -> Llama, Fee, Heavy\ Things Split\ Open\ and\ Melt Back\ on\ the\ Train Twist\ > Jam\ -> Walk\ Away\ -> 2001 Sleep\ The\ Squirming\ Coil)

# PHISH_20000614_SETLIST.each_with_index do |track, i|
#     Track.create!(
#         track_name: track,
#         track_num: (i + 1),
#         album_id: PHISH_20000614.id
#     )
# end


# co97 = Album.create!(
#     title: '1997.11.17 - Denver, CO',
#     artist_id: phish.id,
#     year: 1997,
#     description: "epic tweezer and DWD",
#     credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman",
#     show_date: "1997-11-17"
# )

# co97.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/phish/ph_1997_11_17.jpeg"), filename: "ph_1997_11_17.jpeg")

# P_CO_SETLIST = [
#     "Tweezer",
#     "Reba",
#     "Train Song",
#     "Ghost",
#     "Fire",
#     "Down with Disease",
#     "Olivia's Pool",
#     "Johnny B. Goode",
#     "Jesus Just Left Chicago",
#     "When the Circus Comes",
#     "You Enjoy Myself",
#     "Character Zero"
# ]

# P_CO_SETLIST.each_with_index do |track, i|
#     Track.create!(
#         track_name: track,
#         track_num: (i + 1),
#         album_id: co97.id
#     )
# end

# mann15 = Album.create!(
#     title: '2015.08.12 - Philadelphia, PA',
#     artist_id: phish.id,
#     year: 2015,
#     description: "Second row show",
#     credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman",
#     show_date: "2015-08-12"
# )

# mann15.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/phish/ph_2015_08_12.jpeg"), filename: "ph_2015_08_12.jpeg")

# P_MANN15_SETLIST = [
#     "AC/DC Bag",
#     "Free",
#     "Ya Mar",
#     "Sample in a Jar",
#     "Cities",
#     "Stash",
#     "Birds of a Feather",
#     "The Line",
#     "It's Ice",
#     "Character Zero",
#     "Bathtub Gin",
#     "No Men in No Man's Land",
#     "Twist",
#     "Scents and Subtle Sounds",
#     "Harry Hood",
#     "Loving Cup"
# ]

# P_MANN15_SETLIST.each_with_index do |track, i|
#     Track.create!(
#         track_name: track,
#         track_num: (i + 1),
#         album_id: mann15.id
#     )
# end

# PHISH_20131229 = Album.create!(
#     title: '2013.12.29 - New York, NY',
#     artist_id: phish.id,
#     year: 2013,
#     description: "DWD > Carini",
#     credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
#     show_date: "2013-12-29"
# )

# PHISH_20131229.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/phish/ph_20131229.jpeg"), filename: "ph_20131229.jpeg")

# PHISH_20131229_SETLIST = %w(The\ Moma\ Dance Rift Roggae Sparkle The\ Line Stash 555 It's\ Ice Gumbo Walls\ of\ the\ Cave Down\ with\ Disease Carini Waves Twist Golgi\ Apparatus David\ Bowie Possum)

# PHISH_20131229_SETLIST.each_with_index do |track, i|
#     Track.create!(
#         track_name: track,
#         track_num: (i + 1),
#         album_id: PHISH_20131229.id
#     )
# end

# PHISH_PAUL_2019_JAMS = Album.create!(
#     title: "Paul's Picks 2019",
#     artist_id: phish.id,
#     year: 2019,
#     description: "Paul's favorite jams from the shows attended in 2019. Ruby Waves from MPP2, Mercury from Camden1, Twenty Years Later from Camden3, Everything's Right from Pittsburgh, Wolfman's Brother from NYE at MSG.",
#     credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
# )

# PHISH_PAUL_2019_JAMS.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/phish/ph_paul2019.jpeg"), filename: "paul2019.jpeg")

# PHISH_PAUL_2019_JAMS_SETLIST = %w(Ruby\ Waves Mercury Twenty\ Years\ Later Everything's\ Right Wolfman's Brother)

# PHISH_PAUL_2019_JAMS_SETLIST.each_with_index do |track, i|
#     Track.create!(
#         track_name: track,
#         track_num: (i + 1),
#         album_id: PHISH_PAUL_2019_JAMS.id
#     )
# end

# PHISH_PAUL_2018_JAMS = Album.create!(
#     title: "Paul's Picks 2018",
#     artist_id: phish.id,
#     year: 2018,
#     description: "Paul's favorite jams from the shows attended in 2018. Down with Disease from Camden1, Simple from Hampton3, Mercury from Vegas3, Seven Below from NYE at MSG.",
#     credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
# )

# PHISH_PAUL_2018_JAMS.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/phish/ph_paul2018.jpeg"), filename: "paul2018.jpeg")

# PHISH_PAUL_2018_JAMS_SETLIST = %w(Down\ With\ Disease Simple Mercury Seven\ Below)

# PHISH_PAUL_2018_JAMS_SETLIST.each_with_index do |track, i|
#     Track.create!(
#         track_name: track,
#         track_num: (i + 1),
#         album_id: PHISH_PAUL_2018_JAMS.id
#     )
# end

# PHISH_PAUL_2017_JAMS = Album.create!(
#     title: "Paul's Picks 2017",
#     artist_id: phish.id,
#     year: 2017,
#     description: "Paul's favorite jams from the shows attended in 2017. Caspian from Pittsburgh, Lawn Boy from BD4, Simple from BD13, Jibboo from NYE at MSG.",
#     credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
# )

# PHISH_PAUL_2017_JAMS.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/phish/ph_paul2017.jpeg"), filename: "paul2017.jpeg")


# PHISH_PAUL_2017_JAMS_SETLIST = %w(Prince\ Caspian Lawn\ Boy Simple Gotta Jibboo)

# PHISH_PAUL_2017_JAMS_SETLIST.each_with_index do |track, i|
#     Track.create!(
#         track_name: track,
#         track_num: (i + 1),
#         album_id: PHISH_PAUL_2017_JAMS.id
#     )
# end

# PHISH_PAUL_2016_JAMS = Album.create!(
#     title: "Paul's Picks 2016",
#     artist_id: phish.id,
#     year: 2016,
#     description: "Paul's favorite jams from the shows attended in 2016. Light from Mansfield, Crosseyed from Dicks3, Golden Age from Vegas1, 2001 from Vegas4.",
#     credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
# )

# PHISH_PAUL_2016_JAMS.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/phish/ph_paul2016.jpeg"), filename: "paul2016.jpeg")


# PHISH_PAUL_2016_JAMS_SETLIST = %w(Light Crosseyed\ and\ Painless Golden\ Age 2001)

# PHISH_PAUL_2016_JAMS_SETLIST.each_with_index do |track, i|
#     Track.create!(
#         track_name: track,
#         track_num: (i + 1),
#         album_id: PHISH_PAUL_2016_JAMS.id
#     )
# end

# PHISH_PAUL_2015_JAMS = Album.create!(
#     title: "Paul's Picks 2015",
#     artist_id: phish.id,
#     year: 2015,
#     description: "Paul's favorite jams from the shows attended in 2015. Tweezer > Caspian from Magnaball2, DWD from Magnaball3, NMINML from NYE at MSG",
#     credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
# )

# PHISH_PAUL_2015_JAMS.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/phish/ph_paul2015.jpeg"), filename: "paul2015.jpeg")


# PHISH_PAUL_2015_JAMS_SETLIST = %w(Tweezer\ > Caspian Down\ With\ Disease No\ Men\ in\  No\ Men's\ Land)

# PHISH_PAUL_2015_JAMS_SETLIST.each_with_index do |track, i|
#     Track.create!(
#         track_name: track,
#         track_num: (i + 1),
#         album_id: PHISH_PAUL_2015_JAMS.id
#     )
# end

# PHISH_PAUL_2014_JAMS = Album.create!(
#     title: "Paul's Picks 2014",
#     artist_id: phish.id,
#     year: 2014,
#     description: "Paul's favorite jams from the shows attended in 2014. Fuego from Mann1, Fuego from Portsmouth2, Meatstick from Portsmouth2, Ghost from NYE in Miami.",
#     credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
# )

# PHISH_PAUL_2014_JAMS.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/phish/ph_paul2014.jpeg"), filename: "paul2014.jpeg")


# PHISH_PAUL_2014_JAMS_SETLIST = %w(Fuego Fuego Meatstick Ghost)

# PHISH_PAUL_2014_JAMS_SETLIST.each_with_index do |track, i|
#     Track.create!(
#         track_name: track,
#         track_num: (i + 1),
#         album_id: PHISH_PAUL_2014_JAMS.id
#     )
# end

# PHISH_PAUL_2013_JAMS = Album.create!(
#     title: "Paul's Picks 2013",
#     artist_id: phish.id,
#     year: 2013,
#     description: "Paul's favorite jams from the shows attended in 2013. Carini from Hampton1, Tweezer from Hampton3, DWD from Reading, DWD from MSG2, and Light from NYE at MSG.",
#     credits: "Guitar: Trey Anastasio, Bass: Mike Gordon, Keys: Page McConnell, Drums: Jon Fishman"
# )

# PHISH_PAUL_2013_JAMS.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/phish/ph_paul2013.jpeg"), filename: "paul2013.jpeg")

# PHISH_PAUL_2013_JAMS_SETLIST = %w(Carini Tweezer Down\ with\ Disease Down\ with\ Disease Light)

# PHISH_PAUL_2013_JAMS_SETLIST.each_with_index do |track, i|
#     Track.create!(
#         track_name: track,
#         track_num: (i + 1),
#         album_id: PHISH_PAUL_2013_JAMS.id
#     )
# end

gd = User.create!(
    artist_name: "The Grateful Dead",
    username: "gratefuldead",
    password: "misterhiro",
    email: "jer@gd.com",
    about: "The Grateful Dead was an American rock band formed in 1965 in Palo Alto, California.[1][2] The band is known for its eclectic style, which fused elements of rock, folk, country, jazz, bluegrass, blues, gospel, and psychedelic rock; for live performances of lengthy instrumental jams; and for its devoted fan base, known as 'Deadheads'.",
    location: "San Francisco, CA",
    personal_url: "www.dead.net"
)

gd.banner.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/gd/gd_banner.jpeg"), filename: "gdbanner.jpeg")
gd.thumbnail.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/gd/gd_thumbnail.jpeg"), filename: "gdthumbnail.jpeg")

# msg81 = Album.create!(
#     title: '1981.03.09 - New York, NY',
#     artist_id: gd.id,
#     year: 1981,
#     description: "Legendary AUD",
#     credits: "Guitar: Jer"
# )

# msg81.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/gd/gd_19810309.jpeg"), filename: "gd_19810309.jpeg")

# GD_MSG81_SETLIST = [
#     "Feel like a Stranger",
#     "Althea",
#     "C.C. Rider",
#     "Ramble On Rose",
#     "El Paso",
#     "Deep Elementary Blues",
#     "Beat it on Down the Line",
#     "Bird Song",
#     "New Minglewood Blues",
#     "China Cat Sunflower",
#     "I Know You Rider",
#     "Samson and Delilah",
#     "Ship of Fools",
#     "Estimated Prophet",
#     "Uncle John's Band",
#     "Drums",
#     "Space",
#     "The Other One",
#     "Stella Blue",
#     "Good Lovin'",
#     "U.S. Blues"
# ]

# GD_MSG81_SETLIST.each_with_index do |track, i|
#     Track.create!(
#         track_name: track,
#         track_num: (i + 1),
#         album_id: msg81.id
#     )
# end

Z1 = Album.create!(
    title: "Dr. Zack's Picks Vol. 1",
    artist_id: gd.id,
    year: 2020,
    description: "Dark Star -> Wharf Rat -> Dark Star from 2/18/71 at the Capitol Theater in Port Chester, NY. Eyes of the World from 3/29/90 at Nassau Coliseum on Long Island.",
    credits: "No credited taper for 2/18/71, though it was transferred by Dan Stephens and Scott Thompson. 3/29/90 taped and transferred by Roger Eichorn. Complete shows can be found on archive.org."
)

Z1.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/gd/gd_z1.webp"), filename: "gd_z1.webp")

Z1_SETLIST = %w(Dark\ Star\ -> Wharf\ Rat\ -> Dark\ Star Eyes\ of\ the\ World)

Z1_TRACKS = [
    "https://phancamp-seed.s3.amazonaws.com/gd/drZ1/Dark+Star+-%3E.mp3",
    "https://phancamp-seed.s3.amazonaws.com/gd/drZ1/Wharf+Rat+-%3E.mp3",
    "https://phancamp-seed.s3.amazonaws.com/gd/drZ1/Dark+Star.mp3",
    "https://phancamp-seed.s3.amazonaws.com/gd/drZ1/Eyes+of+the+World.mp3"
]

Z1_SETLIST.each_with_index do |track, i|
    Track.create!(
        track_name: track,
        track_num: (i + 1),
        album_id: Z1.id
    ).song.attach(io: URI.open(Z1_TRACKS[i]), filename: "gd_drZ1_#{i + 1}")
end

Z2 = Album.create!(
    title: "Dr. Zack's Picks Vol. 2",
    artist_id: gd.id,
    year: 2020,
    description: "Playing in the Band -> The Wheel -> Playing in the Band from 2/26/77 at Swing Auditorium in San Bernardino, CA. Scarlet -> Fire from 3/22/90 at Copps Coliseum in Hamilton, Ontario",
    credits: "2/26/77 show taped and transferred by Rob Bertrando. 3/22/90 show taping/transfer is uncredited. Complete shows can be found on archive.org."
)

Z2.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/gd/gd_z2.webp"), filename: "gd_z2.webp")

Z2_SETLIST = %w(Playing\ in\ the\ Band\ -> The\ Wheel\ -> Playing\ in\ the\ Band Scarlet\ -> Fire)

Z2_TRACKS = [
    "https://phancamp-seed.s3.amazonaws.com/gd/drZ2/Playing+in+the+Band+-%3E.mp3",
    "https://phancamp-seed.s3.amazonaws.com/gd/drZ2/The+Wheel+-%3E.mp3",
    "https://phancamp-seed.s3.amazonaws.com/gd/drZ2/Playing+in+the+Band.mp3",
    "https://phancamp-seed.s3.amazonaws.com/gd/drZ2/Scarlet+-%3E.mp3",
    "https://phancamp-seed.s3.amazonaws.com/gd/drZ2/Fire.mp3"
]

Z2_SETLIST.each_with_index do |track, i|
    Track.create!(
        track_name: track,
        track_num: (i + 1),
        album_id: Z2.id
    ).song.attach(io: URI.open(Z2_TRACKS[i]), filename: "gd_drZ2_#{i + 1}")
end

Z3 = Album.create!(
    title: "Dr. Zack's Picks Vol. 3",
    artist_id: gd.id,
    year: 2020,
    description: "Bird Song from 6/22/73 at P.N.E. Coliseum in Vancouver, BC. Shakedown Street from 6/30/85 at Merriweather Post Pavillion in Columbia, MD. The Other One from 2/27/69",
    credits: "6/22/73 show taped by Donn Amick. 6/30/85 show taped and transferred by Tony Suraci. 2/27/69 taping/transfer is uncredited. Complete shows can be found on archive.org."
)

Z3.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/gd/gd_z3.webp"), filename: "gd_z3.webp")

Z3_SETLIST = %w(Bird\ Song Shakedown\ Street The\ Other\ One)

Z3_TRACKS = [
    "https://phancamp-seed.s3.amazonaws.com/gd/drZ3/Bird+Song.mp3",
    "https://phancamp-seed.s3.amazonaws.com/gd/drZ3/Shakedown+Street.mp3",
    "https://phancamp-seed.s3.amazonaws.com/gd/drZ3/The+Other+One.mp3"
]

Z3_SETLIST.each_with_index do |track, i|
    Track.create!(
        track_name: track,
        track_num: (i + 1),
        album_id: Z3.id
    ).song.attach(io: URI.open(Z3_TRACKS[i]), filename: "gd_drZ3_#{i + 1}")
end

Z4 = Album.create!(
    title: "Dr. Zack's Picks Vol. 4",
    artist_id: gd.id,
    year: 2020,
    description: "Help On the Way -> Slipknot -> Franklin's Tower from 5/22/77 at The Sportatorium in Pembroke Pines, FL. Mississippi Half Step from 9/3/77 show at Raceway Park in Englishtown, NJ.",
    credits: "5/22/77 show taping/transfer is uncredited. 9/3/77 show taped by Ken Flemming and transferred by Rob Berger. Complete shows can be found on archive.org."
)

Z4.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/gd/gd_z4.webp"), filename: "gd_z4.webp")

Z4_SETLIST = %w(Help\ On\ the\ Way\ -> Slipknot\ -> Franklin's\ Tower Mississippi\ Half\ Step)

Z4_TRACKS = [
    "https://phancamp-seed.s3.amazonaws.com/gd/drZ4/Help+on+the+Way+-%3E.mp3",
    "https://phancamp-seed.s3.amazonaws.com/gd/drZ4/Slipnot+-%3E.mp3",
    "https://phancamp-seed.s3.amazonaws.com/gd/drZ4/Franklin's+Tower.mp3",
    "https://phancamp-seed.s3.amazonaws.com/gd/drZ4/Mississippi+Half+Step.mp3"
]

Z4_SETLIST.each_with_index do |track, i|
    Track.create!(
        track_name: track,
        track_num: (i + 1),
        album_id: Z4.id
    ).song.attach(io: URI.open(Z4_TRACKS[i]), filename: "gd_drZ4_#{i + 1}")
end


goose = User.create!(
    artist_name: "Goose",
    username: "Goose",
    password: "misterhiro",
    email: "rick@goosetheband.com",
    about: "Goose’s music is the culmination of a rich history between friends of differing ages and experiences from the same small town in Connecticut, drawn together through a deep love of music and storytelling.",
    location: "CT",
    personal_url: "www.goosetheband.com"
)

goose.banner.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/goose/goose_banner.jpeg"), filename: "goosebanner.jpeg")
goose.thumbnail.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/goose/goose_thumbnail.jpeg"), filename: "goosethumbnail.jpeg")

goose_20201019 = Album.create!(
    title: '2020.10.19 - Frederick, MD',
    artist_id: goose.id,
    year: 2020,
    description: "Drive in show in Frederick, MD. Final show of their Drive-in tour along the East Coast.",
    credits: "Rick on the Guitar"
)

goose_20201019.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/goose/goose_2020_10_19.jpeg"), filename: "goose_20201019.jpeg")


GOOSE_20201019_SETLIST = [
    "Drive",
    "Doc Brown",
    "So Ready",
    "AUATC",
    "Jive1",
    "Jive Lee",
    "Indian River/Flee Reprise",
    "Fish in the Sea",
    "Drive Reprise",
    "Rosewood Heart",
    "Travelers",
    "Turned Clouds",
    "Hot Tea"
]

GOOSE_20201019_SETLIST.each_with_index do |track, i|
    Track.create!(
        track_name: track,
        track_num: (i + 1),
        album_id: goose_20201019.id
    )
end

ween = User.create!(
    artist_name: "Ween",
    username: "Ween",
    password: "misterhiro",
    email: "dean@ween.com",
    about: "Ween is an American rock band from New Hope, Pennsylvania, formed in 1984 by childhood friends Aaron Freeman and Mickey Melchiondo, better known by their respective stage names, Gene and Dean Ween. After meeting in a middle-school typing class, the two began playing music and immediately chose the name Ween as well as their Ramones-inspired pseudonyms. While they are generally categorized as an alternative rock band, the band are known for their highly eclectic catalog of songs inspired by funk, soul, country, gospel, prog, psychedelia, R&B, heavy metal, punk rock, and more.",
    location: "New Hope, Pennsylvania",
    personal_url: "www.ween.com"
)

ween.banner.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/ween/ween_banner.jpeg"), filename: "weenbanner.jpeg")
ween.thumbnail.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/ween/ween_thumbnail.jpeg"), filename: "weenthumbnail.jpeg")

ween_20170604 = Album.create!(
    title: '2017.06.04 - Baltimore, MD',
    artist_id: ween.id,
    year: 2017,
    description: "From Baltimore, MD at Pier Six Pavilion. The show saw the band bust out a David Bowie cover they last played live on New Year’s Eve 2011.",
    credits: "Deaner"
)

ween_20170604.photo.attach(io: URI.open("https://phancamp-seed.s3.amazonaws.com/ween/ween_2017_06_04.jpeg"), filename: "ween_20170604.jpeg")


WEEN_20170604_SETLIST = [
    "She Wanted to Leave",
    "Buckingham Green",
    "My Own Bare Hands",
    "Let's Dance",
    "Your Party",
    "Voodoo Lady",
    "Freedom of '76",
    "Gabrielle",
    "Boys Club",
    "The Grobe",
    "Japanese Cowboy",
    "Puerto Rican Power",
    "Frank",
    "The Mollusk",
    "Bananas and Blow",
    "Tried & True",
    "Joppa Road",
    "Ocean Man",
    "Object",
    "Zoloft",
    "Learnin' to Love",
    "Transdermal Celebration",
    "Mutilated Lips",
    "I’ll Be Your Jonny on the Spot",
    "Buenas Tardes Amigo",
]

WEEN_20170604_SETLIST.each_with_index do |track, i|
    Track.create!(
        track_name: track,
        track_num: (i + 1),
        album_id: ween_20170604.id
    )
end

dlo = User.create!(
    artist_name: "Delvon Lamarr Organ Trio",
    username: "dlo3",
    password: "misterhiro",
    email: "dlo3@dlo3.com",
    about: "Delvon Lamarr Organ Trio—or as it is sometimes referred to, DLO3—specialize in the lost art of “feel good music.” The ingredients of this intoxicating cocktail include a big helping of the 1960s organ jazz stylings of Jimmy Smith and Baby Face Willette; a pinch of the snappy soul strut of Booker T. & The M.G.’s and The Meters; and sprinkles Motown, Stax Records, blues, and cosmic Jimi Hendrix-style guitar. It’s a soul-jazz concoction that goes straight to your heart and head makes your body break out in a sweat. Live, the band’s fiery and intuitive chemistry is unstoppable, brimming with improvisation, instant composition, imaginative takes on classic tunes, and a booty-shaking back catalog of soulful gems.",
    location: "Seattle, Washington",
    personal_url: "https://delvonlamarrorgantrio.com/"
)


# GENRES = [rock, jazz, jam, folk]
GENRES = Genre.all

User.all.ids.each do |id|
    numGenres = rand(3..6)

    numGenres.times {
        GenreJoin.create!(
            genre_id: GENRES.sample.id,
            genreable_id: id,
            genreable_type: "User"
        )
    }
end
Album.all.ids.each do |id|
    numGenres = rand(3..6)

    numGenres.times {
        GenreJoin.create!(
            genre_id: GENRES.sample.id,
            genreable_id: id,
            genreable_type: "Album"
        )
    }
end

Track.all.ids.each do |id|
    numGenres = rand(3..6)

    numGenres.times {
        GenreJoin.create!(
            genre_id: GENRES.sample.id,
            genreable_id: id,
            genreable_type: "Track"
        )
    }
end

# GenreJoin.create!(
#     genre_id: rock.id,
#     genreable_id: phish.id,
#     genreable_type: "User"
# )
# GenreJoin.create!(
#     genre_id: jazz.id,
#     genreable_id: phish.id,
#     genreable_type: "User"
# )
# GenreJoin.create!(
#     genre_id: folk.id,
#     genreable_id: gd.id,
#     genreable_type: "User"
# )
# GenreJoin.create!(
#     genre_id: jam.id,
#     genreable_id: goose.id,
#     genreable_type: "User"
# )
# GenreJoin.create!(
#     genre_id: folk.id,
#     genreable_id: ween.id,
#     genreable_type: "User"
# )
# GenreJoin.create!(
#     genre_id: rock.id,
#     genreable_id: bd13.id,
#     genreable_type: "Album"
# )
# GenreJoin.create!(
#     genre_id: jazz.id,
#     genreable_id: jp2000.id,
#     genreable_type: "Album"
# )
# GenreJoin.create!(
#     genre_id: rock.id,
#     genreable_id: co97.id,
#     genreable_type: "Album"
# )
# GenreJoin.create!(
#     genre_id: rock.id,
#     genreable_id: mann15.id,
#     genreable_type: "Album"
# )
# GenreJoin.create!(
#     genre_id: rock.id,
#     genreable_id: PHISH_20131229.id,
#     genreable_type: "Album"
# )