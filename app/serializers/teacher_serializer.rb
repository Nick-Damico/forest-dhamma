class TeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :profile_img
  has_one :monastery, serializer: TeacherMonasterySerializer
  has_many :talks, serializer: TeacherTalkSerializer
end
