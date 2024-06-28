nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

for num in nums:
    if num % 2 == 0:
        print(num)




num_array = [4.9, -2.3, 5, -7.8, 10]

total = 0

for num in num_array:
    total = total + num

print(total)

# km = float(input("Insert length value in kilometers: "))

# def km_to_mi():
#     mi = km * 0.621
#     print(mi)

# km_to_mi()


array = [7, 9, 20, 38, 222, 90]

array.reverse()

print(array)

arr = [9, 2, 0, -9, -4, -9999, 8]

arr.sort()

print(arr)

def array_clear(array):
    new_array = []
    for num in array:
        if num >= 0:
            new_array.append(num)
        else:
            pass
    print(new_array)

array_clear([3, -5, 7, -9, 2])

string = "h e h e h e"

def space_remover():
    return string.replace(" ", "")

print(space_remover())

# number = int(input("Insert a number: "))

# def divide_by_10():
#     if number % 10 == 0:
#         return True
#     else:
#         return False
    
# print(divide_by_10())

nums_arr = [2, 9, 10, 7, 1000]
def num_finder():
    for num in nums_arr:
        big_num = 0
        if num > big_num:
            big_num = num
    return big_num

print(num_finder())

# palindrome = str(input("Insert your word: "))

# if palindrome == palindrome[::-1]:
#     print("True")
# else:
#     print("False")

def multiplication_table():
    for num in range(1, 13):
        for i in range(1, 13):
            print(num, 'x', i, '=', num*i)
multiplication_table()