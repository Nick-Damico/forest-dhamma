# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# Monasteries

abhayagiri = Monastery.create(name: 'Abhayagiri', address: 'Redwood Valley, CA', site_url: 'http://www.abhayagiri.org/', img_url: 'https://forestsangha-163c.kxcdn.com/images/W1siZiIsIjIwMTUvMDgvMjgvNm5kbjlteXA4Z19hYmhheWFnaXJpX3ZpZXdfLmpwZyJdLFsicCIsInRodW1iIiwiNDkweDI1OSMiXSxbInAiLCJlbmNvZGUiLCJqcGciLCItcXVhbGl0eSA4NSJdXQ/a609da901ccc36c1/abhayagiri%20view%20.jpg')
aruna = Monastery.create(name: 'Aruna Ratanagiri', address: 'Belsay Northumberland, UK', site_url: 'https://ratanagiri.org.uk/', img_url: 'https://upload.wikimedia.org/wikipedia/en/f/f2/Dhamma_Hall.jpg')
bodhinyanarama = Monastery.create(name: 'Bodhinyanarama', address: 'Wellington, New Zealand', site_url: 'http://www.bodhinyanarama.net.nz/', img_url: 'https://forestsangha-163c.kxcdn.com/images/W1siZiIsIjIwMTUvMDgvMTIvM3NhamkyazFpM19OWl9XZWxsaW5ndG9uX1N0dXBhLmpwZyJdLFsicCIsInRodW1iIiwiNDkweDI1OSMiXSxbInAiLCJlbmNvZGUiLCJqcGciLCItcXVhbGl0eSA4NSJdXQ/a5b7484e133a8e4d/NZ_Wellington_Stupa.jpg')
buddhabodhivana = Monastery.create(name: 'Buddhabodhivana', address: 'East Warburton, Australia', site_url: 'https://forestsangha.org/community/monasteries/buddhabodhivana', img_url: 'https://forestsangha-163c.kxcdn.com/images/W1siZiIsIjIwMTUvMDYvMjkvNzcxNThjdzU3OF9QMTEzMDU2MS5KUEciXSxbInAiLCJ0aHVtYiIsIjQ5MHgyNTkjIl0sWyJwIiwiZW5jb2RlIiwianBnIiwiLXF1YWxpdHkgODUiXV0/fca75dd5f2542fe6/P1130561.jpg')
cittaviveka = Monastery.create(name: 'Cittaviveka', address: 'Chithurst, United Kingdom', site_url: 'https://www.cittaviveka.org/', img_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Main_Building_Chithurst_Cittaviveka.png/1200px-Main_Building_Chithurst_Cittaviveka.png')
dhammapala = Monastery.create(name: 'Dhammapala', address: 'Switzerland', site_url: 'https://dhammapala.ch/home-eng/', img_url: 'https://dhammapala.ch/wp-content/uploads/2015/05/dhammapala-kloster-lg.jpg')
forest_hermitage = Monastery.create(name: 'Forest Hermitage', address: 'United Kingdom', site_url: 'https://foresthermitage.org.uk/', img_url: 'https://foresthermitage.org.uk/wp-content/uploads/2015/09/cropped-FH-wide.jpg')
hartridge = Monastery.create(name: 'Hartridge', address: 'United Kingdom', site_url: 'http://www.hartridgemonastery.org/', img_url: 'http://hartridge.weebly.com/uploads/2/1/8/9/21897506/3229942_orig.jpg')
santacittarama = Monastery.create(name: 'Santacittarama', address: 'Italy', site_url: 'https://forestsangha.org/community/monasteries/santacittarama', img_url: 'https://forestsangha-163c.kxcdn.com/images/W1siZiIsIjIwMTUvMDcvMDEvOHFrdDF5anAxX01DXzMxNi5qcGciXSxbInAiLCJ0aHVtYiIsIjQ5MHgyNTkjIl0sWyJwIiwiZW5jb2RlIiwianBnIiwiLXF1YWxpdHkgODUiXV0/b3829a19d8349aa8/MC_316.jpg')
wat_nong_pah_pong = Monastery.create(name: 'Wat Nong Pah Pong', address: 'Thailand', site_url: 'https://forestsangha.org/community/monasteries/wat-nong-pah-pong', img_url: 'https://media-cdn.tripadvisor.com/media/photo-s/01/e7/d8/60/main-pagodas-at-wat-nong.jpg')
wat_pah_nanachat = Monastery.create(name: 'Wat Nong Pah Pong', address: 'Ubon, Thailand', site_url: 'http://www.watpahnanachat.org/', img_url: 'http://sanitykeeper.com/wp-content/uploads/2017/04/Wat-Pah-Nanachat-aerial-view.jpg')

####################################################
# Teachers
####################################################

############################
# Abhayagiri Teachers
############################
ajahn_karuṇadhammo = Teacher.create(name: 'Ajahn Karuṇadhammo', profile_img: 'http://www.abhayagiri.org/media/images/authors/Ajahn%20Karunadhammo-small.jpg', monastery: abhayagiri)
ajahn_passano = Teacher.create(name: 'Ajahn Pasanno', profile_img: 'http://www.abhayagiri.org/media/images/authors/Ajahn%20Pasanno-small.JPG', monastery: abhayagiri)
ajahn_naniko = Teacher.create(name: 'Ajahn Ñāniko', profile_img: 'http://www.abhayagiri.org/media/images/authors/Ajahn%20Nyaniko-small.JPG', monastery: abhayagiri)

####################################################
# Tags
####################################################
suffering = Tag.create(name: 'Suffering')
right_effort = Tag.create(name: 'Right Effort')
forest_tradition = Tag.create(name: 'Thai Forest Tradition')
patience = Tag.create(name: 'Patience')
determination = Tag.create(name: 'Determination')
spiritual_friendship = Tag.create(name: 'Spiritual Friendship')

####################################################
# Talks
####################################################


# Seed for only 4 - 6 Monasteries 
############################
# Abhayagiri Talks
############################
going_beneath = Talk.create(title: 'Going Beneath the Thought', description: 'Ajahn Karunadhammo discusses instructions on how to remove unwholesome, distracting or proliferating thoughts. He focuses on the fourth method which retraces the thought back to its origin. He suggests moving to the affective experience that is feeding the thought or story, and then to see the bare energetic experience in the body.', language: 'English', file_url: 'http://www.abhayagiri.org/media/audio/youtube/P8l6jgpnxxY.mp3', teacher: ajahn_karuṇadhammo)
going_beneath.tags << suffering
going_beneath.tags << right_effort
going_beneath.save

connect_lineage =  Talk.create(title: 'Connecting with the Lineage', description: 'Ajahn Pasanno describes the recent visit to Thailand by members of the community to attend the celebration of the one hundredth year of Ajahn Chah’s birth.', language: 'English', file_url: 'http://www.abhayagiri.org/media/audio/youtube/3oi13Xeqeq8', teacher: ajahn_passano)
connect_lineage.tags << forest_tradition
connect_lineage.save

going_against_stream = Talk.create(title: 'Are we going against the stream?', description: ' He discusses the five hindrances to meditation and their antidotes which are the four protective meditations: contemplation of the body, metta, death, and the Buddha.', language: 'English', file_url: 'http://www.abhayagiri.org/media/audio/youtube/7zXgHV9WOfM', teacher: ajahn_naniko)
going_against_stream.tags << suffering
going_against_stream.save

returning_abhayagiri = Talk.create(title: 'Returning to Abhayagiri', description: 'Returning from his time in Thailand, Ajahn Naniko offers reflections on overcoming negativity, meditating in India, uncertainty, and spiritual friendship.', language: 'English', file_url: 'http://www.abhayagiri.org/media/audio/youtube/gDRjNwmhgDU', teacher: ajahn_naniko)
returning_abhayagiri.tags << patience
returning_abhayagiri.tags << spiritual_friendship
returning_abhayagiri.save
