class CreateMonasteries < ActiveRecord::Migration[5.1]
  def change
    create_table :monasteries do |t|
      t.string :name
      t.string :address
      t.string :site_url
      t.string :img_url

      t.timestamps
    end
  end
end
