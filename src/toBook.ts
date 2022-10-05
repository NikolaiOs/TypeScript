import { HomyAPI } from './API/homy-api.js'
import { renderToast } from './lib.js'
import { FlatRentSdk } from './SDK/flat-rent-sdk.js'
import { getSearchFormData } from './search-form.js'
import { ISource } from './sources.js'
import { SearchFormId, ToBookIdPrefix  } from './types/types.js'

export async function toBook(event: Event, sources: ISource[]): Promise<void> {
  try {

    const target = event.target

    if (!(target instanceof Element)) return

    const targetId = target.id
    const prefixId: ToBookIdPrefix = 'to-book-'

    const { source: sourceName, id: placeId } = getCleanIdAndSource(targetId, prefixId, '_')

    if (sourceName == null || placeId == null) {
      throw new Error(`Invalid id: ${targetId}`)
    }

    const fromId: SearchFormId = 'search-form'
    const { checkIn, checkOut } = getSearchFormData(fromId)

    const { api } = sources.find((source) => source.name === sourceName)

    if (api instanceof HomyAPI) {

      const result = await api.book(placeId, checkIn, checkOut)

      if (result instanceof Error) throw result
    }

    if (api instanceof FlatRentSdk) {

      const result = await api.book(
        placeId,
        new Date(checkIn),
        new Date(checkOut),
      )

      if (result instanceof Error) throw result
    }

    renderToast(
      {
        text: 'Бронирование прошло успешно.',
        type: 'success',
      },
      {
        name: 'Ok',
        handler: () => {
          console.log('Уведомление закрыто')
        },
      }
    )
  } catch (error) {
    console.error(error.message)

    renderToast(
      {
        text: 'Произошла ошибка при бронировании.',
        type: 'error',
      },
      {
        name: 'Ok',
        handler: () => {
          console.log('Уведомление закрыто')
        },
      }
    )
  }
}

export function getCleanIdAndSource(id: string, prefix: string, splitter: string): IIdAndSource | null {

  const prefixLength = prefix.length
  const result = id.slice(prefixLength).split(splitter)

  if (result.length === 2) {
    return {
      source: result[0],
      id: result[1],
    }
  }

  return
}

interface IIdAndSource {
  source: string
  id: string
}
