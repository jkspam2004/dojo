#Private/Protected
#By default, all methods in Ruby classes are public - accessible by anyone. To create private or protected method, you can do the following:

class Heart
  def public_method 
  end
  protected # all methods that follow will be protected methods
  def protected_method
  end
  def protected_method2
  end
  private # all methods that follow will be made private: not accessible for outside objects
  def private_method
  end
  def private_method2
  end
end
