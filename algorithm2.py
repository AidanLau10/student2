# sorting function to sort a list of names alphabetically
def sort_names(names):
    sorted_names = sorted(names)
    return sorted_names

# list of names
name_list = []
# loop to add user input of names to name_list
while True:
    name = input("Enter a name (or 'done' to finish): ")
    # if user types done. break the loop
    if name.lower() == "done":
        break
    # add the user input name to name_list list
    name_list.append(name)

# sort the list of names using the sorting function
sorted_names = sort_names(name_list)

# display the sorted list of names
print("Sorted names:")
for name in sorted_names:
    print(name)
