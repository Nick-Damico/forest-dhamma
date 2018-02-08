class CreateTagTalks < ActiveRecord::Migration[5.1]
  def change
    create_table :tag_talks do |t|
      t.references :talk, foreign_key: true
      t.references :tag, foreign_key: true
    
    end
  end
end
