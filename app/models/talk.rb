class Talk < ApplicationRecord
  belongs_to :teacher
  has_many :talk_tags
  has_many :tags, through: :talk_tags
end
