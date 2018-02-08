class TeacherTalkSerializer < ActiveModel::Serializer
  attributes :title, :description, :duration, :language, :file_url, :teacher_id
  has_many :tags
end
