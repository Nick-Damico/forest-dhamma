class TalkSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :duration, :language, :file_url, :favorites
  has_one :teacher, serializer: TalkTeacherSerializer
end
