class TeacherTalkSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :language, :file_url, :teacher_id, :created_at, :favorites
  has_many :tags
end
