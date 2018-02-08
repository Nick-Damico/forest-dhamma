class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :profile_img, :monastery_id
  has_many :talks, serializer: TeacherTalkSerializer
end
