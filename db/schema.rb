# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20180208143715) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "monasteries", force: :cascade do |t|
    t.string "name"
    t.string "address"
    t.string "site_url"
    t.string "img_url"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "tag_talks", force: :cascade do |t|
    t.bigint "talk_id"
    t.bigint "tag_id"
    t.index ["tag_id"], name: "index_tag_talks_on_tag_id"
    t.index ["talk_id"], name: "index_tag_talks_on_talk_id"
  end

  create_table "tags", force: :cascade do |t|
    t.string "name"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "talks", force: :cascade do |t|
    t.string "title"
    t.text "description"
    t.string "duration"
    t.string "language"
    t.string "file_url"
    t.bigint "teacher_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["teacher_id"], name: "index_talks_on_teacher_id"
  end

  create_table "teachers", force: :cascade do |t|
    t.string "name"
    t.string "profile_img"
    t.bigint "monastery_id"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["monastery_id"], name: "index_teachers_on_monastery_id"
  end

  add_foreign_key "tag_talks", "tags"
  add_foreign_key "tag_talks", "talks"
  add_foreign_key "talks", "teachers"
  add_foreign_key "teachers", "monasteries"
end
