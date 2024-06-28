for i in range(1, 11):
    if i % 2 == 0:
        print(i)
    else:
        pass

def multiplication_table():
    for num in range(1, 11):
        for i in range(1, 11):
            print(f"{num} x {i} = {num*i}")

multiplication_table()

# km = int(input("Insert a kilometer number value: "))
# def length_converter():
#     print(km * 0.621)

# length_converter()

nums = [2, 5, 7, 9, 2, 3, 10, -5, -9]
total = 0
for num in nums:
    total = num+total
print(total)

num_arr = [2, 5, 9, 3, 7]

num_arr.reverse()
print(num_arr)

num_array = [2, -6, 6, -9, 2, 0]

num_array.sort()

print(num_array)

def clearer():
    new_Array = []
    for num in num_array:
        if num >= 0:
            new_Array.append(num)
        else:
            pass
    print(new_Array)

clearer()

# string = str(input("Type in a sentence: "))

# print(string.replace(" ", ""))

number = int(input("Insert a number here: "))

if number % 10 == 0:
    print("True")
else:
    print("False")

array = [2, 7, 8, 5, 9, 3]

big_num = 0
for num in array:
    if num > big_num:
        big_num = num

# palindrome = input("Type in a word")

# if palindrome == palindrome[::-1]:
#     print("True")
# else:
#     print("False")


