import IParam from "../../logic/IParam";
import Subrace from "../../logic/Subrace";
import { arrFromRange } from "../../logic/Helpers";

export const brunn : Subrace = new Subrace( 
    "Брюнн",
    [
        {ID: 0, expected_values: [2]},
        {ID: 1, expected_values: [2]},
        {ID: 2, expected_values: [2]},
        {ID: 3, expected_values: [0]},
        {ID: 4, expected_values: [0, 1]},
        {ID: 5, expected_values: [2]},
        {ID: 6, expected_values: [1]},
        {ID: 7, expected_values: [1]},
        {ID: 8, expected_values: [2]},
        {ID: 9, expected_values: [2]},
        {ID: 10, expected_values: [0]},
        {ID: 11, expected_values: arrFromRange (0, 4)},
        {ID: 12, expected_values: [arrFromRange (2, 17), arrFromRange (24, 29)]},
        {ID: 13, expected_values: [0, 1]}

    ] as IParam[]
)

