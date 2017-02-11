'''
import re
word = 'baeiouzdfdf'

if re.search(r'aeiou', word):
    print "matches"
else:
    print "no match"
'''

import re
def get_matching_words(regex):
    results=[]
    words = ["aimlessnesse", "aselisodu", "assassin", "babyv", "beekeeper", "belladonna", "cannonball", "crybaby", "denver", "embraceable", "facetious", "flashbulb", "gaslight", "hobgoblin", "iconoclast", "issue", "kebab", "kilo", "laundered", "mattress", "millennia", "natural", "obsessive", "paranoia", "queen", "rabble", "reabsorb", "sacrilegious", "schoolroom", "tabby", "tabloid", "unbearable", "union", "videotape"]
    for word in words:
        if (re.search(regex,word)):
            results.append(word)
    print results

    return results

#regex=r'^a.*' #starts with a
#regex=r'/*v/*' #anything containing a v
#regex=r'[s][s]' #contains double s
#regex=r'e$' #ends with e
#regex=r'/*b.b/* #has a b then another character then a b
# regex=r'/*b.+/*b' #find a b, then any other charater then a b

#regex=r'[a]\w+[e]\w+[i]\w+[o]\w+[u]+'
#regex=r'[a]\w*[e]\w*[i]\w*[o]\w*[u]'
# match words with aeiou in that order
regex='[a][^aiou]*[e][^aeou]*[i][^aeiu]*[o][^aeio]*[u][^aeiou]*'
get_matching_words(regex)

