import { Fragment, useCallback, useEffect, useState } from 'react'
import { navigate } from 'astro:transitions/client'
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid'
import { Listbox, Transition } from '@headlessui/react'
import { leagues } from '@/utils/data/leagues'
import type { League } from '@/@types/league'
import { Loader } from './Loader'

interface LoadLeague {
  league: League
}

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

const loadLeague = async (): Promise<LoadLeague | undefined> => {
  try {
    const response = await fetch(
      '/api/leagues/' + window.location.pathname.split('/')[2]
    )
    // network error in the 4xx–5xx range
    if (!response.ok) {
      throw new Error(`${response.status} ${response.statusText}`)
    }
    // use response here if we didn't throw above
    return await response.json()
  } catch (error) {
    console.error(error)
  }
}
const data = await loadLeague()

export function Select() {
  const [selectedLeague, setSelectedLeague] = useState(data?.league)

  const handleChange = useCallback(
    (value: typeof selectedLeague) => {
      setSelectedLeague(value)
      navigate(`/league/${value?.slug}`)
      // window.location.pathname = ('league/' + value?.slug) as string
    },
    [setSelectedLeague]
  )

  if (!data) {
    return <Loader />
  }

  return (
    <Listbox
      value={selectedLeague as League}
      onChange={(value) => handleChange(value)}
    >
      {({ open }) => (
        <>
          <div className='flex items-center gap-2'>
            <Listbox.Label className='sr-only hidden md:block text-xs font-medium leading-6'>
              Choose your league:
            </Listbox.Label>

            <div className='relative mt-2'>
              <Listbox.Button className='relative w-full cursor-default dark:bg-soft-dark bg-accent rounded-md py-1 pl-3 pr-10 text-left shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-esmerald sm:text-sm sm:leading-6'>
                <span className='flex items-center'>
                  <img
                    src={selectedLeague?.logo}
                    alt={selectedLeague?.name}
                    className='h-5 w-5 flex-shrink-0 rounded-full bg-slate-50'
                    width={32}
                    height={32}
                  />
                  <span className='ml-3 block truncate'>
                    {selectedLeague?.name}
                  </span>
                </span>
                <span className='pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2'>
                  <ChevronUpDownIcon
                    className='h-5 w-5 text-gray-400'
                    aria-hidden='true'
                  />
                </span>
              </Listbox.Button>
              {open && (
                <Transition
                  show={open}
                  as={Fragment}
                  leave='transition ease-in duration-100'
                  leaveFrom='opacity-100'
                  leaveTo='opacity-0'
                >
                  <Listbox.Options
                    static
                    className='absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md dark:bg-accent-dark bg-accent py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'
                  >
                    {leagues.map((league) => (
                      <Listbox.Option
                        key={league.id}
                        value={league}
                        className={({ active }) =>
                          classNames(
                            active
                              ? 'bg-forest-green text-white'
                              : 'text-gray-900 dark:text-ivory',
                            'relative cursor-default select-none py-2 pl-3 pr-9'
                          )
                        }
                      >
                        {({ selected, active }) => (
                          <>
                            <div className='flex items-center'>
                              <img
                                src={league.logo}
                                alt={league.name}
                                className='h-5 w-5 flex-shrink-0 rounded-full bg-slate-50'
                                width={32}
                                height={32}
                              />
                              <span
                                className={classNames(
                                  selected ? 'font-semibold' : 'font-normal',
                                  'ml-3 block truncate'
                                )}
                              >
                                {league.name}
                              </span>
                            </div>

                            {selected ? (
                              <span
                                className={classNames(
                                  active ? 'text-white' : 'text-esmerald',
                                  'absolute inset-y-0 right-0 flex items-center pr-4'
                                )}
                              >
                                <CheckIcon
                                  className='h-5 w-5'
                                  aria-hidden='true'
                                />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </Transition>
              )}
            </div>
          </div>
        </>
      )}
    </Listbox>
  )
}
