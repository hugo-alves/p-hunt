class CreateProblems < ActiveRecord::Migration
  def change
    create_table :problems do |t|
      t.string :name
      t.string :title
      t.string :description
      t.string :email

      t.timestamps null: false
    end
  end
end
