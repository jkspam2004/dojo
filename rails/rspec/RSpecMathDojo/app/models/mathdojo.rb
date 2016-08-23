class MathDojo
  attr_accessor :result

  def initialize
    @result = 0
  end

  # splat operator for unknow number of parameters 
  def add(*args)
    # flatten returns a new one-dimensional array, flattens self recursively
    newarr = args.flatten
    #puts newarr
    newarr.each do |el|
      @result += el
    end

    self
  end

  def subtract(*args)
    subtotal = 0
    newarr = args.flatten
    #puts newarr
    newarr.each do |num|
      subtotal += num
    end
    @result -= subtotal

    self
  end

  def multiply(*args)
    subtotal = 0
    newarr = args.flatten
    newarr.each do |num|
      subtotal += num
    end
    @result *= subtotal
    self
  end

  def reset()
    @result = 1
    self
  end

end

#puts MathDojo.new.add(2).add(2, 5).subtract(3, 2).result
#puts MathDojo.new.add(1).add([3, 5, 7, 8], [2, 4.3, 1.25]).subtract([2,3], [1.1, 2.3]).result 
