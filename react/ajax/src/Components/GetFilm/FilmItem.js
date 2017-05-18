import React, { Component } from 'react';

class FilmItem extends Component {
    constructor(props) {
        super(props);
        this.roman = this.convert_to_roman(props.film.episode_id);
    }
    convert_to_roman(number) {
        let num_list = [
            [1000, "M"], [900, "CM"], [500, "D"], [400, "CD"], [100, "C"], 
            [90, "XC"], [50, "L"], [40, "XL"], [10, "X"], [9, "IX"], [5, "V"], 
            [4, "IV"], [1, "I"]
        ];

        let roman = "";
        let i = 0;
        while (number >= 1 && num_list.length) {
            let arabic = num_list[i][0]
            if (arabic === number) { // found our key, concatenate to string
                roman += num_list[i][1]
                number -= arabic
                i += 1
            } else if (arabic > number) { // keep walking the list. our number is smaller than the "key"
                i += 1
            } else { // arabic < number, concatenate the string. don't increment i, we may need to add more
                roman += num_list[i][1]
                number -= arabic
            }
        }
        return roman;
    }
    render() {
        return (
            <div>
                <h3>Episode {this.roman} {this.props.film.title}</h3>
                <p>{this.props.film.opening_crawl}</p>
            </div>
        );
    }
}
export default FilmItem;