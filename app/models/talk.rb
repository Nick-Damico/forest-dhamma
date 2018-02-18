require 'pry'
class Talk < ApplicationRecord
  belongs_to :teacher
  has_many :tag_talks
  has_many :tags, through: :tag_talks
  accepts_nested_attributes_for :tags

    def tags_attributes=(tags_attributes)
      tags_attributes.values.each do |tag_attribute|
        tag = Tag.find_or_create_by(tag_attribute)
        self.tags << tag
      end
    end
end
