class MonasterySerializer < ActiveModel::Serializer
  attributes :id, :name, :address, :site_url, :img_url
  has_many :teachers
end
