class TeacherTalkSerializer < ActiveModel::Serializer
  attributes :title, :description, :language, :file_url, :teacher_id, :created_at
  has_many :tags
end
