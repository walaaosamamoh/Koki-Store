import { useParams } from "react-router-dom"
import { useDashboardStore } from "../../store/dashboard"

export default function ShowCategory() {
 
   
    const {id} = useParams()
    const getCategory = useDashboardStore((state)=> state.getCategory)
    const category = getCategory(Number(id))
    const getProductsByCategoryId = useDashboardStore((state)=> state.getProductsByCategoryId)

  return (
    <div className="m-8">
    <h1 className="font-semibold text-xl md:text-3xl mb-4 md:mb-8">
      { category.title }
    </h1>

    {/*  info  */}
    <div className="h-auto md:h-96 mb-10 flex flex-col md:flex-row gap-4">
      <div className="md:w-1/2 w-full md:h-full h-64 rounded-xl overflow-hidden mb-2">
        <img src={category.image} alt="category image" className="size-full object-cover" />
      </div>

      <div className="space-y-2">
        <p className="font-semibold text-sm md:text-xl">
          Title: <span className="text-gray-600 font-normal text-md">{ category.title }</span>
        </p>
        <p className="font-semibold text-sm md:text-xl">
          Description:
          <span className="text-gray-600 font-normal text-md">{ category.description }</span>
        </p>
        <p className="font-semibold text-sm md:text-xl">
          Number of products:
          <span className="text-gray-600 font-normal text-md">{
            getProductsByCategoryId(category.id).length
          }</span>
        </p>
      </div>
    </div>

     {/* products section  */}
    <div>
      <h2 className="font-semibold md:text-xl mb-4">Products in this category</h2>
      <div className="overflow-x-auto shadow-sm border border-gray-200 rounded-xl">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Title
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Image
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Price
              </th>
              <th
                className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                Stock
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {getProductsByCategoryId(category.id).map((product)=>(
              <tr
              key="product.id"
              className="hover:bg-gray-50"
            >
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                { product.title }
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <img src={product.image} alt="Product" className="w-14 h-14 rounded mr-3" />
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-semibold">${ product.price }</td>
              <td className="px-6 py-4 whitespace-nowrap text-gray-900 font-semibold">{ product.stock }</td>
            </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
  )
}
