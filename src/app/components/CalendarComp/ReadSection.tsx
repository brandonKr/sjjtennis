import {getList} from "@/services/apiService";

const list = await getList();

// READ section
const ReadSection = () => {
    return (
      <div className="space-y-2">
      <div className="mt-2 text-center font-bold text-2xl">TODO LIST</div>
      <div className="rounded-lg border border-gray-800">
        <ul role="list" className="divide-y divide-gray-500">
          {list.map((item: { id: number; todo: string }) => (
            <li
              key={item.id}
              className="flex p-2 justify-between gap-x-6 text-lg"
            >
              <span>{item.todo}</span>
              <span>ID # {item.id}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
    )
  }
    
export default ReadSection;