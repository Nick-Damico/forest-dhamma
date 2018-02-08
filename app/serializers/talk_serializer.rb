class TalkSerializer < ActiveModel::Serializer
  attributes :id, :description, :duration, :language, :file_url
  has_one :teacher, serializer: TalkTeacherSerializer
end
