class Monastery < ApplicationRecord
  has_many :teachers
  has_many :talks, through: :teachers
end
