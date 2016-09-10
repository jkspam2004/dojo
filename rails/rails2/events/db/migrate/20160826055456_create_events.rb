class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.string :location
      t.date :event_date
      t.references :user, index: true
      t.references :state, index: true

      t.timestamps
    end
  end
end
