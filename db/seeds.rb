require "faker"
require 'email_validator'

puts "---------------------- The Manual method!! "

puts "---------------------- Removing old data..."
User.delete_all
Artist.delete_all
Concert.delete_all
Post.delete_all
puts "---------------------- Old data removed..."

puts "---------------------- Seeding the 32 initial users..."

#* the users in the database
u1 = User.create({ username: "onlineguy1", password: "123123123123",  email: Faker::Internet.email})
u2 = User.create({ username: "anotherDude5", password: "123123123123",  email: Faker::Internet.email})
u3 = User.create({ username: "p3rs0n", password: "123123123123",  email: Faker::Internet.email})
u4 = User.create({ username: "thatsme", password: "123123123123",  email: Faker::Internet.email})
u5 = User.create({ username: "BECCAA<3", password: "123123123123",  email: Faker::Internet.email})
u6 = User.create({ username: "testing", password: "123123123123",  email: Faker::Internet.email})
u7 = User.create({ username: "asdf", password: "123123123123",  email: Faker::Internet.email})
u8 = User.create({ username: "johnnyboy", password: "123123123123",  email: Faker::Internet.email})
u9 = User.create({ username: "thatdude", password: "123123123123",  email: Faker::Internet.email})
u10 = User.create({ username: "musiclover123", password: "123123123123",  email: Faker::Internet.email})
u11 = User.create({ username: "ilovemj", password: "123123123123",  email: Faker::Internet.email})
u12 = User.create({ username: "i_love_bad_bunny", password: "123123123123",  email: Faker::Internet.email})
u13 = User.create({ username: "HELLO", password: "123123123123",  email: Faker::Internet.email})
u14 = User.create({ username: "tix4sale", password: "123123123123",  email: Faker::Internet.email})
u15 = User.create({ username: "hustlerbabyx0", password: "123123123123",  email: Faker::Internet.email})
u16 = User.create({ username: "queens123", password: "123123123123",  email: Faker::Internet.email})
u17 = User.create({ username: "L0V3MUSIC", password: "123123123123",  email: Faker::Internet.email})
u18 = User.create({ username: "gettingMONEY247", password: "123123123123",  email: Faker::Internet.email})
u19 = User.create({ username: "guapchaser77", password: "123123123123",  email: Faker::Internet.email})
u20 = User.create({ username: "ihatetheknicks", password: "123123123123",  email: Faker::Internet.email})
u21 = User.create({ username: "benjamindisraeli", password: "123123123123",  email: Faker::Internet.email})
u22 = User.create({ username: "thequeenisdead", password: "123123123123",  email: Faker::Internet.email})
u23 = User.create({ username: "ilovethesmiths11", password: "123123123123",  email: Faker::Internet.email})
u24 = User.create({ username: "nymuzik", password: "123123123123",  email: Faker::Internet.email})
u25 = User.create({ username: "rainygirl", password: "123123123123",  email: Faker::Internet.email})
u26 = User.create({ username: "qwerty22", password: "123123123123",  email: Faker::Internet.email})
u27 = User.create({ username: "generic_username", password: "123123123123",  email: Faker::Internet.email})
u28 = User.create({ username: "AHHHHH", password: "123123123123",  email: Faker::Internet.email})
u29 = User.create({ username: "okletsgetit", password: "123123123123",  email: Faker::Internet.email})
u30 = User.create({ username: "mulholland_driver", password: "123123123123",  email: Faker::Internet.email})
u31 = User.create({ username: "marvin_gaye_rip87", password: "123123123123",  email: Faker::Internet.email})
u32 = User.create({ username: "majboy", password: "123123123123",  email: Faker::Internet.email})


## ALL ARTIST IMAGES ARE OF THE IMGUR TYPE "LARGE THUMBNAIL"
##* NOTE: use the syntax 
##* artist_name = ----> to create the Artist, via the variabel just ='ing their name
##* artist_name_cX ---> for Concerts, where X is any increasing number 
##* artist_name_pX ---> for Posts, where X is any increasing number 
##& seeding Artists-Concerts-Posts in groups per each artist

puts "---------------------- Seeding each Artist, their concerts, and their posts..."

##* POP GENRE

#~ Adele
puts "---------------------- Seeding Adele ..."
adele = Artist.create!({ name: "Adele", image: "https://i.imgur.com/GQX2eakl.jpg", genre: "Pop"})

adele_c1 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Brooklyn Steel", image: "https://i.imgur.com/SmFrzTCl.jpg", artist_id: adele.id})
adele_c2 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Mao Livehouse", image: "https://i.imgur.com/CghhYyml.jpg", artist_id: adele.id})
adele_c3 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Madison Square Garden", image: "https://i.imgur.com/0gd1dD0l.jpg", artist_id: adele.id})

Post.create!({body: "2 tickets, $100 total OBO -- CHEAPEST YOU'LL EVER FIND FOR ADELE!!", for_sale: true, tickets: 2, user_id: u1.id, concert_id: adele_c1.id})
Post.create!({body: "3 tickets, $400 total OBO!", for_sale: true, tickets: 3, user_id: u1.id, concert_id: adele_c1.id})
Post.create!({body: "5 tickets, $1000 total", for_sale: true, tickets: 5, user_id: u1.id, concert_id: adele_c2.id})
Post.create!({body: "10 tickets all for sale individually!", for_sale: true, tickets: 10, user_id: u1.id, concert_id: adele_c2.id})
Post.create!({body: "7 tickets for sale! Buy fast!", for_sale: true, tickets: 7, user_id: u1.id, concert_id: adele_c3.id})
Post.create!({body: "8 tickets left!!", for_sale: true, tickets: 8, user_id: u1.id, concert_id: adele_c3.id})
Post.create!({body: "PLEASE EMAIL IF YOU HAVE 4 TICKETS ALTOGETHER! MY DAUGHTERS LOVE HER -- THX ", for_sale: false, tickets: 4, user_id: u17.id, concert_id: adele_c1.id})
Post.create!({body: "CONTACT FOR SALE, ALL 5 TICKETS OR SOLD SEPERATELY", for_sale: true, tickets: 5, user_id: u2.id, concert_id: adele_c2.id})
Post.create!({body: "email me plzzz need tix asap", for_sale: false, tickets: 1, user_id: u18.id, concert_id: adele_c2.id})
Post.create!({body: "only 1 ticket for sale, email me or call 646-277-2888", for_sale: true, tickets: 1, user_id: u3.id, concert_id: adele_c3.id})
Post.create!({body: "Looking for 10 tickets altogether! WILL PAY BIG!", for_sale: false, tickets: 10, user_id: u19.id, concert_id: adele_c3.id})
Post.create!({body: "FOR SALE -- 5 TIX", for_sale: true, tickets: 5, user_id: u19.id, concert_id: adele_c1.id})
Post.create!({body: "LOOKING TO BUY 1 TICKET", for_sale: false, tickets: 1, user_id: u19.id, concert_id: adele_c1.id})
Post.create!({body: "SELLING ONE TICKET, email me or call 646-277-2888", for_sale: true, tickets: 1, user_id: u19.id, concert_id: adele_c1.id})
Post.create!({body: "I NEED TEN TICKETS, CONTACT ME AT 622-222-2830", for_sale: false, tickets: 10, user_id: u19.id, concert_id: adele_c1.id})

#~ John Legend
puts "---------------------- Seeding John Legend ..."
john_legend = Artist.create!({ name: "John Legend", image: "https://i.imgur.com/rgpniPrl.jpg", genre: "Pop"})

john_legend_c1 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Madison Square Garden", image: "https://i.imgur.com/0gd1dD0l.jpg", artist_id: john_legend.id})
john_legend_c2 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "SoFi Stadium", image: "https://i.imgur.com/YM6MkgXl.jpg", artist_id: john_legend.id})
john_legend_c2 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Waldbuhne", image: "https://i.imgur.com/4YNVVe2l.jpg", artist_id: john_legend.id})

Post.create!({body: "Need 3 tickets badly! Willing to pay $400 total for 3 tix", for_sale: false, tickets: 3, user_id: u2.id, concert_id: john_legend_c1.id})
Post.create!({body: "Can't find just one ticket anywhere! Idc where the seat is, HMU", for_sale: false, tickets: 1, user_id: u30.id, concert_id: john_legend_c1.id})
Post.create!({body: "NEEEEEEEED", for_sale: false, tickets: 1, user_id: u32.id, concert_id: john_legend_c2.id})
Post.create!({body: "MY DAUGHTER LOVES HIM!! EMAIL ME PLZ", for_sale: false, tickets: 2, user_id: u12.id, concert_id: john_legend_c2.id})
Post.create!({body: "Selling 5!! Email or call 777-777-7772", for_sale: true, tickets: 5, user_id: u9.id, concert_id: john_legend_c3.id})

#~ Alicia Keys
puts "---------------------- Seeding Alicia Keys ..."
alicia_keys = Artist.create!({ name: "Alicia Keys", image: "https://i.imgur.com/dv2Unpql.jpg", genre: "R&B"})

alicia_keys_c1 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Bowery Ballroom", image: "https://i.imgur.com/qQN0hVKl.jpg", artist_id: alicia_keys.id})
alicia_keys_c2 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "O2 Arena", image: "https://i.imgur.com/XfpSr2wl.jpg", artist_id: alicia_keys.id})
alicia_keys_c3 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Verona Arena", image: "https://i.imgur.com/R82xj4Cl.jpg", artist_id: alicia_keys.id})

Post.create!({body: "I love her!!! Need 10 tickets for my family", for_sale: false, tickets: 10, user_id: u7.id, concert_id: alicia_keys_c1.id})
Post.create!({body: "Selling 1 ticket only, $500 OBO", for_sale: true, tickets: 1, user_id: u8.id, concert_id: alicia_keys_c2.id})
Post.create!({body: "$100 per ticket OBO", for_sale: true, tickets: 6, user_id: u13.id, concert_id: alicia_keys_c2.id})
Post.create!({body: "Need 2!! Taking my girl, she loves her", for_sale: false, tickets: 2, user_id: u32.id, concert_id: alicia_keys_c3.id})


#~ Ed Sheeran
puts "---------------------- Seeding Ed Sheeran ..."

ed_sheeran = Artist.create!({ name: "Ed Sheeran", image: "https://i.imgur.com/byaK7Wel.jpg", genre: "Pop"})
ed_sheeran_c1 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Dubai Opera House", image: "https://i.imgur.com/seuJ6yal.jpg", artist_id: ed_sheeran.id})
ed_sheeran_c2 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Ronnie Scotts", image: "https://i.imgur.com/Xt6bRkTl.jpg", artist_id: ed_sheeran.id})
ed_sheeran_c3 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Pallacio", image: "https://i.imgur.com/4XVx0Wol.jpg", artist_id: ed_sheeran.id})

Post.create!({body: "Selling both for $300. Email me only.", for_sale: true, tickets: 2, user_id: u2.id, concert_id: ed_sheeran_c1.id})
Post.create!({body: "just need 2 plzzzzz lmao", for_sale: false, tickets: 2, user_id: u4.id, concert_id: ed_sheeran_c3.id})
Post.create!({body: "$2000 for all 6 or $400 per! email.", for_sale: true, tickets: 6, user_id: u31.id, concert_id: ed_sheeran_c2.id})
Post.create!({body: "Need 2!! My daughter loves him, she thinks he's cute so I need these tix lol", for_sale: false, tickets: 2, user_id: u29.id, concert_id: ed_sheeran_c3.id})


#* RAP GENRE

#~ Freddie Gibbs
puts "---------------------- Seeding Freddie Gibbs ..."
freddie_gibbs = Artist.create!({ name: "Freddie Gibbs", image: "https://i.imgur.com/Gnv8wIel.jpg", genre: "Rap"})
freddie_gibbs_c1 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "El Club", image: "https://i.imgur.com/6Jm3E6Ql.jpg", artist_id: freddie_gibbs.id})
freddie_gibbs_c2 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "House of Blues Boston", image: "https://i.imgur.com/EaTJwSZl.jpg", artist_id: freddie_gibbs.id})
freddie_gibbs_c3 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Brooklyn Mirage", image: "https://i.imgur.com/aWcIOQnl.jpg", artist_id: freddie_gibbs.id})


#~ Jay-Z
puts "---------------------- Seeding Jay-Z ..."
jayz = Artist.create!({ name: "JAY-Z", image: "https://i.imgur.com/jz6hIaPl.jpg", genre: "Rap"})
jayz_c1 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Jones Beach", image: "https://i.imgur.com/gzsbgJgl.jpg", artist_id: jayz.id})
jayz_c2 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Royal Albert Hall", image: "https://i.imgur.com/Y1MJL5Cl.jpg", artist_id: jayz.id})
jayz_c3 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Teatro Antico di Taormina", image: "https://i.imgur.com/w8FpXUkl.jpg", artist_id: jayz.id})


#* COUNTRY GENRE

#~ Chris Stapleton
puts "---------------------- Seeding Chris Stapleton ..."
chris_stapleton = Artist.create!({ name: "Chris Stapleton", image: "https://i.imgur.com/IRE3ge8l.jpg", genre: "Country"})
chris_stapleton_c1 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Tower Theatre", image: "https://i.imgur.com/YWwDAthl.jpg", artist_id: chris_stapleton.id})
chris_stapleton_c2 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Great Scott", image: "https://i.imgur.com/MrIiJ9ql.jpg", artist_id: chris_stapleton.id})
chris_stapleton_c3 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "JPP Chicago", image: "https://i.imgur.com/21140aZl.jpg", artist_id: chris_stapleton.id})

#~ Sturgill Simpson
puts "---------------------- Seeding Sturgill Simpson ..."
sturgill_simpson = Artist.create!({ name: "Sturgill Simpson", image: "https://i.imgur.com/BmMLXmUl.jpg", genre: "Country"})
sturgill_simpson_c1 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Prinzenbar", image: "https://i.imgur.com/kYLonnDl.jpg", artist_id: sturgill_simpson.id})
sturgill_simpson_c2 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "100 Club", image: "https://i.imgur.com/xNI1qsIl.jpg", artist_id: sturgill_simpson.id})
sturgill_simpson_c3 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Stubbs", image: "https://i.imgur.com/Ev0r7Zwl.jpg", artist_id: sturgill_simpson.id})




#* R&B GENRE

# ##! match brent faiyaz's picture stats bc it renders very well on the site; check if square shape or whatever, mimci the dimensions

#~ Brent Faiyaz
puts "---------------------- Seeding Brent Faiyaz ..."
brent_faiyaz = Artist.create!({ name: "Brent Faiyaz", image: "https://i.imgur.com/fKlp2Qvl.jpg", genre: "R&B"})
brent_faiyaz_c1 = Concert.create!({date: Faker::Date.between(from: '2023-01-01', to: '2024-05-25'), location: "Brooklyn Steel", image: "https://i.imgur.com/SmFrzTCm.jpg", artist_id: brent_faiyaz.id})
Post.create!({body: "All 3 tickets together = $250, one ticket = $100", for_sale: true, tickets: 3, user_id: u4.id, concert_id: brent_faiyaz_c1.id})

#~ Erykah Badu
puts "---------------------- Seeding Erykah Badu ..."



#* JAZZ GENRE


#~ Esperanza Spalding
puts "---------------------- Seeding Esperanza Spalding..."


#* ELECTRONIC GENRE











puts "---------------------- Success!!"
## so far so good