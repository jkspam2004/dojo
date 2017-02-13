'''
import re
word = 'baeiouzdfdf'

if re.search(r'aeiou', word):
    print "matches"
else:
    print "no match"
'''

import re

words = ["aimlessness", "aselisodu", "assassin", "baby", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]

print("original list:\n {}".format(words))
print("word list count: {}\n".format(len(words)))

def get_matching_words(regex, problem):

    results=[]
    for word in words:
        if (re.search(regex,word)):
            results.append(word)
    print("{} - count: {}".format(problem,len(results)))
    return results

# 1. starts with "a"
regex = r'^a' 
print("{}\n" .format(get_matching_words(regex, 'starts with "a"')))

# 2. contains a "v"
regex = r'v' 
print("{}\n" .format(get_matching_words(regex, 'contains a "v"')))

# 3. contains double "s"
regex = r's{2}' 
print("{}\n" .format(get_matching_words(regex, 'contains double "s"')))

# 4. ends with "e"
regex = r'e$' 
print ("{}\n" .format(get_matching_words(regex, 'ends with "e"')))

# 5. contains a "b", any character, then another "b"
regex = r'b\Sb' 
print("{}\n" .format(get_matching_words(regex, 'contains a "b", any character, then another "b"')))

# 6. contains a "b", at least one character, then another "b"
regex= r'b\S+b' 
print("{}\n" .format(get_matching_words(regex, 'contains a "b", at least one character, then another "b"')))

# 7. contains a "b", any number of characters (including zero), then another "b"
regex= r'b\S*b' 
print("{}\n" .format(get_matching_words(regex, 'contains a "b", any number of characters (including zero), then another "b"')))

# 8. match words that include all five vowels in order
regex='[a][^aiou]*[e][^aeou]*[i][^aeiu]*[o][^aeio]*[u][^aeiou]*'
print("{}\n" .format(get_matching_words(regex, 'include all five vowels in order')))

# 9. match words that only use the letters in "regular expression" (each letter can appear any number of times)
#regex='^[regulaxpsion]+$' # incorrect
regex='^[^bcdfghjkmqtvwyz]+$' # any characters not in regular expression
print("{}\n" .format(get_matching_words(regex, 'only use the letters in "regular expression"')))

# 10. contains a double letter
regex= r'(\S)\1' 
print("{}\n" .format(get_matching_words(regex, 'contains a double letter')))


