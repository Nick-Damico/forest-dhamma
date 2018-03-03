# *
class MonasteryTalkSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :file_url, :created_at, :favorites
  has_one :teacher, serializer: MonasteryTalkTeacherSerializer
end
