import { Tab } from '@headlessui/react'



const BooksCollection = ({ collection }) => {
    return (
        <div className="w-full bg-gray-50">
            <Tab.Group>
                <Tab.List className="p-2 border rounded flex items-center justify-evenly">
                    <Tab className="rounded shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2">📖 Currently Reading</Tab>
                    <Tab className="rounded shadow-lg px-4 m-2 bg-white text-lg font-semibold p-2">🔖 Want to Read</Tab>
                    <Tab className="rounded shadow-lg px-4 odd:m-2 bg-white text-lg font-semibold p-2">✅ Read</Tab>
                </Tab.List>
                <Tab.Panels>
                    <Tab.Panel>Content 1</Tab.Panel>
                    <Tab.Panel>Content 2</Tab.Panel>
                    <Tab.Panel>Content 3</Tab.Panel>
                </Tab.Panels>
            </Tab.Group>
        </div>
    );
}

export default BooksCollection;