import React from 'react';
import { Fragment, useState } from 'react';
import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';
import Symptom2 from '../../Pages/SymptomChecker/Symptom2';

const symptom = [
  {id: 0, name: 'Please select an option' },
  {id: 1, name: 'Vomit',},
  {id: 2, name: 'Diarrhea',},
  {id: 3, name: 'Lethargy',},
  {id: 4, name: 'Loss of Appetite',},
  {id: 5, name: 'Limping',},
  {id: 6, name: 'Coughing',},
  {id: 7, name: 'Excessive Thirst/Urination',},
  {id: 8, name: 'Sudden Weight Loss or Gain',},
  {id: 9, name: 'Difficulty Breathing',},
  {id: 10, name: 'Excessive Scratching',},
  {id: 11, name: 'Other (Please Specify)',}
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

function SymptomDropdown() {
  const [selected, setSelected] = useState(null);

  return (
    <div>
    <Listbox value={selected} onChange={setSelected}>
      {({ open }) => (
        <div className="relative mt-2">
          <Listbox.Button className="relative w-full cursor-default rounded-md bg-white py-1.5 pl-3 pr-10 text-left text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 sm:text-sm sm:leading-6">
            <span className="flex items-center">
              <span className="ml-3 block truncate">{selected ? selected.name : 'Please select an option'}</span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <ChevronUpDownIcon className="h-5 w-5 text-gray-400" aria-hidden="true" />
            </span>
          </Listbox.Button>

          <Transition
            show={open}
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
              {symptom.map((person) => (
                <Listbox.Option
                  key={person.id}
                  className={({ active }) =>
                    classNames(
                      active ? 'bg-indigo-600 text-white' : 'text-gray-900',
                      'relative cursor-default select-none py-2 pl-3 pr-9'
                    )
                  }
                  value={person}
                >
                  {({ selected, active }) => (
                    <>
                      <div className="flex items-center">
                        <span
                          className={classNames(selected ? 'font-semibold' : 'font-normal', 'ml-3 block truncate')}
                        >
                          {person.name}
                        </span>
                      </div>

                      {selected ? (
                        <span
                          className={classNames(
                            active ? 'text-white' : 'text-indigo-600',
                            'absolute inset-y-0 right-0 flex items-center pr-4'
                          )}
                        >
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      )}
    </Listbox>
    {selected && selected.id !== 0 && (
      <>
      <p className="text-gray-600 mt-2">Selected: {selected.name}</p>
      <Symptom2 />
      </>
    )}
    </div>
  );
}

export default SymptomDropdown;