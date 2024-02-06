import { useCallback, useEffect, useState } from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { type CarouselApi } from '@/components/ui/carousel'
import { Fixtures } from './FIxtures'
import { roundsData } from '@/utils/data/rounds'
import { loadFixturesPerRound } from '@/lib/api-football/apifootball'

interface CarouselProps {
  currentRound: number
  allRounds: number
}

export function CarouselFixtures({ currentRound, allRounds }: CarouselProps) {
  const [api, setApi] = useState<CarouselApi>()
  const [rounds, setRounds] = useState<number>(0)
  const [current, setCurrent] = useState(0)
  const totalRounds = new Array(allRounds).fill(0).map((_, i) => i + 1)

  useEffect(() => {
    if (!api) {
      return
    }

    setRounds(api.scrollSnapList().length)
    setCurrent(api.selectedScrollSnap() + 1)

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])

  useEffect(() => {
    if (!api) {
      return
    }

    api.scrollTo(api.selectedScrollSnap() + Number(currentRound - 1))
  }, [api])

  const scrollPrev = useCallback(() => {
    if (api) {
      api.scrollPrev()
    }
  }, [api])

  const scrollNext = useCallback(() => {
    if (api) {
      api.scrollNext()
    }
  }, [api])

  return (
    <Carousel setApi={setApi}>
      <div className='flex items-center justify-center relative pb-4'>
        <CarouselPrevious className='ml-8 mt-10' onClick={scrollPrev} />
        <span className='mt-16 inline-flex items-baseline justify-center absolute'>
          <span className='text-sm font-semibold'>
            {current > 0 && `ROUND: ${current}`}
          </span>
        </span>
        <CarouselNext className='mr-8 mt-10' onClick={scrollNext} />
      </div>
      <CarouselContent className='mt-14'>
        {totalRounds.map((round) => (
          <CarouselItem className='space-y-4' key={round}>
            <Fixtures />
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
