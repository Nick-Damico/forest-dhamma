class Talk < ApplicationRecord
  belongs_to :teacher
  has_many :tag_talks
  has_many :tags, through: :tag_talks
end
