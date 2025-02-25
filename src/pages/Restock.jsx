import Button from '../components/Button.jsx';
import Sidebar from '../components/Sidebar.jsx';
import { FunnelIcon, PlusIcon } from '@heroicons/react/24/solid';


const RestockPage = () => {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <main className="flex-col p-4 bg-amber-100 w-full">
          <div className='mx-5 my-3 flex justify-end gap-2'>
            <Button>
              <FunnelIcon className='h-6 w-6' />
              </Button>
            <Button>
              <PlusIcon className='h-6 w-6'/>
              Add Stock
              </Button>
          </div>
          <div className='mx-7 w-auto h-70 bg-amber-200/30 rounded-xl'>
            <p className='px-4 pt-4 text-xl font-bold'>February 20, 2025</p>
            <div class="relative overflow-x-auto rounded-xl m-5">
                <table class="w-full text-sm text-left rtl:text-right text-gray-500">
                    <thead class="text-xs text-gray-700 uppercase bg-orange-200/70">
                        <tr>
                            <th scope="col" class="px-6 py-3">
                                Product
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Category
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Added Items
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Supplier
                            </th>
                            <th scope="col" class="px-6 py-3">
                                Expiry Date
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr class="bg-amber-100 border-b border-gray-200 text-gray-900">
                            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                              Adam Smasher
                            </th>
                            <td class="px-6 py-4">
                                Drinks
                            </td>
                            <td class="px-6 py-4">
                                13
                            </td>
                            <td class="px-6 py-4">
                                Melts Inc.
                            </td>
                            <td class="px-6 py-4">
                                2026-02-19
                            </td>
                        </tr>
                        <tr class="bg-amber-100 border-b  border-gray-200 text-gray-900">
                            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                              Biryani
                            </th>
                            <td class="px-6 py-4">
                                Food
                            </td>
                            <td class="px-6 py-4">
                              20
                            </td>
                            <td class="px-6 py-4">
                                Melts Inc.
                            </td>
                            <td class="px-6 py-4">
                                2026-02-19
                            </td>
                        </tr>
                        <tr class="bg-amber-100 text-gray-900">
                            <th scope="row" class="px-6 py-4 font-medium whitespace-nowrap">
                                David Martinez
                            </th>
                            <td class="px-6 py-4">
                                Drinks
                            </td>
                            <td class="px-6 py-4">
                                19
                            </td>
                            <td class="px-6 py-4">
                                Melts Inc.
                            </td>
                            <td class="px-6 py-4">
                                2026-02-19
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default RestockPage;