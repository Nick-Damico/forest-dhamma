class Teacher < ApplicationRecord
  belongs_to :monastery
  has_many :talks
end
