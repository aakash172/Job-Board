import { Divider } from "@mantine/core";
import { dropdownData } from "../Data/Data";
import MultiInput from "./MultiInput";
import { useState } from 'react';
import { RangeSlider } from '@mantine/core';

const SearchBar = () => {
    const [value, setValue] = useState([1, 100]);
    return (
        <div className="flex px-6 py-8">
            {
                dropdownData.map((item, index) =>
                    <>
                        <div key={item.title + index} className="w-1/5">
                            <MultiInput {...item} />
                        </div>
                        <Divider mr='xs' size="xs" orientation="vertical" />
                    </>

                )
            }
            <div className="w-1/5 [&_.mantine-slider-label]:!translate-y-10">
                <div className="flex text-sm justify-between">
                    <div>Salary</div>
                    <div>&#8377;{value[0]} LPA - &#8377;{value[1]} LPA </div>
                </div>
                <RangeSlider
                    labelTransitionProps={{
                        transition: 'skew-down',
                        duration: 150,
                        timingFunction: 'linear',
                    }}
                    size="xs"
                    color="brightSun.4"
                    value={value}
                    onChange={setValue} />
            </div>

        </div>
    );
}
export default SearchBar;