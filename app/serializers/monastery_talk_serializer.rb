class MonasteryTalkSerializer < ActiveModel::Serializer
  attributes :id, :title, :description, :created_at, :favorites
end
