class TagTalk < ApplicationRecord
  belongs_to :talk
  belongs_to :tag

  validates_uniqueness_of :talk_id, :scope => :tag_id
end
