class CreateTalks < ActiveRecord::Migration[5.1]
  def change
    create_table :talks do |t|
      t.string :title
      t.text :description
      t.string :duration
      t.string :language
      t.string :file_url
      t.references :teacher, foreign_key: true

      t.timestamps
    end
  end
end
