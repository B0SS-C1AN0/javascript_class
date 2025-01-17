function get_binary(n)
{
  var binary_value = 0;
	while(n != 0) {
		var remainder = n % 2;
		binary_value += remainder;
		binary_value *= 10;
	  n = n / 2;
	}
  return binary_value;
}

let result = get_binary(7);
console.log(result);