def solution(A):
    # Implement your solution here
    max_value = max(A)+1
    
    for i in range(1,max_value+1):
       if i in A:
           continue
       else:
           return i
  
        
def another_solution(A): 
    return len(set(A))

A = [1, 3, 6, 4, 1, 2]
print(solution(A))
print(another_solution(A))