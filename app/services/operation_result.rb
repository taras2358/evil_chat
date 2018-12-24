class OperationResult
  def success?
    false
  end

  def failure?
    false
  end

  class Success < OperationResult
    attr_reader :object, :code
    def initialize(code: :success, object:, message: nil)
      @object = object
      @code = code
      @message = message
    end

    def success?
      true
    end
  end

  class Failure < OperationResult
    attr_reader :code, :object

    def initialize(code:, object:, message: nil)
      @code = code
      @object = object
      @message = message
      puts "ERROR CODE: #{code}"
    end

    def failure?
      true
    end
  end
end
