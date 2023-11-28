def letterFinder(word, match):
    """
    Function to find the positions of a specific letter (match) in a given word.

    Parameters:
    word (str): The word in which to search for the specified letter.
    match (str): The letter to find in the word.

    Returns:
    list: A list containing the positions (indices) where the letter is found in the word.
    """
    positions = [index for index, letter in enumerate(word) if letter == match]
    return positions
