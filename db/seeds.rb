# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).

####################################################
# Monasteries
####################################################

amaravati = Monastery.create(
  name: "Amaravati",
  address: "St Margarets, Hemel Hempstead HP1 3BZ, England",
  site_url: "https://www.amaravati.org",
  img_url: "https://cd1.amaravati.org/wp-content/uploads/2016/10/04/Amaravati_157-2.jpg"
)

abhayagiri = Monastery.create(
  name: 'Abhayagiri',
  address: 'Redwood Valley, CA',
  site_url: 'http://www.abhayagiri.org/',
  img_url: 'https://forestsangha-163c.kxcdn.com/images/W1siZiIsIjIwMTUvMDgvMjgvNm5kbjlteXA4Z19hYmhheWFnaXJpX3ZpZXdfLmpwZyJdLFsicCIsInRodW1iIiwiNDkweDI1OSMiXSxbInAiLCJlbmNvZGUiLCJqcGciLCItcXVhbGl0eSA4NSJdXQ/a609da901ccc36c1/abhayagiri%20view%20.jpg'
)

aruna = Monastery.create(
  name: 'Aruna Ratanagiri',
  address: 'Belsay Northumberland, UK',
  site_url: 'https://ratanagiri.org.uk/',
  img_url: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Dhamma_Hall.jpg'
)

bodhinyanarama = Monastery.create(
  name: 'Bodhinyanarama',
  address: 'Wellington, New Zealand',
  site_url: 'http://www.bodhinyanarama.net.nz/',
  img_url: 'https://forestsangha-163c.kxcdn.com/images/W1siZiIsIjIwMTUvMDgvMTIvM3NhamkyazFpM19OWl9XZWxsaW5ndG9uX1N0dXBhLmpwZyJdLFsicCIsInRodW1iIiwiNDkweDI1OSMiXSxbInAiLCJlbmNvZGUiLCJqcGciLCItcXVhbGl0eSA4NSJdXQ/a5b7484e133a8e4d/NZ_Wellington_Stupa.jpg'
)

buddhabodhivana = Monastery.create(
  name: 'Buddhabodhivana',
  address: 'East Warburton, Australia',
  site_url: 'https://forestsangha.org/community/monasteries/buddhabodhivana',
  img_url: 'https://forestsangha-163c.kxcdn.com/images/W1siZiIsIjIwMTUvMDYvMjkvNzcxNThjdzU3OF9QMTEzMDU2MS5KUEciXSxbInAiLCJ0aHVtYiIsIjQ5MHgyNTkjIl0sWyJwIiwiZW5jb2RlIiwianBnIiwiLXF1YWxpdHkgODUiXV0/fca75dd5f2542fe6/P1130561.jpg'
)

cittaviveka = Monastery.create(
  name: 'Cittaviveka',
  address: 'Chithurst, United Kingdom',
  site_url: 'https://www.cittaviveka.org/',
  img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Main_Building_Chithurst_Cittaviveka.png/1200px-Main_Building_Chithurst_Cittaviveka.png'
)

dhammapala = Monastery.create(
  name: 'Dhammapala',
  address: 'Switzerland',
  site_url: 'https://dhammapala.ch/home-eng/',
  img_url: 'https://dhammapala.ch/wp-content/uploads/2015/05/dhammapala-kloster-lg.jpg'
)

forest_hermitage = Monastery.create(
  name: 'Forest Hermitage',
  address: 'United Kingdom',
  site_url: 'https://foresthermitage.org.uk/',
  img_url: 'https://foresthermitage.org.uk/wp-content/uploads/2015/09/cropped-FH-wide.jpg'
)

hartridge = Monastery.create(
  name: 'Hartridge',
  address: 'United Kingdom',
  site_url: 'http://www.hartridgemonastery.org/',
  img_url: 'http://hartridge.weebly.com/uploads/2/1/8/9/21897506/3229942_orig.jpg'
)

santacittarama = Monastery.create(
  name: 'Santacittarama',
  address: 'Italy',
  site_url: 'https://forestsangha.org/community/monasteries/santacittarama',
  img_url: 'https://forestsangha-163c.kxcdn.com/images/W1siZiIsIjIwMTUvMDcvMDEvOHFrdDF5anAxX01DXzMxNi5qcGciXSxbInAiLCJ0aHVtYiIsIjQ5MHgyNTkjIl0sWyJwIiwiZW5jb2RlIiwianBnIiwiLXF1YWxpdHkgODUiXV0/b3829a19d8349aa8/MC_316.jpg'
)

wat_nong_pah_pong = Monastery.create(
  name: 'Wat Nong Pah Pong',
  address: 'Thailand',
  site_url: 'https://forestsangha.org/community/monasteries/wat-nong-pah-pong',
  img_url: 'https://media-cdn.tripadvisor.com/media/photo-s/01/e7/d8/60/main-pagodas-at-wat-nong.jpg'
)

wat_pah_nanachat = Monastery.create(
  name: 'Wat Nong Pah Pong',
  address: 'Ubon, Thailand',
  site_url: 'http://www.watpahnanachat.org/',
  img_url: 'http://sanitykeeper.com/wp-content/uploads/2017/04/Wat-Pah-Nanachat-aerial-view.jpg'
)


############################################################################################################################################################
# Teachers
############################################################################################################################################################

############################
# Abhayagiri Teachers
############################
ajahn_karuṇadhammo = Teacher.create(
  name: 'Ajahn Karuṇadhammo',
  profile_img: 'http://www.abhayagiri.org/media/images/authors/Ajahn%20Karunadhammo-small.jpg',
  monastery: abhayagiri
)
ajahn_passano = Teacher.create(
  name: 'Ajahn Pasanno',
  profile_img: 'http://www.abhayagiri.org/media/images/authors/Ajahn%20Pasanno-small.JPG',
  monastery: abhayagiri
)
ajahn_naniko = Teacher.create(
  name: 'Ajahn Ñāniko',
  profile_img: 'http://www.abhayagiri.org/media/images/authors/Ajahn%20Nyaniko-small.JPG',
  monastery: abhayagiri
)


############################
# Amaravati Teachers
############################
ajahn_sumedho = Teacher.create(
  name: 'Ajahn Sumedho',
  profile_img: 'https://mindfulnessexercises.com/wp-content/uploads/2016/12/ajahn-sumedho.jpg',
  monastery: amaravati
)
ajahn_candasiri = Teacher.create(
  name: 'Ajahn Candasiri',
  profile_img: 'https://cdn.amaravati.org/wp-content/uploads/2014/06/candasiri_bio2.jpg',
  monastery: amaravati
)

############################
# Aruna Ratanagiri Teachers
############################
ajahn_munindo = Teacher.create(
  name: 'Ajahn Munindo',
  profile_img: 'https://buddhacity.podbean.com/mf/web/txvgrd/Munindo.jpg',
  monastery: aruna
)


############################
# Forest Hermitage Teachers
############################
luang_por_khemadhammo = Teacher.create(
  name: 'Luang Por Khemadhammo',
  profile_img: 'https://pbs.twimg.com/profile_images/1673555382/CIMG4997A.jpg',
  monastery: forest_hermitage
)

############################
# Bodhinyanarama Teachers
############################

ajahn_chandako = Teacher.create(
  name: 'Ajahn Chandako',
  profile_img: 'https://www.theosophical.org/files/events/nationalprograms/AjahnChandako_f.jpg',
  monastery: bodhinyanarama
)

############################
# buddhabodhivana Teachers
############################

ajahn_kalyano = Teacher.create(
  name: 'Ajahn Kalyano',
  profile_img: 'http://www.dhammagiri.org.au/uploads/1/0/9/7/10977520/1609988.png',
  monastery: buddhabodhivana
)

############################
# Cittaviveka Teachers
############################

ajahn_sucitto = Teacher.create(
  name: 'Ajahn Sucitto',
  profile_img: 'https://publicdata.insighttimer.com/publisher_data/pictures/000/001/169/medium/Aj_Sucitto_Photo_1_.jpg',
  monastery: cittaviveka
)

############################
# Dhammapala Teachers
############################

ajahn_khemasiri = Teacher.create(
  name: 'Ajahn Khemasiri',
  profile_img: 'https://www.fsnewsletter.org/html/86/assets/images/content/Aj_Khemasiri.jpg',
  monastery: dhammapala
)

############################################################################################################################################################
# Tags
############################################################################################################################################################
suffering = Tag.create(name: 'Suffering')
right_effort = Tag.create(name: 'Right Effort')
forest_tradition = Tag.create(name: 'Thai Forest Tradition')
patience = Tag.create(name: 'Patience')
determination = Tag.create(name: 'Determination')
spiritual_friendship = Tag.create(name: 'Spiritual Friendship')
practicing_dhamma = Tag.create(name: 'Practicing Dhamma')
faith = Tag.create(name: 'Faith')
trust = Tag.create(name: 'Trust')
tradition = Tag.create(name: 'Tradition')
understanding = Tag.create(name: 'Understanding')
four_noble_truths = Tag.create(name: 'Four Noble Truths')
autobiography = Tag.create(name: 'Autobiography')



############################################################################################################################################################
# Talks
############################################################################################################################################################

# Seed for only 4 - 6 Monasteries
############################
# Abhayagiri Talks
############################

going_beneath = Talk.create(
  title: 'Going Beneath the Thought',
  description: 'Ajahn Karunadhammo discusses instructions on how to remove unwholesome, distracting or proliferating thoughts. He focuses on the fourth method which retraces the thought back to its origin. He suggests moving to the affective experience that is feeding the thought or story, and then to see the bare energetic experience in the body.',
  language: 'English',
  file_url: 'http://www.abhayagiri.org/media/audio/youtube/P8l6jgpnxxY.mp3',
  teacher: ajahn_karuṇadhammo,
  favorites: 11
)
going_beneath.tags << suffering
going_beneath.tags << right_effort
going_beneath.save

connect_lineage =  Talk.create(
  title: 'Connecting with the Lineage',
  description: 'Ajahn Pasanno describes the recent visit to Thailand by members of the community to attend the celebration of the one hundredth year of Ajahn Chah’s birth.',
  language: 'English',
  file_url: 'http://www.abhayagiri.org/media/audio/youtube/3oi13Xeqeq8.mp3',
  teacher: ajahn_passano,
  favorites: 5
)
connect_lineage.tags << forest_tradition
connect_lineage.save

going_against_stream = Talk.create(
  title: 'Are we going against the stream?',
  description: ' He discusses the five hindrances to meditation and their antidotes which are the four protective meditations: contemplation of the body, metta, death, and the Buddha.',
  language: 'English',
  file_url: 'http://www.abhayagiri.org/media/audio/youtube/7zXgHV9WOfM.mp3',
  teacher: ajahn_naniko,
  favorites: 10
)
going_against_stream.tags << suffering
going_against_stream.save

returning_abhayagiri = Talk.create(
  title: 'Returning to Abhayagiri',
  description: 'Returning from his time in Thailand, Ajahn Naniko offers reflections on overcoming negativity, meditating in India, uncertainty, and spiritual friendship.',
  language: 'English',
  file_url: 'http://www.abhayagiri.org/media/audio/youtube/gDRjNwmhgDU.mp3',
  teacher: ajahn_naniko,
  favorites: 2
)
returning_abhayagiri.tags << patience
returning_abhayagiri.tags << spiritual_friendship
returning_abhayagiri.save

############################
# Amaravati Talks
############################

duty_of_living = Talk.create(
  title: 'The Duty of Living',
  description: 'This talk was given on 1 June 2011 at Amaravati Buddhist Monastery.',
  language: 'English',
  file_url: 'https://cdn.amaravati.org/wp-content/uploads/2014/10/11/Amaravati-2011-49-The-Duty-of-Living.mp3',
  teacher: ajahn_candasiri,
  favorites: 2
)

practising_dhamma =  Talk.create(
  title: 'Listening and Practising the Dhamma',
  description: 'This talk was given by Luang Por Sumedho on 18 May 2014, on Vesakha Puja day, at Amaravati Buddhist Monastery, UK.',
  language: 'English',
  file_url: 'https://cdn.amaravati.org/wp-content/uploads/2014/10/11/Amaravati_2014_0518_Listening_and_Practising_the_Dhamma.mp3',
  teacher: ajahn_sumedho,
  favorites: 5
)
practising_dhamma.tags << practicing_dhamma
practising_dhamma.save


############################
# Aruna Talks
############################

trust_distrust = Talk.create(
  title: 'Trust and Distrust',
  description: 'Talk on dealing with trust and distrust in our faith, by Luang Por Munindo on February 04, 2018',
  language: 'English', file_url: 'https://ratanagiri.org.uk/system/refinery/resources/2018/02/05/2tw1bkw1eu_Ajahn_Munindo_Trust_and_Distrust.mp3',
  teacher: ajahn_munindo,
  favorites: 10
)
trust_distrust.tags << faith
trust_distrust.tags << trust
trust_distrust.save

let_this_be_enough = Talk.create(
  title: 'Let this be enough',
  description: 'Talk on contentment, by Luang Por Munindo on December 31, 2017',
  language: 'English',
  file_url: 'https://ratanagiri.org.uk/system/refinery/resources/2018/01/01/9cli1yl9mc_Ajahn_Munindo_Let_THIS_Be_Enough.mp3',
  teacher: ajahn_munindo,
  favorites: 2
)
let_this_be_enough.tags << understanding
let_this_be_enough.tags << tradition
let_this_be_enough.save


############################
# Forest Hermitage Talks
############################

fh_four_noble_truths = Talk.create(
  title: 'The Four Noble Truths',
  description: 'Talk on the Four Noble Truths, by Luang Por Khemadhammo on Januaray 04, 2010',
  language: 'English',
  file_url: 'https://foresthermitage.org.uk/wp-content/uploads/2009/12/LP-Interview-Part-1.mp3',
  teacher: luang_por_khemadhammo,
  favorites: 3
)
fh_four_noble_truths.tags << four_noble_truths
fh_four_noble_truths.tags << trust
fh_four_noble_truths.save

life_story = Talk.create(
  title: 'Luang Por Khemadhammo\'s life story part: 1',
  description: 'The life of Luang Por Khemadhammo part: 1, by Luang Por Khemadhammo on December 01, 2009',
  language: 'English',
  file_url: 'https://foresthermitage.org.uk/wp-content/uploads/2009/12/LP-Interview-Part-1.mp3',
  teacher: luang_por_khemadhammo,
  favorites: 8
)
life_story.tags << autobiography
life_story.tags << faith
life_story.save


############################
# Bodhinyanarama Talks
############################

inspiration_to_practice = Talk.create(
  title: 'Inspiration to practice',
  file_url: 'http://vimutti.org.nz/audio/talks/ac/20111030_Bodhinyanarama_Gratitude_for_the_Sangha.mp3',
  language: 'English',
  teacher: ajahn_chandako,
  favorites: 2
)


############################
# buddhabodhivana Talks
############################

stilling_mind_body = Talk.create(
  title: 'Stilling The Mind and Body',
  file_url: 'https://cdn.amaravati.org/wp-content/uploads/2014/10/11/Amaravati-2011-08-Stilling-The-Mind-Around-The-Body.mp3',
  language: 'English',
  teacher: ajahn_kalyano,
  description: 'This talk was given on 12 January 2011 at Amaravati Buddhist Monastery during the three month winter retreat (January till March 2011).',
  favorites: 4
)

############################
# Cittaviveka Talks
############################

a_rocky_path = Talk.create(
  title: 'A Rocky Path',
  file_url:'https://cdn.amaravati.org/wp-content/uploads/2014/10/11/Amaravati-2011-08-Stilling-The-Mind-Around-The-Body.mp3',
  language: 'English',
  teacher: ajahn_sucitto,
  description: 'Ajahn Sucitto gives a talk on 18-11-17 at Cittaviveka Monastery.',
  favorites: 2,
)

############################
# Dhammapala Talks
############################

a_rocky_path = Talk.create(
  title: 'About Truth',
  file_url:'https://dhammapala.ch/wp-content/uploads/2015/10/Ajahn-Khemasiri-About-truth.mp3',
  language: 'English',
  teacher: ajahn_khemasiri,
  description: 'Ajahn Khemasiri gives a talk at Dhammapala on Saturday evening on the subject of truth.',
  favorites: 3,
)
