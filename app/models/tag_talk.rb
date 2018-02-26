class TagTalk < ApplicationRecord
  belongs_to :talk
  belongs_to :tag

  validates_uniqueness_of :tag_id, :scope => :talk_id
end
