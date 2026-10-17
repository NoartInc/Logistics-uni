import React, { useState } from 'react'
import Select from 'react-select'
import { useSelector, useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { retrieveHelpers } from '../../store/actions/helper-action';

const HelperOptions = ({ onChange = null, value = null }) => {
    const dispatch = useDispatch();
    // const [selected, setSelected] = useState(null);
    const lists = useSelector((state) => state.helpers.list).map(item => {
        return {
            value: item.id,
            label: item.fullName
        }
    });

    const onInputChange = (val) => {
        onChange({
            target: {
                name: "helper",
                value: val?.value || null
            }
        });
    }

    // const setSelectedValue = () => {
    //     const currentValue = lists.find(item => item.value === value);
    //     if (currentValue) {
    //         setSelected(currentValue);
    //     } else {
    //         setSelected(null);
    //     }
    // }

    // useEffect(() => {
    //     setSelectedValue();
    // }, [value]);

    useEffect(() => {
        dispatch(retrieveHelpers());
    }, []);

  return (
    <Select
        onChange={onInputChange}
        type="text"
        id="helper"
        name="helper"
        className="mt-1 block w-full border border-gray-300 bg-white rounded-md shadow-sm focus:outline-none focus:ring-gray-500 focus:border-gray-500 sm:text-sm"
        placeholder="Choose Helper"
        options={lists}
        isClearable
    />
  )
}

export default HelperOptions
