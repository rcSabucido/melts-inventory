import { useState } from 'react';

import { getRegionMap, getRegion, getSecondLevelMap, getProvinceOrCityFromCode, getComponentCityOrMunicipalityFromCode } from '../helpers/PsgcLocationLookup.js';

const SupplierInput = ( {className, formData, setFormData, isUpdating} ) => {
  let [streetText, setStreetText] = useState(formData?.street);

  let initialStreetEnabled = false;
  let initialLocationInput = [];
  if (isUpdating) {
    let code = formData.location_id
    formData.region = code.substring(0, 2) + '00000000'
    initialStreetEnabled = true;

    const provinceOrHUCCode = code.substring(0, 5) + '00000';
    const cityCode = code.substring(0, 7) + '000';

    regionSelection(initialLocationInput, formData.region, provinceOrHUCCode)
    provinceAndCitySelection(initialLocationInput, provinceOrHUCCode, cityCode, code)
    if (getComponentCityOrMunicipalityFromCode(cityCode)) {
      citySelection(initialLocationInput, cityCode, code)
    }
  }
  let [locationInput, setLocationInput] = useState(initialLocationInput);
  let [streetEnabled, setStreetEnabled] = useState(initialStreetEnabled);

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(formData)
  };

  function handleStreetChange(e) {
    const { name, value } = e.target;

    if (!streetEnabled) {
      setStreetText("")
      return
    }
    setStreetText(value)

    setFormData({
      ...formData,
      "street": value
    });
    console.log(formData)
  };

  function changeBarangay(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      location_id: value
    })
    setStreetText("")
    if (value === "0000000000") {
      setStreetEnabled(false)
      return
    }
    setStreetEnabled(true)
    console.log(`Barangay changed! ${value}`)
  }

  function citySelection(locationInput, value, selectedValue) {
    let componentCityOrMunicipality = getComponentCityOrMunicipalityFromCode(value)
    console.log(`City changed:`)
    console.log(componentCityOrMunicipality)
    let arr = Object.entries(componentCityOrMunicipality.value.barangays).map(([key, value]) => {
      return { code: key, name: value }
    })
    locationInput.push( 
      <div className="flex flex-row flex-wrap justify-between">
        <div className="m-4 grow">
          <label className="text-sm font-medium text-gray-700">Barangay</label>
          <select
            type="text"
            name="barangay"
            onChange={changeBarangay}
            defaultValue={selectedValue}
            className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
            required
          >
          {
            [{code: "0000000000", name: "--- SELECT A BARANGAY ---"}, ...arr].map(
                  entry => <option key={entry.code} value={entry.code}>{entry.name}</option>)}
          }
          </select>
        </div>
      </div>
    )
    console.log(`Change city: ${value}`)

    return locationInput
  }

  function changeCity(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      location_id: value
    })
    setStreetEnabled(false)
    setStreetText("")
    while (locationInput.length > 2) {
      locationInput.pop()
    }
    citySelection(locationInput, value)
    setLocationInput(items)
  }

  function provinceAndCitySelection(locationInput, value, cityCode, code) {
    let provinceHucCode = value
    let returnValue = getProvinceOrCityFromCode(provinceHucCode)
    let [type, provinceHuc] = [returnValue.type, returnValue.value]
    let arr = []
    let isCapitalCity = (value === "1380600000")
    let selectedValue = code
    console.log(`provinceAndCitySelection: ${value}`)
    if (type === "city") {
      if (isCapitalCity) {
        arr = Object.entries(provinceHuc.submunicipalities).map(([key, value]) => {
          return { code: key, name: value.name }
        })
      } else {
        arr = Object.entries(provinceHuc.barangays).map(([key, value]) => {
          return { code: key, name: value }
        })
      }
    } else if (type === "municipality") {
      arr = Object.entries(provinceHuc.barangays).map(([key, value]) => {
        return { code: key, name: value }
      })
    } else {
      arr = Object.entries(provinceHuc.municipalities).map(([key, value]) => {
        return { code: key, name: value.name }
      }).concat(Object.entries(provinceHuc.cities).map(([key, value]) => {
        return { code: key, name: value.name }
      }))
      selectedValue = cityCode
    }
    let selectPrompt = ""
    if (isCapitalCity) {
      selectPrompt = "--- SELECT A SUB-MUNICIPALITY ---"
    } else if (type === "city" || type === "municipality") {
      selectPrompt = "--- SELECT A BARANGAY ---"
    } else {
      selectPrompt = "--- SELECT A CITY OR MUNICIPALITY ---"
    }

    console.log(`selectedValue: ${selectedValue}`)

    locationInput.push( 
      <div className="flex flex-row flex-wrap justify-between">
        <div className="m-4 grow">
          <label className="text-sm font-medium text-gray-700">
            { isCapitalCity ? "Sub-Municipality" : type === "city" || type === "municipality" ? "Barangay" : "City or Municipality" }
          </label>
          <select
            type="text"
            name="region"
            defaultValue={isCapitalCity ? cityCode : selectedValue}
            onChange={(type === "city" && !isCapitalCity) || type === "municipality" ? changeBarangay : changeCity}
            className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
            required
          >
          {
            [{code: "0000000000", name: selectPrompt}, ...arr].map(
                  entry => <option key={entry.code} value={entry.code}>{entry.name}</option>)}
          }
          </select>
        </div>
      </div>
    )

    return locationInput
  }

  function changeProvinceAndCity(e) {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      location_id: value
    })
    setStreetEnabled(false)
    setStreetText("")

    // locationInput = [] doesn't work
    // It needs to be manually popped
    while (locationInput.length > 1) {
      locationInput.pop()
    }
    let items = provinceAndCitySelection(locationInput, value)
    setLocationInput(items)
  }

  function regionSelection(locationInput, regionCode, selectedValue) {
    let region = getRegion(regionCode)
    console.log(Object.keys(region.provinces).length)

    locationInput.push(
      <div className="flex flex-row flex-wrap justify-between">
        <div className="m-4 grow">
          <label className="text-sm font-medium text-gray-700">
            {`Province${regionCode === "1300000000" ? ", Municipality," : ""} or City`}
          </label>
          <select

            type="text"
            name="region"
            defaultValue={selectedValue}
            onChange={changeProvinceAndCity}
            className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
            required
          >
            {[{code: "0000000000", name: "--- SELECT A PROVINCE" +
                (regionCode === "1300000000" ? ", MUNICIPALITY," : "") + " OR CITY ---"},
              ...getSecondLevelMap(region)].map(
                entry => <option key={entry.code} value={entry.code}>{entry.name}</option>)}
          </select>
        </div>
      </div>
    )
  }

  const changeRegion = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      location_id: value
    })
    let regionCode = value

    setStreetEnabled(false)
    setStreetText("")

    while (locationInput.length > 0) {
      locationInput.pop()
    }

    regionSelection(locationInput, value)
    setLocationInput(locationInput)
  }
  
  let addClassName = className
  return (
    <div className={`m-4 p-4 bg-amber-200/30 rounded-xl flex flex-col ${addClassName}`}>
      <div className="m-4">
        <label className="block text-sm font-medium text-gray-700">Company Name</label>
        <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
            required
        />
      </div>
      <div className="flex flex-row flex-wrap justify-between">
        <div className="m-4 grow">
          <label className="text-sm font-medium text-gray-700">Contact Number</label>
          <input
              type="text"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
          />
        </div>
        <div className="m-4 grow">
          <label className="text-sm font-medium text-gray-700">Email</label>
          <input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
          />
        </div>
      </div>
      <div className="flex flex-row flex-wrap justify-between">
        <div className="m-4 grow">
          <label className="text-sm font-medium text-gray-700">Region</label>
          <select
            type="text"
            name="region"
            value={formData.region}
            onChange={changeRegion}
            className="mt-1 w-full p-2 border border-gray-300 bg-white rounded-md"
            required
          >
            {[{code: "0000000000", name: "--- SELECT A REGION ---"},
              ...getRegionMap()].map(
                entry =><option key={entry.code} value={entry.code}>{entry.name}</option>)}
          </select>
        </div>
      </div>
      {locationInput.map(component => {return component})}
      <div className="flex flex-row flex-wrap justify-between">
        <div className="m-4 grow">
          <label className="block text-sm font-medium text-gray-700">Street</label>
          <input
              type="text"
              name="street"
              value={streetText}
              onChange={handleStreetChange}
              className={`mt-1 block w-full p-2 border border-gray-300 ${streetEnabled ? "bg-white" : "bg-stone-300"} rounded-md`}
              required
          />
        </div>
      </div>
    </div>
  );
}

export default SupplierInput;
