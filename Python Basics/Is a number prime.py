# Origin: https://www.codewars.com/kata/5262119038c0985a5b00029f

from math import sqrt
def is_prime(num):
    if num < 2:
        return False
    i = 2
    while i <= sqrt(num):    
        if num%i == 0:
            return False
        i += 1
    return True 