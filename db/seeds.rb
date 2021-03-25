# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
 
Restaurant.create!(nameId: 'bread-grind',name: 'Bread Grind', description: 'Pan hecho con granos molidos en el restaurante')
Restaurant.create!(nameId: 'ham-and-eggs',name: 'Ham and Eggs', description: 'Los mejores desayunos que probará')
Restaurant.create!(nameId: 'italian',name: 'Sun & Moon Italian Dining', description: 'Restaurante italiano con los mejores vinos de la region')
Restaurant.create!(nameId: 'japanese-food',name: 'Japanese Food', description: 'Comida japonesa hecha por cocineros japoneses')
Restaurant.create!(nameId: 'mxdowells',name: "McDowell's", description: 'Mejores hamburguesas que en comida rápida')
Restaurant.create!(nameId: 'pops',name: "Pop's Diner", description: 'Comida las 24 horas')
