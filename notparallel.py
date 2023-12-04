# list of original numbers
list = [1,2,3,4,5,6,7,8,9,10]
# empty list that will appended to later
squared_list = []

# loop that runs for each item in the list
for item in list:
    # for the current item, multiply it togther(square)
    squared = (item * item)
    # append the new squared number to the empty list
    squared_list.append(squared)
    
# print the original list
print("Original Numbers:", list)

# print the new list
print("Squared Numbers:", squared_list)

    


