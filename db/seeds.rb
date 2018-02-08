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

# Teachers
ajahn_karuṇadhammo = Teacher.create(name: 'Ajahn Karuṇadhammo', profile_img: 'http://www.abhayagiri.org/media/images/authors/Ajahn%20Karunadhammo-small.jpg', monastery: abhayagiri)
