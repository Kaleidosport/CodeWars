# Origin: https://www.codewars.com/kata/5bb0c58f484fcd170700063d

def pillars(num_pill, dist, width):
    return (num_pill - 1) * dist * 100 + (num_pill - 2) * width if num_pill > 1 else 0