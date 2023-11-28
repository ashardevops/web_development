def letterFinder(string, target):
    for i, char in enumerate(string):
        if char == target:
            print(f"Found the {target} at {i}")
        else:
            print(f"---No match found at {i}")

# Call the function with the specified strings
letterFinder("test", "t")
