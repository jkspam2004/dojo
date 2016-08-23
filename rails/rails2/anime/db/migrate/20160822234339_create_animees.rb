class CreateAnimees < ActiveRecord::Migration
  def change
    create_table :animees do |t|
      t.string :name

      t.timestamps
    end
  end
end
