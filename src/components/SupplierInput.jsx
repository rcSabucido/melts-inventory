import { useState } from 'react';

import { getRegionMap, getRegion, getSecondLevelMap, getProvinceOrCityFromCode, getComponentCityOrMunicipalityFromCode } from '../helpers/PsgcLocationLookup.js';

const SupplierInput = ( {className, formData, setFormData} ) => {
  let [locationInput, setLocationInput] = useState([]);
  let [streetEnabled, setStreetEnabled] = useState(false);
  let [streetText, setStreetText] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    console.log(formData)
  };

  const handleStreetChange = (e) => {
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

  const changeBarangay = (e) => {
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

  const changeCity = (e) => {
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
    let componentCityOrMunicipality = getComponentCityOrMunicipalityFromCode(value)
    console.log(`City changed:`)
    console.log(componentCityOrMunicipality)
    let arr = Object.entries(componentCityOrMunicipality.value.barangays).map(([key, value]) => {
      return { code: key, name: value }
    })
    let items = locationInput
    items.push( 
      <div className="flex flex-row flex-wrap justify-between">
        <div className="m-4 grow">
          <label className="text-sm font-medium text-gray-700">Barangay</label>
          <select

            type="text"
            name="barangay"
            onChange={changeBarangay}
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
    setLocationInput(items)
  }

  const changeProvinceAndCity = (e) => {
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
    let provinceHucCode = value
    let returnValue = getProvinceOrCityFromCode(provinceHucCode)
    let [type, provinceHuc] = [returnValue.type, returnValue.value]
    let arr = []
    let isCapitalCity = (value === "1380600000")
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
    }
    let selectPrompt = ""
    if (isCapitalCity) {
      selectPrompt = "--- SELECT A SUB-MUNICIPALITY ---"
    } else if (type === "city" || type === "municipality") {
      selectPrompt = "--- SELECT A BARANGAY ---"
    } else {
      selectPrompt = "--- SELECT A CITY OR MUNICIPALITY ---"
    }

    let items = locationInput
    items.push( 
      <div className="flex flex-row flex-wrap justify-between">
        <div className="m-4 grow">
          <label className="text-sm font-medium text-gray-700">
            { isCapitalCity ? "Sub-Municipality" : type === "city" || type === "municipality" ? "Barangay" : "City or Municipality" }
          </label>
          <select
            type="text"
            name="region"
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
    console.log(`Change province and city: ${value}`)
    setLocationInput(items)
  }

  const updateRegion = (regionCode) => {
    setStreetEnabled(false)
    setStreetText("")

    while (locationInput.length > 0) {
      locationInput.pop()
    }

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
    console.log("Update region")
    console.log(locationInput)
    setLocationInput(locationInput)
  }

  const regionChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      location_id: value
    })
    updateRegion(value)
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
              required
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
              required
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
            onChange={regionChange}
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
              className="mt-1 block w-full p-2 border border-gray-300 bg-white rounded-md"
              required
          />
        </div>
      </div>
    </div>
  );
}

export default SupplierInput;
