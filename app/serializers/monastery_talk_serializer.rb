# *
class MonasteryTalkSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :created_at, :favorites
  has_one :teacher, serializer: MonasteryTalkTeacherSerializer
end
