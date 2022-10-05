export class Params<
  K extends number | string,
  V extends number | string
  > extends Map<K, V> {
  constructor() {
    super()
  }

  get queryString(): string {
    const params = super.entries()
    const paramStrings: string[] = []

    for (const [key, value] of params) {
      paramStrings.push(`${key}=${value}`)
    }

    return `?${paramStrings.join('&')}`
  }
}

export function checkResponseOk(response: Response): void {
  if (!response.ok)
    throw new Error(`Something went wrong. Response status:${response.status}`)
}

export interface IPlace {
  id: string
  name: string
  description: string
  bookedDates: number[]
  price: number
  image: string
  source?: string
  remoteness?: number
}

export function isIPlace(object: unknown): object is IPlace {
  if (object != null && typeof object === 'object') {
    const fields = [
      'id',
      'name',
      'description',
      'bookedDates',
      'price',
      'image',
    ]
    let isIPlace = true
    fields.forEach((field) => {
      if (!(field in object)) isIPlace = false
    })
    return isIPlace
  }
}

export function isIPlaceArray(array: unknown): array is IPlace[] {
  if (Array.isArray(array)) {
    return array.every((item) => isIPlace(item))
  }
  return false
}
