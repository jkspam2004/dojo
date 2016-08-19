class AddCategoryToProducts < ActiveRecord::Migration
  def change
    add_column :products, :category, :string
    #remove_column :products, :name
  end
end
