import { DocumentArrowDownIcon } from '@heroicons/react/24/solid';

const transactiontable  = () => {
    return (
      <div class="m-1 border-solid border-orange-400/40 border-2 rounded-md w-full">
      <table class="table-auto text-left rtl:text-right w-full">
        <thead class="text-gray-600 bg-orange-300/30">
          <tr>
          <th class="px-6 py-3">
              ID
            </th>
            <th class="px-6 py-3">
              Date
            </th>
            <th class="px-6 py-3">
              Product
            </th>
            <th class="px-6 py-3">
              Recorded By
            </th>
            <th class="px-6 py-3">
              Items
            </th>
            <th class="px-6 py-3">
              Total Price
            </th>
          </tr>
        </thead>
        {/* insert-y[+16.5] */}
        <DocumentArrowDownIcon
            class="text-orange-400/70  h-6 absolute inset-y-42 inset-x-97 right-133" />
        <DocumentArrowDownIcon
            class="text-orange-400/70 h-6 absolute inset-y-58.5 inset-x-97 right-133" />
        <DocumentArrowDownIcon
            class="text-orange-400/70 h-6 absolute inset-y-75 inset-x-97 right-133" />
        <DocumentArrowDownIcon
            class="text-orange-400/70 h-6 absolute inset-y-91.5 inset-x-97 right-133" />
        <DocumentArrowDownIcon
            class="text-orange-400/70 h-6 absolute inset-y-108 inset-x-97 right-133" />
        <tbody>
          <tr>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">1</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">25 Dec 2020</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">Pat Black</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">John Doe</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">25</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">₱450.00</th>
          </tr>
          <tr>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">2</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">26 Dec 2020</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">Angel Jones</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">Jane Doe</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">66</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">₱325.00</th>
          </tr>
          <tr>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">3</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">26 Dec 2020</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">Max Edwards</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">Eimma H. Acker</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">3</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">₱25.00</th>
          </tr>
          <tr>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">4</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">26 Dec 2020</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">Ragnar Lothbrok</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">Beau Rica</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">120</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">₱1500.00</th>
          </tr>
          <tr>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">5</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">27 Dec 2020</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">Devon Fisher</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">Capri Sunne</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">15</th>
            <th class="px-6 py-5 border-solid border-gray-400/20 border-t-2">₱999.00</th>
          </tr>
        </tbody>
      </table>
      </div>
    )
  }
  
  export default transactiontable;