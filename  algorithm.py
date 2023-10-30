# ask user for input
user_input = input("Enter a string: ")

def is_palindrome(input_str):
    # takes the input and takes out any spaces and makes it lower case for case-sensitive
    input_str = input_str.replace(" ", "").lower()

    # compare the string with its reverse
    return input_str == input_str[::-1]

# takes parameter, user_input which is the string the user put and the function is_palindrome takes it as an argument
if is_palindrome(user_input):
    print("The input is a palindrome.")
else:
    print("The input is not a palindrome.")
