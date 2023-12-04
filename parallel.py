# multiprocessing module
import multiprocessing

# function to square the numbers in parallel
def square_worker(number, result_queue):
    result_queue.put(number * number)

# function that is called at the very end that takes list of numbers as a parameter
def parallel_square(numbers):
    # number of processes
    num_processes = multiprocessing.cpu_count()

    # create a multiprocessing manager to share data between processes
    manager = multiprocessing.Manager()
    result_queue = manager.Queue()

    # create a list to store process objects
    processes = []
    # for each item in the list that is going to be squared, create a process for it and store it in the empty list
    for number in numbers:
        process = multiprocessing.Process(target=square_worker, args=(number, result_queue))
        processes.append(process)
    # start all processes
    for process in processes:
        process.start()
    # wait for all processes to finish
    for process in processes:
        process.join()
    # get results from the queue
    results = []
    while not result_queue.empty():
        # the result_queue gets the squared numbers from the square_worker function and appends it to the empty list
        results.append(result_queue.get())

    return results

if __name__ == "__main__":
    # create a list of numbers to square
    numbers_to_square = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    print("Original Numbers:", numbers_to_square)

# use the created list as an argument in the squaring function
    squared_numbers = parallel_square(numbers_to_square)
    print("Squared Numbers:", squared_numbers)
