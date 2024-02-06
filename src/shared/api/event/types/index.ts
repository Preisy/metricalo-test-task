import * as yup from 'yup'
import { User } from 'shared/api/user'

export namespace TableEvent {

  export const shape = User.shape.pick([
    'firstName',
    'lastName',
    'phone',
    'email',
    'organization',
  ]).shape({
    eventName: yup.string().required(),
    date: yup.date().min(
      new Date(),
      "Date can't be before today",
    ).required(),
    country: yup.string().required(),
    text: yup.string().nullable(),
  })

  export type Entity = yup.InferType<typeof shape> & {
    position: number
  }
  export type Req = yup.InferType<typeof shape>;

  export type Res = Entity

  export namespace List {
    export type Req = {
      page: number,
      rowsPerPage: number,
      sortBy: string;
      descending: boolean;
    }

    export type Res = {
      data: TableEvent.Entity[],
      total: number
    }
  }
}
