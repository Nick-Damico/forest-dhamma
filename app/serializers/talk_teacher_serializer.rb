class TalkTeacherSerializer < ActiveModel::Serializer
  attributes :id, :name, :profile_img
  has_one :monastery, serializer: TalkTeacherMonasterySerializer
end
