class AddLikesToMonasteries < ActiveRecord::Migration[5.1]
  def change
    add_column :monasteries, :likes, :integer, :default => 0
  end
end
